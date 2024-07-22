/* eslint-disable no-unused-vars */
import React from 'react'

export default function Input({amount,
                     onAmountChange,
                     currency,
                     onCurrencyChange,
                     currencyOptions=[],
                     selectCurrency="usd",
                     amountDisable = false,
                     currencyDisable=false,
                            
}) {          
    

    return (
        <>
        <div className='flex flex-row'>
        <input 
                type='number'
                placeholder='amount'
                disabled={amountDisable}
                value={amount}
                onChange={(e) => onAmountChange&&onAmountChange(Number(e.target.value))}
                className='w-96 border-none h-16 m-4 rounded-md text-center text-3xl'
                min={0}
            />
            <div>
               <select value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                className='my-8 w-16 rounded-md h-10'>
              
                   { 
                       currencyOptions.map((v) =>(<option value={v} key={v}>{v}</option>))


                   }

               </select>


            </div>

           


        </div>
            
            
            
        </>
    )
}
