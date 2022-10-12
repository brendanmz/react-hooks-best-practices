import { useRef } from 'react';

export const UseRefTypicalUse = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <h1>useRef Typical Use</h1>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
};
