export function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl text-center">
        <p className="text-zinc-300 text-lg">
          Convide seus amigos e planeje sua próxima viagem!
        </p>

        <div>
          <input type="text" placeholder="Para onde você vai?" />
          <input type="text" placeholder="Quando?" />
          <button> Continuar </button>
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a href="#" className="text-zinc-300 underline">
            {" "}
            termos de uso{" "}
          </a>{" "}
          e{" "}
          <a href="#" className="text-zinc-300 underline">
            {" "}
            políticas de privacidade{" "}
          </a>
        </p>
      </div>
    </div>
  );
}
