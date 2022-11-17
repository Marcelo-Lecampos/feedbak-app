import React from "react";
import { Card } from "./shared/Card";
import { FaTimes } from "react-icons/fa";
// import PropTypes from "prop-types";

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() =>handleDelete(item.id)}  className="close">
      <FaTimes color="purple" /> 
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

// FeedbackItem.propTypes = {
//   item: PropTypes.shape({
//     rating: PropTypes.number.isRequired,
//     text: PropTypes.string.isRequired,
//   }).isRequired,
// }

export default FeedbackItem;
