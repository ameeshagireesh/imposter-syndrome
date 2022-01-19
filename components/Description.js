/* eslint-disable react/no-children-prop */
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { sampleDescription } from "./common/sampleDescription";

function Description({ markdownContent = sampleDescription }) {
  return (
    <div className="rounded-xl overflow-hidden">
      <div id="markdown" className="bg-gray-700 p-4 ">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdownContent}
        </ReactMarkdown>
      </div>
      <p className="bg-gray-800 px-3 py-1 text-xs">
        Powered by <b>react-markdown</b> and <b>remark-gfm</b>
      </p>
    </div>
  );
}

export default Description;
