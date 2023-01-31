import React, { useState } from 'react';

function useTestHook() {
  const [counter, setCounter] = useState(0);
  const handleInc = (e) => {
    e.preventDefault();
    setCounter(counter + 1)
  }
  return { counter, handleInc }

}

export default useTestHook;