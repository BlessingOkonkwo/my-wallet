import React from 'react';
import { FundButton } from '../Atoms';
import { PlusIcon } from '@radix-ui/react-icons';
import { Hamburger } from '../Atoms';


const WalletActions = () => {
  return (
    <div>
      <div className="hidden lg:flex items-center justify-between gap-4">
        <FundButton desc="+ Tranfer to Master Wallet" variant="blue" />
        <FundButton desc="+ Fund Institutional Wallet" variant="white" />
      </div>

      <div className="lg:hidden">
        <Hamburger />
      </div>
    </div>
    
  )
}

export default WalletActions
