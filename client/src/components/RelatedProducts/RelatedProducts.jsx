const axios = require('axios');
import { useParams } from "react-router-dom";
import { useNavigate } from  'react-router-dom';
import React, { useState, useEffect } from "react";
import { fetch } from "../../../../server/utils/data-utils.js"
import { useProductContext } from "../Context/ContextProvider.jsx";
import RPList from "./RPList.jsx";
import YourOutfitList from "./YourOutfitList.jsx"

function RelatedProducts () {
  const [rpData, setRpData] = useState(null);
  const [rpStyles, setRpStyles] = useState(null);
  const [currentProductData, setCurrentProductData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { currentProductId } = useProductContext();
  const navigate = useNavigate();

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

  function changeProduct (id) {
    navigate(`/${id}`)
  };

  useEffect(() => {
    setLoaded(false);
    let idList;
    fetchData(`products/${currentProductId}/related`)
    .then((ids) => {
      idList = [...new Set(ids)];
      return Promise.all(idList.map((id) => {
        return fetchData(`products/${id}`)
      }))
    })
    .then((data) => {
      setRpData(data);
      return Promise.all(idList.map((id) => {
        return fetchData(`products/${id}/styles`)
      }))
    })
    .then((styles) => {
      setRpStyles(styles);
      return fetchData(`products/${currentProductId}`)
    })
    .then((currentProductData) => {
      setCurrentProductData(currentProductData);
      setLoaded(true);
    })
  },[currentProductId]);

  return (
    <div data-testid='rp'>
      {loaded? <><RPList rps={rpData} rpStyles={rpStyles} changeProduct={changeProduct}/><br/><YourOutfitList cp={currentProductData} fetchData={fetchData} changeProduct={changeProduct}/></>: null}
    </div>
  )
}

export default RelatedProducts;