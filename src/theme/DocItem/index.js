import DocItem from '@theme-original/DocItem';
import ViewMarkdownButton from '@site/src/components/ViewMarkdownButton';

// This wrapper adds a "View Markdown" button next to the page title
// by wrapping the original Docusaurus DocItem component.
// The button uses useEffect to position itself inside the h1 title.
export default function DocItemWrapper(props) {
  return (
    <>
      <ViewMarkdownButton />
      <DocItem {...props} />
    </>
  );
}
