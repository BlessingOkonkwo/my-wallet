import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell} from '@fortawesome/free-regular-svg-icons';

const Bell = () => {
  return (
    <div>
        <button className="relative">
            <FontAwesomeIcon icon={faBell} size='lg' />
            <span className="absolute right-0 top-[2px] flex items-center justify-center h-[10px] w-[10px] rounded-full border-2 border-[#f8f8f8] bg-[#ff5a5c]">
            </span>
        </button>
    </div>
  )
}

export default Bell
