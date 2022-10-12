import './App.css';
import { LazyLoadSlowState } from './useState/LazyLoadSlowState';
import { InterdependentStates } from './useState/InterdependentStates/NO-InterdependentStates';
import { StateCallbackSyntax } from './useState/StateCallbackSyntax';
import { UseRefAsState } from './useRef/UseRefAsState';
import { UseRefTypicalUse } from './useRef/UseRefTypicalUse';

function App() {
  return (
    <div className='App'>
      <StateCallbackSyntax />
      <div className='divider' />
      <InterdependentStates />
      <div className='divider' />
      <LazyLoadSlowState />
      <div className='divider' />
      <UseRefAsState />
      <div className='divider' />
      <UseRefTypicalUse />
    </div>
  );
}

export default App;
