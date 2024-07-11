// -> ReactJS
import { useCallback, useState } from "react";

// -> Icons lib
import { Plus } from "lucide-react";

// -> Components
import { Activities } from "./components/activities";
import { CreateActivityModal } from "./components/create-activity-modal";
import { DestinationAndDateHeader } from "./components/destination-and-date-header";
import { Guests } from "./components/guests";
import { ImportantLinks } from "./components/important-links";

export default function TripDetails() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState<boolean>(false)

  const openCreateActivityModal = useCallback(() => {
    setIsCreateActivityModalOpen(true)
  }, [])

  const closeCreateActivityModal = useCallback(() => {
    setIsCreateActivityModalOpen(false)
  }, [])

  return (
    <div className="w-full max-w-6xl px-4 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />

      <main className="flex gap-16">
        <div className="flex-1 space-y-6 px-4">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-3xl font-semibold"> Atividades </h1>

            <button
              type="button"
              onClick={openCreateActivityModal}
              className="flex items-center font-semibold gap-2 bg-lime-300 text-lime-950 px-6 py-2 rounded-lg hover:bg-lime-400 transition-colors"
            >
              <Plus className="size-4 text-lime-950" />
              Cadastrar atividade
            </button>
          </div>

          <Activities />
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks />

          <div className="h-px w-full bg-zinc-800" />

          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal 
          closeCreateActivityModal={closeCreateActivityModal} 
        />
      )}
    </div>
  )
}
