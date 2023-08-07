import React from 'react';
import { WalletInfo, WalletActions } from '../Molecules';
import { useGlobalContext } from '../../context';

const SubHeader = () => {
  const { wallet } = useGlobalContext();
  return (
    <div className="flex md:items-center justify-between gap-8 bg-white p-4">
      <WalletInfo />
      <WalletActions />
    </div>
  ) 
}
export default SubHeader
