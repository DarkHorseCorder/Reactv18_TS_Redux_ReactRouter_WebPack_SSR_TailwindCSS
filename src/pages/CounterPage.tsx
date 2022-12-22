import React from 'react';
import { Counter } from '../features/counter/Counter';

function CounterPage () {
    return (
      <div className='mt-48'>
        <h1 className='text-3xl text-sky-500'>This is simple counter</h1>
        <Counter />
      </div>
    );
}

export default CounterPage;