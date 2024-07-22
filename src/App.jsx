import { useEffect, useState } from 'react'
import  Input  from './components/Input'
import useCurrencyInfo from './hooks/getCurrencyInfo'

function App(){


  const [amount,setAmount]=useState(0)
  const[from,setFrom]=useState("usd")
  const[to,setTo]=useState("inr")
  const[convertedAmount,setConvertedAmount]=useState(0)
 
  const currencyInfo = useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)
  
  function convert()
  {
    setConvertedAmount(amount*currencyInfo[to])
  }

  function swap()
  {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  
  return (
    <>
    <div className='flex justify-center items-center w-100 h-screen' style={{backgroundImage:'url(https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        
               
            <div className='overflow-hidden flex flex-col w-fit h-fit px-5 rounded-lg backdrop-blur-2xl bg-white/30 '>
               <Input 
                 amount={amount}
                 currencyOptions={options}
                 selectCurrency={from}
                 onCurrencyChange={(v) => setFrom(v)}
                 onAmountChange={(v) => setAmount(v)}
                 
               
               />
              <div className='flex mx-44'>


                 <button onClick={swap} className='bg-blue-500 active:bg-blue-400 text-white rounded-md px-3'>SWAP</button>


              </div>
               <Input 
                amount={convertedAmount}
                currencyOptions={options}
                selectCurrency={to}
                onCurrencyChange={(v) => setTo(v)}
                onAmountChange={(v) => setConvertedAmount(v)}
                amountDisable={true}
               
               />

               <div className='text-center w-fit mx-20 my-5 bg-blue-500 active:bg-blue-400 text-white rounded-lg'> 
                     <button onClick={convert} className='text-3xl p-2'>CONVERT {from.toUpperCase()} to {to.toUpperCase()}</button>


               </div>

               
             </div>
     </div>
             
   </>
    
    
  )
}

export default App
