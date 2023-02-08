const axios = require('axios');
import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { fetch } from "../../../../server/utils/fetch.js"
import { useRPContext } from "./Context/RPProvider.jsx";
import RPList from "./RPList.jsx";
import YourOutfitList from "./YourOutfitList.jsx"

function RelatedProducts () {
  const { fetchData, useClickLogger, product_id, currentProductData, setCurrentProductData, setRpData, setRpStyles, setRpRatings } = useRPContext();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    let idList;
    fetchData(`products/${product_id}/related`)
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
      return fetchData(`products/${product_id}`)
    })
    .then((currentProductData) => {
      setCurrentProductData(currentProductData);
      setLoaded(true);
    })
  },[product_id]);

  return (
      <div data-testid='rp'>
        {loaded ? <><RPList/><br/></> : null}
        {loaded ? <><YourOutfitList/></>: null}
      </div>
  )
}

export default RelatedProducts;