// -> ReactJS
import { useCallback, useState, type FormEvent } from "react";

// -> Icons lib
import {
  ArrowRight,
  AtSign,
  Calendar,
  MapPin,
  Plus,
  Settings2,
  User,
  UserRoundPlus,
  X,
} from "lucide-react";

// -> Components

export function App() {
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState<boolean>(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState<boolean>(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] =
    useState<boolean>(false);

  const openGuestsInput = useCallback(() => {
    setIsGuestsInputOpen(true);
  }, []);

  const closeGuestsInput = useCallback(() => {
    setIsGuestsInputOpen(false);
  }, []);

  const openGuestsModal = useCallback(() => {
    setIsGuestsModalOpen(true);
  }, []);

  const closeGuestsModal = useCallback(() => {
    setIsGuestsModalOpen(false);
  }, []);

  const openConfirmTripModal = useCallback(() => {
    setIsConfirmTripModalOpen(true);
  }, []);

  const closeConfirmTripModal = useCallback(() => {
    setIsConfirmTripModalOpen(false);
  }, []);

  function handleAddEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) return;

    setEmailsToInvite((prevState) => {
      const itemIndex = prevState.findIndex((item) => item === email);

      if (itemIndex >= 0) {
        return prevState;
      }

      return [...prevState, email];
    });

    event.currentTarget.reset();
  }

  function handleRemoveEmailFromInvite(email: string) {
    setEmailsToInvite((prevState) =>
      prevState.filter((item) => item !== email)
    );
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="w-full max-w-3xl px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
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

          {isGuestsInputOpen && (
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

              <button
                type="button"
                onClick={openConfirmTripModal}
                className="flex items-center gap-2 bg-lime-300 text-lime-950 px-5 py-2 rounded-lg hover:bg-lime-400 transition-colors"
              >
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda
          <br />
          com nossos
          <a href="/" className="text-zinc-300 underline">
            termos de uso
          </a>
          e
          <a href="/" className="text-zinc-300 underline">
            políticas de privacidade
          </a>
        </p>
      </div>

      {isGuestsModalOpen && (
        <div className="fixed bg-black/70 w-full h-full inset-0 backdrop-blur-sm flex items-center justify-center px-4">
          <main className="w-full max-w-[640px] bg-zinc-900 py-5 px-6 shadow-shape rounded-xl space-y-5">
            <header className="flex w-full items-center justify-between">
              <div className="space-y-1">
                <h2 className="font-semibold text-lg">Selecionar convidados</h2>
                <h6 className="text-sm text-zinc-500 font-medium tracking-[-0.5px]">
                  Os convidados irão receber e-mails para confirmar a
                  participação na viagem.
                </h6>
              </div>

              <button
                type="button"
                onClick={closeGuestsModal}
                className="flex w-8 h-8 items-center justify-center bg-transparent"
              >
                <X className="size-5 text-zinc-400" />
              </button>
            </header>

            <div className="flex flex-wrap gap-2">
              {emailsToInvite.map((email) => (
                <div
                  key={email}
                  className="flex items-center gap-2 py-1.5 px-2.5 bg-zinc-800 rounded-lg"
                >
                  <span className="text-zinc-300 text-sm font-medium">
                    {email}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveEmailFromInvite(email)}
                  >
                    <X className="size-4 text-zinc-300" />
                  </button>
                </div>
              ))}
            </div>

            <div className="h-px w-full bg-zinc-800" />

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

              <button
                type="submit"
                className="flex items-center gap-2 bg-lime-300 text-lime-950 px-5 py-2 rounded-lg hover:bg-lime-400 transition-colors"
              >
                Convidar
                <Plus className="size-4 text-lime-950" />
              </button>
            </form>
          </main>
        </div>
      )}

      {isConfirmTripModalOpen && (
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

            <form onSubmit={handleAddEmailToInvite} className="space-y-3">
              <div className="flex items-center gap-2 bg-zinc-950 px-4 h-14 border-2 border-zinc-800 rounded-lg">
                <User className="size-5 text-zinc-400" />

                <input
                  type="email"
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
      )}
    </div>
  );
}
