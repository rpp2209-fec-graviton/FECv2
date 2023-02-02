import React, { useEffect } from "react";

export default function MoreAnsweredQ({ count, more, showMore, makeCount, makePage, updateQList, checkQList}) {

  return (
    <div>
      <button onClick={() => { showMore(count, makeCount, makePage, updateQList, checkQList) }}>
        {more ? 'More Answered Questions' : 'Collapse Answers'}
      </button>
    </div>
  )
}