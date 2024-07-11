// -> Icons lib
import { CircleDashed, UserCog } from "lucide-react";

// -> Components
import { Button } from "../../../components/button";

export function Guests() {
  return (
    <div className="space-y-6">
      <h3 className="font-semibold text-xl"> Convidados </h3>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-8">
          <div>
            <span className="block font-medium text-zinc-100"> Jessica </span>
            <span className="block text-xs text-zinc-400 truncate">
              jessica@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-8">
          <div>
            <span className="block font-medium text-zinc-100"> Jessica </span>
            <span className="block text-xs text-zinc-400 truncate">
              jessica@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>

      <Button type="button" variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
