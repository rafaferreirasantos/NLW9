import './styles/main.css';
import logoImage from './assets/logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';
import { useState, useEffect } from 'react';
import CreateAdModal from "./components/CreateAdModal";
import * as Dialog from '@radix-ui/react-dialog';

export interface Game {
  id: string,
  title: string,
  bannerUrl: string,
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game>();
  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => { setGames(data); });
  }, []);
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-10">
      <img src={logoImage} alt="logotipo NLW" />
      <h1 className='text-6xl text-white font-black mt-10'>Seu <span className="text-transparent bg-nwl-gradient bg-clip-text">duo</span> está aqui.</h1>
      <Dialog.Root>
        <div className="grid grid-cols-6 gap-x-6 mt-10">
          {games.map(game => {
            return (
              <GameBanner
                key={game.id}
                game={game}
                title={game.title}
                bannerURL={game.bannerUrl}
                adsCount={game._count.ads}
                setSelectedGame={setSelectedGame}
              />
            );
          })};
        </div>
        <CreateAdModal games={games} selectedGame={selectedGame!} setSelectedGame={setSelectedGame} />
      </Dialog.Root>
    </div>
  )
}
export default App