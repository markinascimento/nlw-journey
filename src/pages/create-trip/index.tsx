// -> ReactJS
import { useCallback, useState, type FormEvent } from "react";

// -> Routing lib
import { useNavigate } from "react-router-dom";

// -> Components
import { ConfirmTripModal } from "./components/confirm-trip-modal";
import { DestinationAndDate } from "./components/destination-and-date";
import { InviteGuests } from "./components/invite-guests";
import { InviteGuestsModal } from "./components/invite-guests-modal";

export function CreateTrip() {
  const navigate = useNavigate();

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

  function handleCreateTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    navigate('/trips/123')
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
          <DestinationAndDate 
            isGuestsInputOpen={isGuestsInputOpen}
            closeGuestsInput={closeGuestsInput}
            openGuestsInput={openGuestsInput}
          />

          {isGuestsInputOpen && (
            <InviteGuests
              emailsToInvite={emailsToInvite}
              openGuestsModal={openGuestsModal}
              openConfirmTripModal={openConfirmTripModal}
            />
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
        <InviteGuestsModal 
          emailsToInvite={emailsToInvite}
          closeGuestsModal={closeGuestsModal}
          handleAddEmailToInvite={handleAddEmailToInvite}
          handleRemoveEmailFromInvite={handleRemoveEmailFromInvite}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal 
          createTrip={handleCreateTrip}
          closeConfirmTripModal={closeConfirmTripModal}
        />
      )}
    </div>
  );
}
