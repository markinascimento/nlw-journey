// -> ReactJS
import { useState, type FormEvent } from "react";

// -> Icons lib
import { AtSign, Plus, X } from "lucide-react";

export function Modal({ onClose }: { onClose(): void }) {
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  function handleAddEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()
    
    if(!email) return;

    setEmailsToInvite(prevState => {
      const itemIndex = prevState.findIndex(item => item === email)

      if(itemIndex >= 0) {
        return prevState;
      }
      
      return [...prevState, email];
    })

    event.currentTarget.reset()
  }

  function handleRemoveEmailFromInvite(email: string) {
    setEmailsToInvite(prevState => (
      prevState.filter(item => item !== email)
    ))
  }

  return (
    <div className="fixed bg-black/70 w-full h-full inset-0 backdrop-blur-sm flex items-center justify-center">
      <main className="w-full max-w-[640px] bg-zinc-900 py-5 px-6 shadow-shape rounded-xl space-y-5">
        <header className="flex w-full items-center justify-between"> 
          <div className="space-y-1">
            <h2 className="font-semibold text-lg"> Selecionar quem está na viagem </h2>
            <h6 className="text-sm text-zinc-500 font-medium tracking-[-0.5px]"> 
              Os convidados irão receber e-mails para confirmar a participação na viagem.
            </h6>
          </div>

          <button type="button" onClick={onClose} className="flex w-8 h-8 items-center justify-center bg-transparent">
            <X className="size-5 text-zinc-400" />
          </button>
        </header>

        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map(email => (
            <div key={email} className="flex items-center gap-2 py-1.5 px-2.5 bg-zinc-800 rounded-lg">
              <span className="text-zinc-300 text-sm font-medium"> {email} </span>
              <button type="button" onClick={() => handleRemoveEmailFromInvite(email)}>
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
            type='submit' 
            className='flex items-center gap-2 bg-lime-300 text-lime-950 px-5 py-2 rounded-lg hover:bg-lime-400 transition-colors'
          >
            Convidar
            <Plus className='size-4 text-lime-950' />
          </button>
        </form>
      </main>
    </div>
  )
}
