import React, { useState, useEffect } from 'react';
import axios from 'axios';



function useReviewPost() {

  const handlePost = (payload) => {
    axios({
      method:'post',
      data: payload,
    })
  }
  return { handlePost }
}

export default useReviewPost