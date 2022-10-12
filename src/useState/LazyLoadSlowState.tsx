import React, { useState } from 'react';

const getInitialState = () => {
  const massiveArray = new Array(100000000);
  console.time('Large loop');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const item of massiveArray) {
    // do something
  }
  console.timeEnd('Large loop');
  return '🔥';
};
export const LazyLoadSlowState = () => {
  const [bigList, setBigList] = useState(() => {
    return getInitialState();
  });

  return (
    <div>
      LazyLoadSlowState
      {bigList}
      <button onClick={() => setBigList('🙉')}>Say hello monkey</button>
    </div>
  );
};
