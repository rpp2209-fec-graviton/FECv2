const axios = require('axios');
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetch } from "../../../../server/utils/fetch.js"
import RPList from "./RPList.jsx";
import YourOutfitList from "./YourOutfitList.jsx"

function RelatedProducts () {
  const [rpData, setRpData] = useState(null);
  const { productId } = useParams();

  async function fetchData(ep) {
    return new Promise((resolve, reject) => {
      const callback = async (err, data) => {
        if(err) {
          reject(err);
        } else {
          resolve(data.data);
        }
      }
      fetch(ep, callback)
    })
  }

  useEffect(() => {
    fetchData(`products/${productId}/related`)
    .then((ids) => {
      return Promise.all(ids.map((id) => {
        return fetchData(`products/${id}`)
      }))
    }).then((data) => {
      setRpData(data);
    })
  },[]);

  return (
    <div data-testid='rp'>
      {rpData && <RPList rps={rpData}/>}
      {/* <YourOutfitList /> */}
    </div>
  )
}

export default RelatedProducts;