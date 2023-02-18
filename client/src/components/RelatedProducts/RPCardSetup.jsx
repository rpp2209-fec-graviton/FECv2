function RPCardSetup(rpStyle) {
  var imgUrl = null;
  var defaultStyle = [];
  if (rpStyle) {
    imgUrl = rpStyle[0].photos[0].thumbnail_url;
    defaultStyle = rpStyle.filter((style) => {
      return style['default?'];
    });
  }

  var originalPrice = null;
  var salePrice = null;
  if (defaultStyle.length > 0) {
    originalPrice = defaultStyle[0].original_price;
    if (defaultStyle[0].sale_price !== null) {
      salePrice = defaultStyle[0].sale_price;
    }
  }
  return [imgUrl, originalPrice, salePrice];
}

export default RPCardSetup;