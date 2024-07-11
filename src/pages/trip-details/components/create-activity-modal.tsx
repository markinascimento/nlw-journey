// -> Icons lib
import { Calendar, Tag, X } from "lucide-react";

// -> Components
import { Button } from "../../../components/button";

// -> Types
interface ICreateActivityModalProps {
  closeCreateActivityModal(): void;
}

export function CreateActivityModal({ closeCreateActivityModal }: ICreateActivityModalProps) {
  return (
    <div className="fixed bg-black/70 w-full h-full inset-0 backdrop-blur-sm flex items-center justify-center px-4">
      <main className="w-full max-w-[640px] bg-zinc-900 py-5 px-6 shadow-shape rounded-xl space-y-5">
        <header className="flex w-full items-center justify-between">
          <div className="space-y-1">
            <h2 className="font-semibold text-lg">
              Cadastrar atividade.
            </h2>
            <h6 className="text-sm text-zinc-500 font-medium tracking-[-0.5px]">
              Todos convidados podem visualizar as atividades 
            </h6>
          </div>

          <button
            type="button"
            onClick={closeCreateActivityModal}
            className="flex w-8 h-8 items-center justify-center bg-transparent"
          >
            <X className="size-5 text-zinc-400" />
          </button>
        </header>

        <form onSubmit={() => {}} className="space-y-3">
          <div className="flex items-center gap-2 bg-zinc-950 px-4 h-14 border-2 border-zinc-800 rounded-lg">
            <Tag className="size-5 text-zinc-400" />

            <input
              type="text"
              name="title"
              placeholder="Qual a atividade?"
              className="flex flex-1 bg-transparent placeholder:text-zinc-400 font-medium outline-none"
            />
          </div>

          <div className="flex items-center gap-2"> 
            <div className="flex items-center flex-1 gap-2 bg-zinc-950 px-4 h-14 border-2 border-zinc-800 rounded-lg">
              <Calendar className="size-5 text-zinc-400" />

              <input
                type="datetime-local"
                name="occurs_at"
                placeholder="Data e horário da atividade"
                className="flex flex-1 placeholder:text-zinc-400 font-medium outline-none bg-transparent"
              />
            </div>
          </div>

          <Button type="submit" variant="primary" size="full">
            Salvar atividade
          </Button>
        </form>
      </main>
    </div>
  )
}
