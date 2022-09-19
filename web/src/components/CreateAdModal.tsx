import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Input } from "./forms/Input";
import { GameController, Check } from "phosphor-react";

import { CreateAdBanner } from './CreateAdBanner';
import { Game } from "../App";
import { GameSelector } from "./GameSelector";
import { WeekDaySelector } from "./WeekDaySelector";

interface CreateAdModealProps {
  games: Game[];
  selectedGame: Game
  setSelectedGame: Function
}

function CreateAdModal({ games, selectedGame, setSelectedGame }: CreateAdModealProps) {
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [game, setGame] = useState<Game>(selectedGame)

  useEffect(() => {
    setGame(selectedGame)
  }, [selectedGame])

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    try {
      await axios.post(`http://127.0.0.1:3333/games/${game?.id}/ads`,
        {
          "name": data.name,
          "yearsPlaying": Number(data.yearsPlaying),
          "discord": data.discord,
          "weekDays": weekDays.map(Number),
          "hourStart": data.hourStart,
          "hourEnd": data.hourEnd,
          "useVoiceChannel": data.userVoiceChannel == 'on' ? true : false
        })
      alert('Anúncio criado com sucesso.')
    } catch (error) {
      alert('Erro criando anúncio');
      console.log(error)
    }
  }
  return (
    <>
      <CreateAdBanner setSelectedGame={setSelectedGame} />
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/40 inset-0 fixed' />
        <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[680px] shadow-lg shadow-black/50'>
          <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>
          <form onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="game" className="font-semibold">Qual o game?</label>
              <GameSelector game={game} setGame={setGame} games={games} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Seu nome (ou nickname)</label>
              <Input type="text" placeholder="Como te chamam dentro do game?" id="name" name="name" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                <Input type="number" placeholder="Tudo bem ser ZERO" id="yearsPlaying" name="yearsPlaying" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="discord">Qual o seu Discord?</label>
                <Input type="text" placeholder="Usuario#0000" id="discord" name="discord" />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="weekdays">Quando costuma jogar?</label>
                <WeekDaySelector weekDays={weekDays} setWeekDays={setWeekDays} />
              </div>
              <div className="flex flex-col gap-2 flex-1 ">
                <label htmlFor="hourStart">Qual horário do dia?</label>
                <div className="grid grid-cols-2 gap-2">
                  <Input id="hourStart" name="hourStart" type="time" placeholder="De" />
                  <Input id="hourEnd" name="hourEnd" type="time" placeholder="Até" />
                </div>
              </div>
            </div>
            <div className="mt-2 flex gap-2 items-center">
              <Checkbox.Root className="w-6 h-6 p-1 rounded bg-zinc-900" id="allowChannelVoice" name="allowChannelVoice">
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
    </>
  );
}

export default CreateAdModal;;