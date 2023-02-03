const axios = require('axios');
import { useParams } from "react-router-dom";
import { useNavigate } from  'react-router-dom';
import React, { useState, useEffect } from "react";
import { fetch } from "../../../../server/utils/fetch.js"
import { useProductContext } from "../Context/ContextProvider.jsx";
import RPList from "./RPList.jsx";
import YourOutfitList from "./YourOutfitList.jsx"

function RelatedProducts () {
  const [currentProductData, setCurrentProductData] = useState(null);
  const [rpData, setRpData] = useState(null);
  const [rpStyles, setRpStyles] = useState(null);
  const [rpRatings, setRpRatings] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { currentProductId, setCurrentProductId } = useProductContext();
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
      fetch(ep, callback);
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
      return Promise.all(idList.map((id) => {
        return fetchData(`reviews/meta?product_id=${id}`)
      }))
    })
    .then((reviews) => {
      var ratingList = {};
      var average;
      reviews.forEach((review) => {
        var totalCount = 0;
        var total = 0;
        for (var rating in review.ratings) {
          var ratingCount = parseInt(review.ratings[rating]);
          totalCount += ratingCount;
          total += rating * ratingCount;
        }
        average = total / totalCount;
        ratingList[review.product_id] = average.toFixed(1);
      })
      setRpRatings(ratingList);
      return fetchData(`products/${currentProductId}`)
    })
    .then((currentProductData) => {
      setCurrentProductData(currentProductData);
      setLoaded(true);
    })
  },[currentProductId]);

  return (
    <div data-testid='rp'>
      {loaded ? <><RPList rps={rpData} rpRatings={rpRatings} rpStyles={rpStyles} changeProduct={changeProduct}/><br/></> : null}
      {loaded ? <><YourOutfitList cp={currentProductData} fetchData={fetchData} changeProduct={changeProduct}/></>: null}
    </div>
  )
}

export default RelatedProducts;