import axios from "axios";
import { useState, useEffect } from "react";

export default function useCount (initial) {
  const [count, setCount] = useState(initial);

  var incrementCount = () => {
    setCount(count +2);
  }

  var resetCount = () => {
    setCount(intial);
  }

  return [count, incrementCount, resetCount];
}