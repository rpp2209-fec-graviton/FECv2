function calculateRatings(reviewList) {
  var ratingList = {};
  var average;
  reviewList.forEach((review) => {
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
  return ratingList;
}

export default calculateRatings;