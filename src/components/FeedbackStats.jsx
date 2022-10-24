import React from "react";
// import PropTypes from 'prop-types'

const FeedbackStats = ({ feedback }) => {
  let average = feedback.reduce((acc, item) => acc + item.rating, 0) / feedback.length;
  // remova zero caso tenha zero apenas 
  average =  average.toFixed(1).replace(/\.0+$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Averange Range: {average}</h4>
    </div>
  );
};

FeedbackStats.propTypes = {};

export default FeedbackStats;
