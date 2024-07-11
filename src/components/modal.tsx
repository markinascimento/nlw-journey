// -> ReactJS
import type { ReactNode } from "react";

// -> Icons lib
import { X } from "lucide-react";

// -> Types
interface IModalProps {
  children: ReactNode;
  title: string;
  subTitle?: string | ReactNode;
  onClose(): void;
}

export function Modal({ title, subTitle, children, onClose }: IModalProps) {
  return (
    <div className="fixed bg-black/70 w-full h-full inset-0 backdrop-blur-sm flex items-center justify-center px-4">
      <main className="w-full max-w-[640px] bg-zinc-900 py-5 px-6 shadow-shape rounded-xl space-y-5">
        <header className="flex w-full items-center justify-between">
          <div className="space-y-1">
            <h2 className="font-semibold text-lg">{title}</h2>
            {subTitle && (
              <h6 className="text-sm text-zinc-500 font-medium tracking-[-0.5px]">
                {subTitle}
              </h6>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex w-8 h-8 items-center justify-center bg-transparent"
          >
            <X className="size-5 text-zinc-400" />
          </button>
        </header>

        <div>{children}</div>
      </main>
    </div>
  );
}
