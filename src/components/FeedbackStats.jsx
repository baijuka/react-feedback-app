import React from 'react'
// import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
    // Calculate avergae rating
    let average = feedback.reduce((acc, item) => {
        return acc + item.rating
    },0) / feedback.length

    // Set average to one decimal place and remove the trailing zeros eg. 9.2 or 9

    average = average.toFixed(1).replace(/[.,]0$/,'')
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

// FeedbackStats.propTypes = {
//     feedback: PropTypes.array.isRequired,
// }

export default FeedbackStats
