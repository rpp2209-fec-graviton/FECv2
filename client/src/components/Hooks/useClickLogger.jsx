import React, { useState, useEffect } from 'react';
import { renderToString } from 'react-dom/server';
import axios from 'axios';

export default function useClickLogger(widget) {
  const [module, setModule] = useState(widget);

  const withClickLogger = (Component) => {
    var handleClick = async () => {
      try {
        await axios({
          method: 'post',
          url: `${window.location.href}interactions`,
          data: {
            time: new Date(),
            element: renderToString(Component),
            widget: module
          }
        });
      } catch (error) {
        console.log(error);
      }
    }

    return (
      <div onClick={handleClick}>
        {Component}
      </div>
    )
  }

  return [withClickLogger];

};
