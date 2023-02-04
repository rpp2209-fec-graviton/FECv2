import React, {useState, useEffect} from "react";

export default function useMore() {
  const [more, setMore] = useState(true);

  var showMore = (count, makeCount, makePage, updateList, checkList) => {
    if (!more) {
      makeCount.reset();
      makePage.reset();
      setMore(true);
      return;
    }

    if (count%6 === 0) {
      makePage.increment();
      makeCount.increment();
      updateList();
    } else {
      makeCount.increment();
    }
    checkList();
  }

  var toggleMore = () => {
    setMore(!more);
  }

  return [more, showMore, toggleMore]

}