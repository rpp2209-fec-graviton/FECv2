import React, { useEffect } from "react";

export default function MoreAnsweredQ({ count, moreQ, showMoreQ, makeCount, makePage, updateQList, checkQList}) {

  return (
    <div>
      <button onClick={() => { showMoreQ(count, makeCount, makePage, updateQList, checkQList) }}>
        {moreQ ? 'More Answered Questions' : 'Collapse Answers'}
      </button>
    </div>
  )
}