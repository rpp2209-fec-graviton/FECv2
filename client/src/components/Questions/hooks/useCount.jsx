import { useState, useEffect } from "react";

export default function useCount (initial) {
  var start = initial;
  const [count, setCount] = useState(initial);

  var increment = () => {
    setCount(count + 2);
  }

  var reset = () => {
    setCount(start);
  }

  var makeCount = {reset, increment}

  return [count, makeCount];
}