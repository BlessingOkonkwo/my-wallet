import React from 'react';
import { WalletInfo, WalletActions } from '../Molecules';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const SubHeader = () => {
  return (
    <div className="flex md:items-center justify-between gap-8 bg-white p-4">
      <WalletInfo />
      <WalletActions />
    </div>
  )
}

export default SubHeader
