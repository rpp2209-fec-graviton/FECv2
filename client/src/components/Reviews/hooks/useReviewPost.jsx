import React, { useState, useEffect } from 'react';
import axios from 'axios';



function useReviewPost() {

  const handlePost = (payload) => {

    console.log(payload, 'payload');


    axios({
      url: '/reviews',
      method:'post',
      data: {
        payload: payload
      }
    })
  }
  return { handlePost }
}

export default useReviewPost