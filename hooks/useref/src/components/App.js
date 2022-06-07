import React from 'react'
import AutoFocus from './AutoFocus'

// here you can see that useEffect runs after every render
// cleanup function runs after every render before actual useEffect!!
// (render)==>(prev cleanup)==>(actual useeffect)
function App () {
  return (
    <AutoFocus />
  )
}

export default App
