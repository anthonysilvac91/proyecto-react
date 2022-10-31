import './counter.css'
import { useState } from "react"

const Counter = () => {
    const initial = 0
    const [count, setCount] = useState(initial)


     const decrement = () => {
        if (count > 0) {

            setCount(count - 1)
        }
     }

     const increment = () => {
        setCount(count + 1)
     }



    return (
        <div>
            <h1>{count}</h1>
            <button className='btn' onClick={decrement} >-</button>
            <button className='btn' onClick={increment}>+</button>
        </div>
    )
}

export default Counter