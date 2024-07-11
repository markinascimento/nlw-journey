// -> Icons lib
import { Calendar, Tag } from "lucide-react";

// -> Components
import { Button } from "../../../components/button";
import { Modal } from "../../../components/modal";

// -> Types
interface ICreateActivityModalProps {
  closeCreateActivityModal(): void;
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: ICreateActivityModalProps) {
  return (
    <Modal
      onClose={closeCreateActivityModal}
      title="Cadastrar atividade."
      subTitle="Todos convidados podem visualizar as atividades"
    >
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
    </Modal>
  );
}
