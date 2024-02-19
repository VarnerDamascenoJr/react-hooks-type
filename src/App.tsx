import './App.css'
import { HowToUserRef } from './features/HowToUseRef'
import { HowToUseEffectOne } from './features/howToUseEffect'
import { HowToUseState } from './features/howToUseState'

function App() {

  return (
    <>
      <HowToUseState />
      <HowToUseEffectOne />
      <HowToUserRef />
    </>
  )
}

export default App
