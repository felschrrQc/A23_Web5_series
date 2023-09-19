import './App.css'
import { whatWeDo, wwditsEpisodes, succession, successionEpisodes} from '../assets/Data';
import Serie from './Serie'

function App() {
  return (
    <>
    <h1>Devoir Synthèse - Félix SCHERER</h1>
    <div className='App'>
      <Serie serie={whatWeDo} episodes={wwditsEpisodes}/>
      <Serie serie={succession} episodes={successionEpisodes}/>
    </div>
    </>
  )
}

export default App