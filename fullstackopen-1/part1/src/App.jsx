import { useState } from 'react'

function test() {
    return -1;
}

function countUpdater(current) {
    return current + 1;
}

const App = () => {
  const [ counter, setCounter ] = useState(test)


  const handleClick = () => {
    console.log('clicked')
    setCounter(countUpdater)
  }

  return (
    <div>
      <div>{counter}</div>

      <button onClick={handleClick}>
        plus
      </button>
    </div>
  )
}
export default App
