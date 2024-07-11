// -> Icons lib
import { Link2, Plus } from "lucide-react";

// -> Components
import { Button } from "../../../components/button";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h3 className="font-semibold text-xl"> Links importantes </h3>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-8">
          <div>
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnb
            </span>
            <a
              href="/"
              className="block text-sm text-zinc-400 truncate hover:text-zinc-200 transition-colors"
            >
              https://dlkwjqldkwqjdlwkqjdlkwqjdlwkqdjwlqkdjqwlkdjwql
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-8">
          <div>
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnb
            </span>
            <a
              href="/"
              className="block text-sm text-zinc-400 truncate hover:text-zinc-200 transition-colors"
            >
              https://dlkwjqldkwqjdlwkqjdlkwqjdlwkqdjwlqkdjqwlkdjwql
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>

      <Button variant="secondary" size="full">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  );
}
