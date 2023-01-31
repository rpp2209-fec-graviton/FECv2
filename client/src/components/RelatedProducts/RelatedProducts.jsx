const axios = require('axios');
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetch } from "../../../../server/utils/fetch.js"
import RPList from "./RPList.jsx";
import YourOutfitList from "./YourOutfitList.jsx"

function RelatedProducts () {
  const [rpData, setRpData] = useState(null);
  const [rpStyles, setRpStyles] = useState(null);
  const [loaded, setLoaded] = useState(false);
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
    let idList;
    fetchData(`products/${productId}/related`)
    .then((ids) => {
      console.log('ids', ids)
      idList = ids;
      return Promise.all(ids.map((id) => {
        return fetchData(`products/${id}`)
      }))
    }).then((data) => {
      setRpData(data);
      return Promise.all(idList.map((id) => {
        return fetchData(`products/${id}/styles`)
      }))
    }).then((styles) => {
      console.log('styles', styles)
      setRpStyles(styles);
      setLoaded(true);
    });
  },[]);

  return (
    <div data-testid='rp'>
      {loaded? <RPList rps={rpData} rpStyles={rpStyles}/> : null}
      {/* <YourOutfitList /> */}
    </div>
  )
}

export default RelatedProducts;