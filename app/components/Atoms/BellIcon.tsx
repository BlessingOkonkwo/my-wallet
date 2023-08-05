import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell} from '@fortawesome/free-regular-svg-icons';
import { DotFilledIcon } from '@radix-ui/react-icons';

const Bell = () => {
  return (
    <div>
        <button className="relative">
            <FontAwesomeIcon icon={faBell} size='lg' className="text-base md:text-lg" />
            <span className="absolute right-0 top-[2px] flex items-center justify-center h-2 md:h-[10px] w-2 md:w-[10px] rounded-full border-2 border-[#f8f8f8] bg-[#ff5a5c]">
            </span>
        </button>
    </div>
  )
}

export default Bell
