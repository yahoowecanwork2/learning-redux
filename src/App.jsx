import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementbyamount } from './features/counter/counterSlice';

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment())
  }


  const handleDecrement = () => {
    dispatch(decrement())
  }
  const handleIncrementbyamout = () => {
    dispatch(incrementbyamount(amount))
  }

  return (
    <div className="app">
      <h1 className="title">Redux Counter</h1>

      <div className="counter-card">
        <p className="count">count: {count}</p>
        <div className="buttons">
          <button className="btn increment" onClick={handleIncrement}>+</button>
          <button className="btn decrement" onClick={handleDecrement}>-</button>
        </div>
        <input type="number"
          value={amount}
          placeholder='increment by amount'
          onChange={(e) => setAmount(e.target.value)} />
        <button className="btn increment" onClick={handleIncrementbyamout}>increment by amount</button>
      </div>
    </div>
  )
}

export default App