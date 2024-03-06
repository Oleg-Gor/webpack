import { useState } from "react"
import classes from './Counter.module.scss'


export const Count = ()=> {

const [count, setCount] = useState(0)

function inc () {
  setCount((prev)=> ++prev)
}

  return (
    <>

    <p>{count}</p>

    <button className={classes.btn} onClick={inc}>Oleg</button>
    </>
  )
}

