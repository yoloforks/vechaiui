import DocumentBuilder from "@components/document-builder";

const propList = [
  {
    name: "ContextMenu",
    value: "context-menu",
    propTypes: [
      {
        extend: true,
        path: 'https://www.radix-ui.com/primitives/docs/components/context-menu',
        external: true,
        label: "See more `ContextMenu` props."
      }
    ],
  },
];

const demoList = [
  {
    name: "Basic usage",
    files: [
      {
        name: "context-menu.tsx",
        code: `<div>
  <ContextMenu.Root>
    <ContextMenu.Trigger>
      <div className="flex items-center justify-center p-16 bg-gray-100 dark:bg-neutral-800">
        Right click anywhere
      </div>
    </ContextMenu.Trigger>
    <ContextMenu.Content
      className={cx(
        "z-40 w-56 py-1 rounded-md shadow-sm outline-none",
        "bg-white border border-gray-200",
        "dark:bg-neutral-800 dark:border-gray-700"
      )}
      alignOffset={-5}
    >
      <ContextMenu.Item
        className={cx(
          "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-default focus:outline-none",
          "focus:bg-neutral-100",
          "dark:focus:bg-neutral-700"
        )}
      >
        <Icon as={ArrowsExpandIcon} className={cx("w-4 h-4 mr-2")} />
        <span className="flex-1">Fullscreen</span>
        <Kbd className="font-sans">⌘F</Kbd>
      </ContextMenu.Item>
      <ContextMenu.Item
        className={cx(
          "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-default focus:outline-none",
          "focus:bg-neutral-100 dark:focus:bg-neutral-700"
        )}
      >
        <Icon as={DuplicateIcon} className={cx("w-4 h-4 mr-2")} />
        <span className="flex-1">Copy</span>
        <Kbd className="font-sans">⌘⇧C</Kbd>
      </ContextMenu.Item>
      <ContextMenu.Item
        className={cx(
          "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-default focus:outline-none",
          "focus:bg-neutral-100 dark:focus:bg-neutral-700"
        )}
      >
        <Icon as={ShareIcon} className={cx("w-4 h-4 mr-2")} />
        <span className="flex-1">Share</span>
      </ContextMenu.Item>
      <ContextMenu.Separator className="h-px my-1 bg-neutral-200 dark:bg-neutral-700" />
      <ContextMenu.Item
        className={cx(
          "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-default focus:outline-none",
          "focus:bg-neutral-100 dark:focus:bg-neutral-700"
        )}
      >
        <Icon as={CalendarIcon} className={cx("w-4 h-4 mr-2")} />
        <span className="flex-1">Due Date</span>
        <Kbd className="font-sans">⌘D</Kbd>
      </ContextMenu.Item>

      <ContextMenu.Root>
        <ContextMenu.TriggerItem
          className={cx(
            "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-default focus:outline-none",
            "focus:bg-neutral-100 dark:focus:bg-neutral-700"
          )}
        >
          <Icon as={TagIcon} className={cx("w-4 h-4 mr-2")} />
          <span className="flex-1">Labels</span>
          <Icon as={ChevronRightIcon} className={cx("w-3 h-3 ml-2")} />
        </ContextMenu.TriggerItem>
        <ContextMenu.Content
          className={cx(
            "z-40 w-48 py-1 rounded-md shadow-sm outline-none",
            "bg-white border border-gray-200",
            "dark:bg-neutral-800 dark:border-gray-700"
          )}
          sideOffset={5}
          alignOffset={-5}
        >
          <ContextMenu.Item
            className={cx(
              "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-default focus:outline-none",
              "focus:bg-neutral-100 dark:focus:bg-neutral-700"
            )}
          >
            <span className="w-2 h-2 mr-4 bg-red-500 rounded-full" />
            Bug
          </ContextMenu.Item>
          <ContextMenu.Item
            className={cx(
              "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-default focus:outline-none",
              "focus:bg-neutral-100 dark:focus:bg-neutral-700"
            )}
          >
            <span className="w-2 h-2 mr-4 bg-purple-500 rounded-full" />
            Feature
          </ContextMenu.Item>
          <ContextMenu.Item
            className={cx(
              "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-default focus:outline-none",
              "focus:bg-neutral-100 dark:focus:bg-neutral-700"
            )}
          >
            <span className="w-2 h-2 mr-4 bg-blue-500 rounded-full" />
            Improvement
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Root>
      <ContextMenu.Item
        className={cx(
          "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-default focus:outline-none",
          "focus:bg-neutral-100 dark:focus:bg-neutral-700"
        )}
      >
        <Icon as={HashtagIcon} className={cx("w-4 h-4 mr-2")} />
        <span className="flex-1">Unsubscribe</span>
        <Kbd className="font-sans">⌘⇧U</Kbd>
      </ContextMenu.Item>
    </ContextMenu.Content>
  </ContextMenu.Root>
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const contextComponent = {
  name: "ContextMenu",
  importer: `import * as ContextMenu from "@radix-ui/react-context-menu";`,
  demoList,
  propList,
};

export default function ContextMenu() {
  return <DocumentBuilder component={contextComponent} />;
}