import React, { useEffect } from "react";

export default function SeeMoreAnswersBtn({ count, more, showMore, makeCount, makePage, updateAList, checkAList}) {

  return (
    <div>
      <sub onClick={() => { showMore(count, makeCount, makePage, updateAList, checkAList) }}>
        {more ? 'See More Answers' : 'Collapse Answers'}
      </sub>
    </div>
  );
};