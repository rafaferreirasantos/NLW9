import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from "phosphor-react";
import { Input } from "./forms/Input";

import { CreateAdBanner } from './CreateAdBanner';
import { GameController } from "phosphor-react";

function CreateAdModal() {
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
              <Input
                id="game"
                type="text"
                placeholder="Selecione o game que deseja jogar?"
                className="bg-zinc-900 px-4 py-3 rounded text-sm placeholder:text-zinc-500"
              />
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