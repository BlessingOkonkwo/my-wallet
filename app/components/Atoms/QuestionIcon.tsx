import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

const QuestionIcon = () => {
  return (
    <div>
        <button>
            <FontAwesomeIcon icon={faCircleQuestion} size='lg' className="text-base md:text-lg" />
        </button>
    </div>
  )
}

export default QuestionIcon
