import { useState, useEffect } from "react";

export default function usePage (initial) {
  var start = initial;
  const [page, setPage] = useState(initial);

  var increment = () => {
    setPage(page + 1);
  }

  var reset = () => {
    setPage(start);
  }

  var makePage = {reset, increment};

  return [page, makePage];
}
