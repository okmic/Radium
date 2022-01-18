import React, { KeyboardEvent, useEffect, useState } from 'react'
import { Me } from './conponents/me/Me'
import { Tipsy } from './conponents/Smoky/Timsy'
import { Text } from './conponents/Text/Text'

function App() {

  const [order, setOrder] = useState(true)
  const [click, setClick] = useState(true)
  const [time, setTime] = useState(3)

  useEffect(() => {

    const onKeypress = (e: KeyboardEvent<HTMLImageElement> | any) => {
      if (e.code === "Space") {
        setOrder(false)

      }
    }
    document.addEventListener('keypress', onKeypress)

    return () => {
      document.removeEventListener('keypress', onKeypress)
    }
  }, [])

  const handleClickMouse = () => {
    setClick(false)
  }
  useEffect(() => {
    const timeoust = setTimeout(() => {
      setClick(true)
    }, 3000)
    return () => clearTimeout(timeoust)
  }, [click])

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev - 1)
    }, 1000)
    return () => {
      clearInterval(interval)
      setTime(3)
    }
  }, [click])

  return <>
    <Me />
    {(click && order)
      ? <div onClick={handleClickMouse}>
        <Text />
      </div>
      : click
        ? <Tipsy setOrder={() => {
          setOrder(true)
        }}
          back={false}
        />
        : <Tipsy back={true} time={time} />
    }
  </>
}

export default App