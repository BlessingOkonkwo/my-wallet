import React from 'react';
import { BellIcon, QuestionIcon } from '../Atoms'; 

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="font-bold text-4xl leading-[49.18px] text-[#1e252d]">
        Wallet
      </h1>
      <div className="flex gap-4 items-center justify-center text-base">
        <h5 className="text-sm">
            WALLET SUMMARY
        </h5>
        <div className="flex items-center gap-4">
            <BellIcon />
            <QuestionIcon />
        </div>
        
      </div>
    </div>
  )
}

export default Header