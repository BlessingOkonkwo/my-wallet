import React from 'react';
import { WalletInfo, WalletActions } from '../Molecules';

const SubHeader = () => {
  return (
    <div className="flex md:items-center justify-between gap-8 bg-white p-4">
      <WalletInfo />
      <WalletActions />
    </div>
  ) 
}
// 0.0.4690590
export default SubHeader
