// -> ReactJS
import { useCallback, useState } from 'react';

// -> Icons lib
import { ArrowRight, Calendar, MapPin, Settings2, UserRoundPlus } from 'lucide-react';

// -> Components
import { Modal } from './components/Modal';

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState<boolean>(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState<boolean>(false);

  const openGuestsInput = useCallback(() => {
    setIsGuestsInputOpen(true)
  }, [])

  const closeGuestsInput = useCallback(() => {
    setIsGuestsInputOpen(false)
  }, [])

  const openGuestsModal = useCallback(() => {
    setIsGuestsModalOpen(true)
  }, []);

  const closeGuestsModal = useCallback(() => {
    setIsGuestsModalOpen(false)
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="w-full max-w-3xl px-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg"> Convide seus amigos e planeje sua próxima viagem! </p>
        </div>
        
        <div className='space-y-4'>
          <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-2'>
            <div className='flex itetms-center gap-2 flex-1'>
              <MapPin className='size-5 text-zinc-400' />
              <input disabled={isGuestsInputOpen} type="text" placeholder='Para onde você vai?' className='bg-transparent text-lg placeholder-zinc-400 outline-none disabled:cursor-not-allowed' />
            </div>

            <div className='flex items-center gap-2'>
              <Calendar className='size-5 text-zinc-400' />
              <input disabled={isGuestsInputOpen} type="text" placeholder='Quando?' className='bg-transparent text-lg placeholder-zinc-400 outline-none w-48 disabled:cursor-not-allowed' />
            </div>

            {isGuestsInputOpen ? (
              <button 
                type='button'
                onClick={closeGuestsInput}
                className='flex items-center gap-2 bg-zinc-800 text-zinc-200 px-5 py-2 rounded-lg hover:bg-zinc-700 transition-colors'
              >
                Alterar local/data
                <Settings2 className='size-5' />
              </button>
            ) : (
              <button 
                type='button'
                onClick={openGuestsInput}
                className='flex items-center gap-2 bg-lime-300 text-lime-950 px-5 py-2 rounded-lg hover:bg-lime-400 transition-colors'
              >
                Continuar
                <ArrowRight className='size-5' />
              </button>
            )}
          </div>

          {isGuestsInputOpen && (
            <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-2'>
              <button 
                type='button'
                onClick={openGuestsModal}
                className='flex items-center gap-2 flex-1'
              >
                <UserRoundPlus className='size-5 text-zinc-400' />
                <span className='text-lg text-zinc-400'> Quem estará na viagem? </span>
              </button>

              <button 
                type='button'
                onClick={openGuestsInput}
                className='flex items-center gap-2 bg-lime-300 text-lime-950 px-5 py-2 rounded-lg hover:bg-lime-400 transition-colors'
              >
                Confirmar viagem
                <ArrowRight className='size-5' />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a href="/" className="text-zinc-300 underline">termos de uso</a> e <a href="/" className="text-zinc-300 underline"> políticas de privacidade </a>
        </p>
      </div>

      {isGuestsModalOpen && (
        <Modal onClose={closeGuestsModal} />
      )}
    </div>
  );
}
