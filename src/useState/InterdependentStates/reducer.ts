export const actionType = {
  doubling: 'doubling',
  adding: 'adding',
  reset: 'reset',
} as const;
type ActionType = typeof actionType[keyof typeof actionType];


interface State {
  addingCounter: number;
  doublingCounter: number;
}
interface Action {
  type: ActionType;
}

export const initialState = {
  addingCounter: 1,
  doublingCounter: 1,
};

export const interdependentStatesReducer = (
  state: State,
  action: Action,
): State => {
  switch (action.type) {
    case actionType.adding: {
      const newNumber = state.addingCounter + 1;
      return {
        addingCounter: newNumber,
        doublingCounter: newNumber * 2,
      };
    }
    case actionType.doubling: {
      const newNumber = state.doublingCounter * 2;
      return {
        addingCounter: newNumber / 2,
        doublingCounter: newNumber,
      };
    }

    case actionType.reset: {
      return initialState;
    }

    default:
      return state;
  }
};
