import React from 'react';
import * as Separator from '@radix-ui/react-separator';

const WalletInfo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:items-center md:justify-between md:gap-2">
      <div>
        <h5 className="text-[10px] md:text-xs font-semibold md:mb-1">
            DISTRIBUTION WALLET ID:
        </h5>
        <p className="text-xl md:text-2xl font-semibold">
            0.0.4690590
        </p>
      </div>
      <Separator.Root
        className="SeparatorRoot hidde md:block w-[0.5px] h-[14px] bg-gradient-to-r from-[#3fcc6a] to-[#174cff] font-semibold fill-transparent"
        decorative
        orientation="vertical"
        style={{ margin: '0 15px', WebkitTextFillColor:'transparent' }}
      />
      <div>
        <Separator.Root
          className="SeparatorRoot md:hidde h-[0.5px] w-[full] bg-gradient-to-r from-[#3fcc6a] to-[#174cff] font-semibold fill-transparent"
          decorative
          orientation="horizontal"
          style={{ WebkitTextFillColor:'transparent' }}
        />
      </div>
      
      <div className="flex items-center justify-between gap-2 ">
        <p className="text-xs md:text-sm bg-gradient-to-r from-[#3fcc6a] to-[#174cff] font-semibold bg-clip-text fill-transparent" style={{WebkitTextFillColor:'transparent',}}>
            BALANCE:
        </p>
        <span className="text-lg md:text-2xl font-semibold">&#8358;1,023,900,000.00</span>
      </div>
    </div>
  )
}

export default WalletInfo
