/* eslint-disable react/no-children-prop */
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const markdown = `
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.  

This is a sample \`variable\`

\`\`\`js
function Description() {
  return (
    <div id="markdown" className="bg-gray-700 p-4 rounded-xl">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}
\`\`\`

Unordered List
* Bullet
* [ ] todo
* [x] done

Ordered List
1. \`hello\`
2. hello 2

A table:

| heading 1 | heading 2 |
| - | - |
| a | b |
| a | b |

![Imgur](https://imgur.com/I66f1ob.png)
`;

function Description() {
  return (
    <div id="markdown" className="bg-gray-700 p-4 rounded-xl">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}

export default Description;
