import { HandsClapping, MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

interface CreateAdBannerProps {
  setSelectedGame: Function
}

export function CreateAdBanner({ setSelectedGame }: CreateAdBannerProps) {
  return (
    <div className="pt-1 self-stretch bg-nwl-gradient mt-8 overflow-hidden rounded-lg">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black">Não encontrou seu duo?</strong>
          <span className="block text-zinc-400 mt-1">Publique seu anúncio para encontrar novos players!</span>
        </div>
        <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3" onClick={() => setSelectedGame()}>
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  )
}