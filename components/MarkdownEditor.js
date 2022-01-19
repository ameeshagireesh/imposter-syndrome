import { useState } from "react";
import { Tab } from "@headlessui/react";
import Description from "./Description";
import { sampleDescription } from "./common/sampleDescription";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const tabs = [
  { title: "Markdown", icon: null },
  { title: "Preview", icon: null },
];

export default function MarkdownEditor() {
  const [markdownContent, setMarkdownContent] = useState(sampleDescription);

  return (
    <div className="w-full px-2 py-10 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex bg-gray-800 rounded-t-xl overflow-hidden">
          {tabs.map((tabContent, index) => {
            return (
              <Tab
                key={`markdownTab${index}`}
                className={({ selected }) =>
                  classNames(
                    "py-2.5 px-4 leading-5 text-white",
                    "focus:outline-none",
                    selected ? "bg-gray-700" : "text-gray-100"
                  )
                }
              >
                {tabContent.icon}
                {tabContent.title}
              </Tab>
            );
          })}
        </Tab.List>
        <Tab.Panels className="rounded-b-xl overflow-hidden">
          <Tab.Panel className={classNames("bg-gray-700 p-3")}>
            <textarea
              autoFocus
              id="markdownEditor"
              className="w-full h-96 bg-transparent outline-none scroll-auto resize-y"
              value={markdownContent}
              onChange={(e) => setMarkdownContent(e.target.value)}
            />
          </Tab.Panel>
          <Tab.Panel className={classNames("bg-gray-700")}>
            <Description markdownContent={markdownContent} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
