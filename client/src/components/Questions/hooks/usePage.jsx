import axios from "axios";
import { useState, useEffect } from "react";

export default function usePage (initial) {
  const [page, usePage] = useState(initial);

  var incrementPage = () => {
    setPage(page + 1);
  }

  return [page, incrementPage];
}