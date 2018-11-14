import React from "react";

const styles = {
  card: {
    height: 175,
    width: 175,
    alignContent: "center",
    textAlign: "center",
    position: "70%",
    boxShadow: "0 3px 6px #999, 0 3px 6px #999",
    borderRadius: "3px",
    border: "5px solid #f1f1f1",
    margin: 10,
    cursor: "pointer"
  },
  imageContainer: {
    height: "100%",
    overflow: "hidden",
    borderRadius: 10
  },
  imageStyle: {
    height: "100%",
    width: "100%",
    borderRadius: 10
  }
}

const ImageCard = (props) => {

  return (
  <div 
    style={styles.card} 
    value={props.id}
    onClick={() => props.handleUserPick(props.id)}
  >
    <div style={styles.imageContainer}>
      <img alt={props.name} src={props.image} style={styles.imageStyle} />
    </div> 
  </div>
  )
}

export default ImageCard;