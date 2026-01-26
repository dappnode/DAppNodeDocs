import DocItem from '@theme-original/DocItem';
import ViewMarkdownButton from '@site/src/components/ViewMarkdownButton';

// This wrapper adds a "View Markdown" button above the documentation content
// by wrapping the original docusaurus DocItem component.
// Instead of only printing the original DocItem, we now print the button followed by the DocItem.
export default function DocItemWrapper(props) {
  return (
    <>
      <ViewMarkdownButton />
      <DocItem {...props} />
    </>
  );
}
