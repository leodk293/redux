import React from 'react'
import { increment } from './counter'
import { useSelector, useDispatch } from 'react-redux'

export default function Counter() {
    const counter = useSelector(state => state.value)
    const dispatch = useDispatch()
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"20px"}}>
        <h1>REDUX</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <p>Counter Value : {counter}</p>
    </div>
  )
}
