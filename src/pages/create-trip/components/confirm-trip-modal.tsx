// -> ReactJS
import type { FormEvent } from "react";

// -> Icons lib
import { User, X } from "lucide-react";

// -> Types
interface IConfirmTripModalProps {
  closeConfirmTripModal(): void; 
  createTrip(event: FormEvent<HTMLFormElement>): void;
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip
}: IConfirmTripModalProps) {
  return (
    <div className="fixed bg-black/70 w-full h-full inset-0 backdrop-blur-sm flex items-center justify-center px-4">
      <main className="w-full max-w-[640px] bg-zinc-900 py-5 px-6 shadow-shape rounded-xl space-y-5">
        <header className="flex w-full items-center justify-between">
          <div className="space-y-1">
            <h2 className="font-semibold text-lg">
              Confirmar criação de viagem.
            </h2>
            <h6 className="text-sm text-zinc-500 font-medium tracking-[-0.5px]">
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
            </h6>
          </div>

          <button
            type="button"
            onClick={closeConfirmTripModal}
            className="flex w-8 h-8 items-center justify-center bg-transparent"
          >
            <X className="size-5 text-zinc-400" />
          </button>
        </header>

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

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-lime-300 w-full text-lime-950 h-11 rounded-lg hover:bg-lime-400 transition-colors font-semibold"
          >
            Confirmar criação da viagem
          </button>
        </form>
      </main>
    </div>
  )
}
