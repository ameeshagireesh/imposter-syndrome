import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

import { markdown } from "./sampleMarkdown";

function Description() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-6">Description</h1>
      <div id="markdown" className="bg-gray-700 p-4 rounded-3xl">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Description;
