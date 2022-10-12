import { useRef, useState } from 'react';

/**
 * useRef can be used as state in some cases
 * Changes to the value DO NOT cause re-render
 * This is useful in storing values outside of the render lifecycle
 *
 * You can use it in a similar way to `let` in vanilla js
 */

export const UseRefAsState = () => {
  const persistentValue = useRef(1);
  const [, setDivisibleBy3] = useState(0);

  const handleClick = () => {
    // Always update the ref on click
    // ref.current is mutable
    persistentValue.current += 1;
    if (persistentValue.current % 3 === 0) {
      // This triggers the re-render
      setDivisibleBy3(persistentValue.current);
    }
  };

  return (
    <>
      <h1>useRef As State</h1>
      <button onClick={handleClick}>{persistentValue.current}</button>
    </>
  );
};
