function YourOutfitItem (props) {
  function addToOutfit (e) {
    props.setOutfitItems(...outfitItems, e.target);
  }

  return (
    <div>
      {props.productInfo.image}
      <br/>
      <button onClick={addToOutfit}></button>
      {props.productInfo.category}
      <br/>
      {props.productInfo.name}
      <br/>
      {props.productInfo.price}
      <br/>
      {props.productInfo.starRating}
      <br/>
    </div>
  )
}

export default YourOutfitItem;