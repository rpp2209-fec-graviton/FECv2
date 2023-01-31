const axios = require('axios');
import React, { useState, useEffect } from "react";
import { fetch } from "../../../../server/utils/fetch.js"
import RPList from "./RPList.jsx";
import YourOutfitList from "./YourOutfitList.jsx"

function RelatedProducts () {
  const [rpData, setRpData] = useState(null);

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

  //fetch related products for product 71699 for testing
  //TODO: make fetch dynamic for selected product
  useEffect(() => {
    fetchData('products/71699/related')
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