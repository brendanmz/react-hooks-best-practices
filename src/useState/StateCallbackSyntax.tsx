import React, { useState } from 'react';

/**
 * When state needs to be calculated using the most recent value of itself, use the callback syntax
 */
export const StateCallbackSyntax = () => {
  const [count, setCount] = useState(1);

  const increase = () => setCount(state => state + 1);
  // NOT - const increase = () => setCount(count + 1);

  const increaseTwice = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    setCount(state => state + 1);
    setCount(state => state + 1);
  };

  const decrease = () => setCount(state => state - 1);
  // NOT - const decrease = () => setCount(count - 1);

  return (
    <div>
      <h1>useState Callback Syntax</h1>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={increaseTwice}>Increase Twice</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};
