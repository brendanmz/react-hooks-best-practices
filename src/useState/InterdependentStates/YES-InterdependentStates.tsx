import { useReducer } from 'react';
import {
  actionType,
  initialState,
  interdependentStatesReducer,
} from './reducer';

/**
 * Use a reducer instead
 */

export const InterdependentStates = () => {
  const [{ addingCounter, doublingCounter }, dispatch] = useReducer(
    interdependentStatesReducer,
    initialState,
  );

  const handleAddingClick = () => {
    dispatch({
      type: actionType.adding,
    });
  };

  const handleDoublingClick = () => {
    dispatch({
      type: actionType.doubling,
    });
  };

  const handleReset = () => {
    dispatch({
      type: actionType.reset,
    });
  };

  return (
    <div className='flex-column'>
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
