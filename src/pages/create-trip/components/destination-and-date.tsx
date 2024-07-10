// -> Icons lib
import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react';

// -> Types
interface IDestinationAndDateProps {
  isGuestsInputOpen: boolean;
  closeGuestsInput(): void;
  openGuestsInput(): void;
}

export function DestinationAndDate({
  isGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput,
}: IDestinationAndDateProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-2">
      <div className="flex itetms-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none disabled:cursor-not-allowed"
        />
      </div>
      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Quando?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none w-48 disabled:cursor-not-allowed"
        />
      </div>
      {isGuestsInputOpen ? (
        <button
          type="button"
          onClick={closeGuestsInput}
          className="flex items-center gap-2 bg-zinc-800 text-zinc-200 px-5 py-2 rounded-lg hover:bg-zinc-700 transition-colors"
        >
          Alterar local/data
          <Settings2 className="size-5" />
        </button>
      ) : (
        <button
          type="button"
          onClick={openGuestsInput}
          className="flex items-center gap-2 bg-lime-300 text-lime-950 px-5 py-2 rounded-lg hover:bg-lime-400 transition-colors"
        >
          Continuar
          <ArrowRight className="size-5" />
        </button>
      )}
    </div>
  )
}
