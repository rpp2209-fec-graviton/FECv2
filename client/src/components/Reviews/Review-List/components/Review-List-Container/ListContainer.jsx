import React from "react";
import styles from './ReviewList.module.scss'

function ListContainer({children}) {
  return (
    <div>
      <h1 className="text">ListContainer</h1>
      {children}
    </div>
  );
}

export default ListContainer;