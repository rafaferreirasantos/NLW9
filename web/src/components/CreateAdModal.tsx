import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Input } from "./forms/Input";
import { GameController, Check, CaretDown } from "phosphor-react";
import { Listbox, Transition } from '@headlessui/react'


import { CreateAdBanner } from './CreateAdBanner';
import { Game } from "../App";
import { useState } from "react";

interface CreateAdModealProps {
  games: Game[];
}

function CreateAdModal({ games }: CreateAdModealProps) {
  const [game, setGame] = useState<Game>();

  function teste() {
    console.log('mudou')
  }
  return (
    <Dialog.Root>
      <CreateAdBanner />
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/40 inset-0 fixed' />
        <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[680px] shadow-lg shadow-black/50'>
          <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>
          <form className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="game" className="font-semibold">Qual o game?</label>
              {/* <Input
                id="game"
                type="text"
                placeholder="Selecione o game que deseja jogar?"
                className="bg-zinc-900 px-4 py-3 rounded text-sm placeholder:text-zinc-500"
              /> */}
              <Listbox value={game} onChange={setGame}>
                <Listbox.Button className={`flex rounded text-sm h-11 bg-zinc-900 items-center justify-between px-4 ${(game == null ? "text-zinc-500" : "text-white")}`}>
                  <div className="w-6"></div>
                  {game?.title ?? "Selecione o game que deseja jogar"}<CaretDown size={24} /></Listbox.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Listbox.Options className="bg-zinc-900 rounded py-2">
                    {games.sort((a, b) => a.title < b.title ? -1 : 1).map((x) => (
                      <Listbox.Option className="h-10 px-8 text-sm hover:bg-zinc-500 flex align-middle items-center rounded"
                        key={x.id}
                        value={x}
                      >
                        {x.title}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </Listbox>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Seu nome (ou nickname)</label>
              <Input type="text" placeholder="Como te chamam dentro do game?" id="name" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                <Input type="number" placeholder="Tudo bem ser ZERO" id="yearsPlaying" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="discord">Qual o seu Discord?</label>
                <Input type="text" placeholder="Usuario#0000" id="discord" />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="weekdays">Quando costuma jogar?</label>
                <div className="flex gap-1">
                  <button
                    title="Domingo"
                    className="w-[46px] h-[46px] rounded bg-zinc-900"
                  >
                    D
                  </button>
                  <button
                    title="Segunda"
                    className="w-[46px] h-[46px] rounded bg-zinc-900"
                  >
                    S
                  </button>
                  <button
                    title="Terça"
                    className="w-[46px] h-[46px] rounded bg-zinc-900"
                  >
                    T
                  </button>
                  <button
                    title="Quarta"
                    className="w-[46px] h-[46px] rounded bg-zinc-900"
                  >
                    Q
                  </button>
                  <button
                    title="Quinta"
                    className="w-[46px] h-[46px] rounded bg-zinc-900"
                  >
                    Q
                  </button>
                  <button
                    title="Sexta"
                    className="w-[46px] h-[46px] rounded bg-zinc-900"
                  >
                    S
                  </button>
                  <button
                    title="Sábado"
                    className="w-[46px] h-[46px] rounded bg-zinc-900"
                  >
                    S
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-1 ">
                <label htmlFor="hourStart">Qual horário do dia?</label>
                <div className="grid grid-cols-2 gap-2">
                  <Input id="hourStart" type="time" placeholder="De" />
                  <Input id="hourEnd" type="time" placeholder="Até" />
                </div>
              </div>
            </div>
            <div className="mt-2 flex gap-2 items-center">
              <Checkbox.Root className="w-6 h-6 p-1 rounded bg-zinc-900" id="allowChannelVoice">
                <Checkbox.Indicator>
                  <Check className="w-4 h-4 text-emerald-400" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label htmlFor="allowChannelVoice">Costumo me conectar ao chat de voz</label>
            </div>
            <footer className="mt-4 flex justify-end gap-4">
              <Dialog.Close
                className="
                    bg-zinc-500 
                    hover:bg-zinc-600
                    px-5 
                    h-12 
                    rounded-md 
                    font-semibold">
                Cancelar</Dialog.Close>
              <button
                type="submit"
                className="
                    bg-violet-500 
                    hover:bg-violet-600
                    px-5 
                    h-12 
                    rounded-md 
                    font-semibold 
                    flex 
                    gap-3 
                    items-center">
                <GameController size={24} />
                Encontrar duo
              </button>
            </footer>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default CreateAdModal;;