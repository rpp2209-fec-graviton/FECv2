import React, {useState, useEffect} from "react";

export default function useMoreQ() {
  const [moreQ, setMoreQ] = useState(true);

  var showMoreQ = (count, makeCount, makePage, updateQList, checkQList) => {
    if (!moreQ) {
      makeCount.reset();
      makePage.reset();
      setMoreQ(true);
      return;
    }

    if (count%4 === 0) {
      makePage.increment();
      makeCount.increment();
      updateQList();
    } else {
      makeCount.increment();
    }
    checkQList();
  }

  var toggleMoreQ = () => {
    setMoreQ(!moreQ);
  }

  return [moreQ, showMoreQ, toggleMoreQ]

}