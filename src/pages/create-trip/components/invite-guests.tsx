// -> Icons lib
import { ArrowRight, UserRoundPlus } from "lucide-react";

// -> Components
import { Button } from "../../../components/button";

// -> Types
interface IInviteGuestsProps {
  emailsToInvite: string[];
  openGuestsModal(): void;
  openConfirmTripModal(): void;
}

export function InviteGuests({
  emailsToInvite,
  openGuestsModal,
  openConfirmTripModal,
}: IInviteGuestsProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-2">
      <button
        type="button"
        onClick={openGuestsModal}
        className="flex items-center gap-2 flex-1"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100 text-lg flex-1 text-left">
            {`${emailsToInvite.length} pessoa(s) convidada(s)`}
          </span>
        ) : (
          <span className="text-zinc-100 text-lg flex-1 text-left">
            Quem estará na viagem?
          </span>
        )}
      </button>
      
      <Button type="button" onClick={openConfirmTripModal}>
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  )
}
