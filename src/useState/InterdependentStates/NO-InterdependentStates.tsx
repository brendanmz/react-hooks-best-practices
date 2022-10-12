import { useState } from 'react';

/**
 * There are 2 interdependent numbers
 * ### First number
 * - Will always be half the second number
 * - Can be increased by 1 every click
 * ### Second number
 * - Will always be double the first number
 * - Will be multiplied by 2 every click
 */

export const InterdependentStates = () => {
  const [addingCounter, setAddingCounter] = useState(1);
  const [doublingCounter, setDoublingCounter] = useState(1);

  const handleAddingClick = () => {
    setAddingCounter(addingState => {
      const newNumber = addingState + 1;
      setDoublingCounter(newNumber * 2);

      return addingState + 1;
    });
  };

  const handleDoublingClick = () => {
    setDoublingCounter(doublingState => {
      const newNumber = doublingState * 2;
      setAddingCounter(newNumber / 2);

      return doublingState * 2;
    });
  };

  const handleReset = () => {
    setAddingCounter(1);
    setDoublingCounter(1);
  };

  return (
    <div className='flex-column'>
      <h1>Interdependent States</h1>
      <div>
        <label htmlFor='addingCounter'>Counter: {addingCounter}</label>
        <button id='addingCounter' onClick={handleAddingClick}>
          Increase by 1
        </button>
      </div>

      <div>
        <label htmlFor='doublingCounter'>Counter: {doublingCounter}</label>
        <button id='doublingCounter' onClick={handleDoublingClick}>
          Multiply by 2
        </button>
      </div>
      <div>
        <button id='reset' onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};
