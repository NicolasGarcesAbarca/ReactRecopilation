import React, { useRef, useEffect } from 'react'

const AutoFocus = () => {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div>
        <p>magic auto focus</p>
        <input type="text" ref={inputRef}/>
    </div>
  )
}

export default AutoFocus
