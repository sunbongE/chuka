import { Dispatch, SetStateAction } from 'react'


export type AmountSectionType = {
    amount: number;
    setAmount: Dispatch<SetStateAction<number>>;
  };