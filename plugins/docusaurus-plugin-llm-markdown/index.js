const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

/**
 * Docusaurus plugin that generates plain markdown files for LLM consumption.
 *
 * At build time, this plugin:
 * 1. Scans all .md/.mdx files in the docs directory
 * 2. Copies them to build/docs/*.md with frontmatter stripped
 * 3. Adds a header to each file with source information
 * 4. Generates /llms.txt listing all markdown URLs
 */
module.exports = function pluginLlmMarkdown(context, options) {
  const { siteConfig, outDir } = context;
  const siteUrl = siteConfig.url;

  return {
    name: 'docusaurus-plugin-llm-markdown',

    async postBuild({ outDir, content }) {
      const docsDir = path.join(context.siteDir, 'docs');
      const markdownUrls = [];

      console.log('[LLM Markdown] Generating markdown files for LLM consumption...');

      // Find all markdown files in docs
      const files = await glob('**/*.{md,mdx}', { cwd: docsDir });

      for (const file of files) {
        const sourcePath = path.join(docsDir, file);
        const fileContent = fs.readFileSync(sourcePath, 'utf-8');

        // Strip frontmatter (content between --- markers at the start)
        const strippedContent = stripFrontmatter(fileContent);

        // Convert file path to URL path
        // e.g., user/getting-started/choose-your-path.md -> /docs/user/getting-started/choose-your-path.md
        const urlPath = `/docs/${file.replace(/\.mdx?$/, '')}.md`;

        // Create output path
        const outputPath = path.join(outDir, 'docs', file.replace(/\.mdx?$/, '.md'));
        const outputDir = path.dirname(outputPath);

        // Ensure directory exists
        fs.mkdirSync(outputDir, { recursive: true });

        // Create header with reference to llms.txt index
        const header = `> ## Documentation Index
> Fetch the complete documentation index at: ${siteUrl}/llms.txt
> Use this file to discover all available pages before exploring further.

---

`;

        // Write the file with header
        fs.writeFileSync(outputPath, header + strippedContent);

        // Add to URL list
        markdownUrls.push(`${siteUrl}${urlPath}`);
      }

      // Sort URLs alphabetically
      markdownUrls.sort();

      // Generate llms.txt
      const llmsTxtContent = `# Knowledge Base

## Docs

${markdownUrls.join('\n')}
`;

      fs.writeFileSync(path.join(outDir, 'llms.txt'), llmsTxtContent);

      console.log(`[LLM Markdown] Generated ${markdownUrls.length} markdown files`);
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

