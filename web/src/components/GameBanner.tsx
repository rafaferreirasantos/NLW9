import * as Dialog from "@radix-ui/react-dialog"

import { Game } from "../App"

interface GameBannerProps {
  game: Game,
  bannerURL: string,
  title: string,
  adsCount: number
  setSelectedGame: Function
}

export function GameBanner(props: GameBannerProps) {
  function handleGameBannerClick(game: Game) {
    props.setSelectedGame(game);
  }
  return (
    <Dialog.Trigger className='relative rounded-lg overflow-hidden' onClick={() => handleGameBannerClick(props.game)}>
      <img src={props.bannerURL} alt={`Banner ${props.title}`} />
      <div className="w-full pt-16 pb-4 px-4 bg-gamelabel-gradient absolute bottom-0 left-0 right-0">
        <strong className='font-bold text-white block'>{props.title}</strong>
        <span className='text-zinc-300 text-sm block mt-1'>{props.adsCount} anúncio(s)</span>
      </div>
    </Dialog.Trigger>
  )
}