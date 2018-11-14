import React from "react";

const styles = {
  card: {
    height: 200,
    width: 200,
    alignContent: "center",
    textAlign: "center",
    position: "relative"
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

const ImageCard = (props) => (
  <div 
    style={styles.card} 
    value={props.id}
    onClick={() => props.handleClicked(props.id)}
  >
    <div style={styles.imageContainer}>
      <img alt={props.name} src={props.image} style={styles.imageStyle} />
    </div> 
  </div>
)

export default ImageCard;