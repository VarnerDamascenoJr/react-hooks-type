import './App.css'
import useFetch from './features/HowToUseCustomHook/FirstCustom'
import { HowToUserRef } from './features/HowToUseRef'
import { HowToUseEffectOne } from './features/howToUseEffect'
import { HowToUseState } from './features/howToUseState'

function App() {


  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      <HowToUseState />
      <HowToUseEffectOne />
      <HowToUserRef />
      {
        data && data.map((item) => { return <p key={item.id}>{item.title}</p> })
      }
    </>
  )
}

export default App
