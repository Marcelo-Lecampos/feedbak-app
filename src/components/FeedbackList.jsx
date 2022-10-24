import React from 'react'
import FeedbackIten from './FeedbackIten'
import PropTypes from "prop-types";

function FeedbackList({feedback, handleDelete}) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback</p>
  }
  return (
    <div>
    {feedback.map((item) => (
     <FeedbackIten key={item.id} item={item} 
     handleDelete={handleDelete} />
    ))}
    </div>
  )
}
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
}

export default FeedbackList