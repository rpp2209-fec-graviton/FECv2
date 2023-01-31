import axios from "axios";
import { useState, useEffect } from "react";

export default function useMoreA() {
  const [moreA, setMoreA] = useState(true);

  return [moreA, setMoreA];
}