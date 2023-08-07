import React from 'react';
import { FundButton } from '../Atoms';
import { PlusIcon } from '@radix-ui/react-icons';
import { Hamburger } from '../Atoms';
import { useGlobalContext } from '@/app/context';
import { SelectOverview } from '.';


const WalletActions = () => {
  const { wallet } = useGlobalContext();
  return (
    <div>
      {
        wallet === 'MASTER' ? (
          <div>
            <div className="lg:hidden">
              <Hamburger />
            </div>
            <div className="hidden lg:block">
              <FundButton desc="+ Fund Distribution Wallet" variant="blue" />
            </div>
          </div>
        ) : wallet === 'DISTRIBUTION' ? (
          <div>
            <div className="hidden lg:flex items-center justify-between gap-4">
              <FundButton desc="+ Tranfer to Master Wallet" variant="blue" />
              <FundButton desc="+ Fund Institutional Wallet" variant="white" />
            </div>

            <div className="lg:hidden">
              <Hamburger />
            </div>
          </div>
        ) : (
          <SelectOverview />
        )
      }
      
    </div>
    
  )
}

export default WalletActions
