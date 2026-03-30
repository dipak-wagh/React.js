import { useState } from 'react'
import {InputBox} from './components'
import currencyData from './currencyData'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("USD")
const [to, setTo] = useState("INR")
  const [convertedAmount, setConvertedAmount] = useState(0)

 const CurrencyInfo = currencyData[from] || {}

  const options = Object.keys(CurrencyInfo)

  

   const swap = () =>  {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
   }

 const convert = () => {
  const rate = CurrencyInfo[to]
  setConvertedAmount(rate ? amount * rate : 0)
}


   return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://plus.unsplash.com/premium_photo-1676673189320-76524a64684a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3VycmVuY3l8ZW58MHx8MHx8fDA%3D')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=> setAmount(amount)}
                                selectCurrency={to}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOption={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                  selectCurrency={from}
                                  amountDisable

                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
