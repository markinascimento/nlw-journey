// -> ReactJS
import type { FormEvent } from "react";

// -> Icons lib
import { User } from "lucide-react";

// -> Components
import { Button } from "../../../components/button";
import { Modal } from "../../../components/modal";

// -> Types
interface IConfirmTripModalProps {
  closeConfirmTripModal(): void;
  createTrip(event: FormEvent<HTMLFormElement>): void;
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
}: IConfirmTripModalProps) {
  return (
    <Modal
      onClose={closeConfirmTripModal}
      title="Confirmar criação de viagem."
      subTitle={
        <span className="text-sm text-zinc-500 font-medium tracking-[-0.5px]">
          Para concluir a criação da viagem para
          <span className="text-zinc-100 font-semibold">
            {" "}
            Florianópolis, Brasil
          </span>{" "}
          nas datas de
          <span className="text-zinc-100 font-semibold">
            {" "}
            16 a 27 de Agosto de 2024
          </span>{" "}
          preencha seus dados abaixo.
        </span>
      }
    >
      <form onSubmit={createTrip} className="space-y-3">
        <div className="flex items-center gap-2 bg-zinc-950 px-4 h-14 border-2 border-zinc-800 rounded-lg">
          <User className="size-5 text-zinc-400" />

          <input
            type="text"
            name="name"
            placeholder="Seu nome completo"
            className="flex flex-1 bg-transparent placeholder:text-zinc-400 font-medium outline-none"
          />
        </div>

        <div className="flex items-center gap-2 bg-zinc-950 px-4 h-14 border-2 border-zinc-800 rounded-lg">
          <User className="size-5 text-zinc-400" />

          <input
            type="email"
            name="email"
            placeholder="Seu e-mail pessoal"
            className="flex flex-1 bg-transparent placeholder:text-zinc-400 font-medium outline-none"
          />
        </div>

        <Button type="button" size="full">
          Confirmar criação da viagem
        </Button>
      </form>
    </Modal>
  );
}
