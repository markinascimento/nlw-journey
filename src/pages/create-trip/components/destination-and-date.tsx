// -> Icons lib
import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react';

// -> Components
import { Button } from '../../../components/button';

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
        <Button type='button' onClick={closeGuestsInput} variant='secondary'>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button type='button' onClick={openGuestsInput}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  )
}
