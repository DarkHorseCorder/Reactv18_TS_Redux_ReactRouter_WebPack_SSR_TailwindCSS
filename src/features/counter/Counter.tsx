import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className="flex items-center justify-center m-5">
        <button
          className="px-8 py-5 rounded-3xl text-3xl text-white bg-gradient-to-r from-indigo-500"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          (-)Decrease
        </button>
        <span className="text-6xl">{count}</span>
        <button
          className="px-8 py-5 rounded-3xl text-3xl text-white bg-gradient-to-l from-indigo-500"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increase(+)
        </button>
      </div>
      <button>
        <Link to="/" className='py-3 px-5 rounded-xl font-mono font-3xl text-lime-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl'>Back Home</Link>
      </button>
    </div>
  );
}
