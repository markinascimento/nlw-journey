// -> Icons lib
import { Calendar, MapPin, Settings2 } from "lucide-react";

// -> Components
import { Button } from "../../../components/button";

export function DestinationAndDateHeader() {
  return (
    <header className="flex items-center justify-between gap-4 px-4 h-16 rounded-xl bg-zinc-900 shadow-shape">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100 font-medium tracking-[0.5px]">
          Florianópolis, Brasil
        </span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100 font-medium tracking-[0.5px]">
            17 a 23 de Agosto
          </span>
        </div>

        <Button type="button" variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </header>
  );
}
