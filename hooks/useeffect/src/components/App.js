import React, { useState, useEffect } from 'react'

// here you can see that useEffect runs after every render
// cleanup function runs after every render before actual useEffect!!
// (render)==>(prev cleanup)==>(actual useeffect)
function App () {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log('useEffect', count)
    return () => {
      console.log('CLEAN UP useEffect', count)
    }
  })
  console.log('render')
  return (
        <div>
        <h1>{count}</h1>
            <button onClick={() => handleClick()}>++</button>
        </div>
  )
}

export default App
