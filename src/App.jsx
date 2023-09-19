import './App.css'
import { succession, whatWeDo } from './assets/Data';
import Serie from './Serie'

function App() {
  console.log(whatWeDo)

  return (
    <>
      <Serie serie={whatWeDo}/>
      <Serie serie={succession}/>
    </>
  )
}

export default App