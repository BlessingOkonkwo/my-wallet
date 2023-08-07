import React, {  } from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon } from '@radix-ui/react-icons';

type SelectItemProps = React.ComponentProps<typeof Select.Item>;

const SelectItem = React.forwardRef<HTMLLIElement, SelectItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <>
        <Select.Item
          className="text-[13px] leading-none rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[state=checked]:text-[#174cff] data-[highlighted]:outline-none data-[highlighted]:bg-[#f8fafe] data-[highlighted]:text-[#174cff] cursor-pointer"
          {...props}
          // @ts-ignore
          ref={forwardedRef}
        >
          <Select.ItemText>{children}</Select.ItemText>
          <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
            <CheckIcon />
          </Select.ItemIndicator>
        </Select.Item>
      </>
    );
  }
);

SelectItem.displayName = 'SelectItem';
export default SelectItem;


// import React, { forwardRef, ReactNode } from 'react';
// import * as Select from '@radix-ui/react-select';
// import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

// interface SelectItemProps extends React.ComponentProps<typeof Select.Item> {
//   value: string;
//   children: ReactNode;
//   className?: string;
// }

// const SelectItem = forwardRef<HTMLLIElement, SelectItemProps>(
//   ({ value, children, className, ...props }, forwardedRef) => {
//     return (
//       <Select.Item
//           className="text-[13px] leading-none rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[state=checked]:text-[#174cff] data-[highlighted]:outline-none data-[highlighted]:bg-[#f8fafe] data-[highlighted]:text-[#174cff] cursor-pointer"
//           {...props}
//           // @ts-ignore
//           ref={forwardedRef}
//         >
//           <Select.ItemText>{children}</Select.ItemText>
//           <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
//             <CheckIcon />
//           </Select.ItemIndicator>
//         </Select.Item>
//       </>
//     );
//   }
// );

// SelectItem.displayName = 'SelectItem';
// export default SelectItem;

