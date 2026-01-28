const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

/**
 * Docusaurus plugin that generates plain markdown files for LLM consumption.
 *
 * Each markdown file should have an `llm_description` field in its frontmatter:
 *
 * ---
 * title: My Page
 * llm_description: Brief description of this page for LLM consumption.
 * ---
 */
module.exports = function pluginLlmMarkdown(context) {
  const { siteConfig } = context;
  const siteUrl = siteConfig.url;

  return {
    name: 'docusaurus-plugin-llm-markdown',

    async postBuild({ outDir }) {
      const docsDir = path.join(context.siteDir, 'docs');
      const docsMetadata = [];

      console.log('[LLM Markdown] Generating markdown files for LLM consumption...');

      // Find all markdown files in docs
      const files = await glob('**/*.{md,mdx}', { cwd: docsDir });

      for (const file of files) {
        const sourcePath = path.join(docsDir, file);
        const fileContent = fs.readFileSync(sourcePath, 'utf-8');

        // Get title and llm_description from frontmatter
        const title = getTitle(fileContent, file);
        const llmDescription = getLlmDescription(fileContent);

        // Strip frontmatter
        const strippedContent = stripFrontmatter(fileContent);

        // Convert file path to URL path
        const urlPath = `/docs/${file.replace(/\.mdx?$/, '')}.md`;

        // Create output path
        const outputPath = path.join(outDir, 'docs', file.replace(/\.mdx?$/, '.md'));
        const outputDirPath = path.dirname(outputPath);

        // Ensure directory exists
        fs.mkdirSync(outputDirPath, { recursive: true });

        // Create header with reference to llms.txt index
        const header = `> ## Documentation Index
> Fetch the complete documentation index at: ${siteUrl}/llms.txt
> Use this file to discover all available pages before exploring further.

---

`;

        // Write the file with header
        fs.writeFileSync(outputPath, header + strippedContent);

        // Store metadata for llms.txt
        docsMetadata.push({
          title,
          description: llmDescription,
          url: `${siteUrl}${urlPath}`,
          path: file,
        });
      }

      // Sort by path alphabetically
      docsMetadata.sort((a, b) => a.path.localeCompare(b.path));

      // Generate llms.txt with descriptions
      const docsList = docsMetadata
        .map(doc => `- [${doc.title}](${doc.url}): ${doc.description}`)
        .join('\n');

      const llmsTxtContent = `# Knowledge Base

## Docs

${docsList}
`;

      fs.writeFileSync(path.join(outDir, 'llms.txt'), llmsTxtContent);

      console.log(`[LLM Markdown] Generated ${docsMetadata.length} markdown files`);
      console.log(`[LLM Markdown] Created /llms.txt index`);
    },
  };
};

/**
 * Remove YAML frontmatter from markdown content
 */
function stripFrontmatter(content) {
  const frontmatterRegex = /^---\r?\n[\s\S]*?\r?\n---\r?\n*/;
  return content.replace(frontmatterRegex, '');
}

/**
 * Extract title from frontmatter or first heading
 */
function getTitle(content, filename) {
  const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (frontmatterMatch) {
    const titleMatch = frontmatterMatch[1].match(/^title:\s*["']?(.+?)["']?\s*$/m);
    if (titleMatch) {
      return titleMatch[1];
    }
  }

  const headingMatch = content.match(/^#\s+(.+)$/m);
  if (headingMatch) {
    return headingMatch[1];
  }

  return filename
    .replace(/\.mdx?$/, '')
    .split('/')
    .pop()
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

/**
 * Extract llm_description from frontmatter
 */
function getLlmDescription(content) {
  const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (frontmatterMatch) {
    const descMatch = frontmatterMatch[1].match(/^llm_description:\s*["']?(.+?)["']?\s*$/m);
    if (descMatch) {
      return descMatch[1];
    }
  }
  return 'Documentation page';
}
