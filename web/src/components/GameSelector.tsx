import { Listbox, Transition } from "@headlessui/react";
import { CaretDown } from "phosphor-react";
import { useState } from "react";
import { Game } from "../App";


interface GameSelectorProps {
  games: Game[]
  game?: Game
  setGame: any
}

export function GameSelector({ games, game, setGame }: GameSelectorProps) {
  return (
    <Listbox value={game} onChange={setGame}>
      <Listbox.Button className={`flex rounded text-sm h-11 bg-zinc-900 items-center justify-between px-4 ${(game == null ? "text-zinc-500" : "text-white")}`}>
        <div className="w-6"></div>
        {game?.title ?? "Selecione o game que deseja jogar"}<CaretDown size={24} /></Listbox.Button>
      <div className="w-full relative">
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="absolute py-2 bg-zinc-900 rounded w-full">
            {games.sort((a, b) => a.title < b.title ? -1 : 1).map((x) => (
              <Listbox.Option className="h-10 px-8 flex text-sm hover:bg-zinc-500 align-middle items-center rounded"
                key={x.id}
                value={x}
              >
                {x.title}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}