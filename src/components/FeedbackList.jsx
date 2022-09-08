import React from 'react'
// import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)
    if (!feedback || feedback.length === 0 ) {
        return <p>No Feedback Yet</p>
    }
  return (
    <AnimatePresence>
    <div className='feedback-list'>
      {feedback.map((item, index) => (
        <motion.div
        key={item.id}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ duration: 1.5 }}
        exit={{opacity: 0}}
        >
          <FeedbackItem key={item.id} item={item} />
        </motion.div>
      ))}
     </div>
     </AnimatePresence>

    // <div className='feedback-list'>
    //   {feedback.map((item, index) => (
    //     <FeedbackItem key={item.id} item={item} handleDelete = {handleDelete}/>
    //   ))}
    // </div>
  )
}

// FeedbackList.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired, 
//         })
//     )
// }
export default FeedbackList

