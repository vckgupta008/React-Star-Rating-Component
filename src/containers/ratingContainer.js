import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ratingContainer.scss";

class RatingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfSelectedStar: props.numberOfSelectedStar - 1
    };
  }

  onSelectStar = val => {
    const { disableOnSelect, onSelectStar } = this.props;
    this.setState(
      {
        numberOfSelectedStar: val
      },
      () => {
        if (!disableOnSelect) {
          onSelectStar(val + 1);
        }
      }
    );
  };

  render() {
    const {
      numberOfStar,
      colorFilledStar,
      starSize,
      spaceBetweenStar,
      colorEmptyStar
    } = this.props;
    const { numberOfSelectedStar } = this.state;
    let starlist = [];
    for (let i = 0; i < numberOfStar; i++) {
      starlist.push(
        <span
          className="star"
          key={i}
          style={{
            fontSize: starSize,
            color: i <= numberOfSelectedStar ? colorFilledStar : colorEmptyStar,
            marginLeft: spaceBetweenStar,
            overflow: "hidden",
            // width: numberOfSelectedStar>i && numberOfSelectedStar<i+1? ' ': starSize 
          }}
          onMouseDown={() => this.onSelectStar(i)}
        >
          ★
        </span>
      );
    }
    return (
      <div className="star-rating-container">
        <div className="star-list">{starlist}</div>
      </div>
    );
  }
}

RatingContainer.defaultProps = {
  numberOfStar: 5,
  colorFilledStar: "orange",
  colorEmptyStar: "#000",
  starSize: "20px",
  spaceBetweenStar: "10px",
  disableOnSelect: true
};

RatingContainer.propTypes = {
  numberOfStar: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  colorFilledStar: PropTypes.string,
  colorEmptyStar: PropTypes.string,
  starSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onSelectStar: PropTypes.func,
  spaceBetweenStar: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disableOnSelect: PropTypes.bool
};

export default RatingContainer;
