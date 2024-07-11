// -> ReactJS
import type { FormEvent } from "react";

// -> Icons lib
import { AtSign, Plus, X } from "lucide-react";

// -> Components
import { Button } from "../../../components/button";
import { Modal } from "../../../components/modal";

// -> Types
interface IInviteGuestsModalProps {
  emailsToInvite: string[];
  closeGuestsModal(): void;
  handleAddEmailToInvite(event: FormEvent<HTMLFormElement>): void;
  handleRemoveEmailFromInvite(email: string): void;
}

export function InviteGuestsModal({
  emailsToInvite,
  closeGuestsModal,
  handleAddEmailToInvite,
  handleRemoveEmailFromInvite,
}: IInviteGuestsModalProps) {
  return (
    <Modal
      onClose={closeGuestsModal}
      title="Selecionar candidatos"
      subTitle="Os convidados irão receber e-mails para confirmar a participação na viagem."
    >
      <div className="flex flex-wrap gap-2">
        {emailsToInvite.map((email) => (
          <div
            key={email}
            className="flex items-center gap-2 py-1.5 px-2.5 bg-zinc-800 rounded-lg"
          >
            <span className="text-zinc-300 text-sm font-medium">{email}</span>
            <button
              type="button"
              onClick={() => handleRemoveEmailFromInvite(email)}
            >
              <X className="size-4 text-zinc-300" />
            </button>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleAddEmailToInvite}
        className="flex items-center gap-2 bg-zinc-950 p-2.5 border-2 border-zinc-800 rounded-lg"
      >
        <AtSign className="size-5 text-zinc-400" />

        <input
          type="email"
          name="email"
          placeholder="Digite o e-mail do convidado"
          className="flex flex-1 bg-transparent placeholder:text-zinc-400 font-medium outline-none"
        />

        <Button type="submit">
          Convidar
          <Plus className="size-4 text-lime-950" />
        </Button>
      </form>
    </Modal>
  );
}
