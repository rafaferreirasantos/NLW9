import './styles/main.css';
import logoImage from './assets/logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';
import { useState, useEffect } from 'react';
import CreateAdModal from "./components/CreateAdModal";

interface Game {
  id: string,
  title: string,
  bannerUrl: string,
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => { console.log(data); setGames(data); });
  }, []);
  console.log('Renderizando App...')
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-10">
      <img src={logoImage} alt="logotipo NLW" />
      <h1 className='text-6xl text-white font-black mt-10'>Seu <span className="text-transparent bg-nwl-gradient bg-clip-text">duo</span> está aqui.</h1>
      <div className="grid grid-cols-6 gap-x-6 mt-10">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerURL={game.bannerUrl}
              adsCount={game._count.ads}
            />
          );
        })};
      </div>
      <CreateAdModal />
    </div>
  )
}
export default App