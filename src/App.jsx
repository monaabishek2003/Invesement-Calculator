import { useState } from "react"

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import ResultsTable from "./components/ResultsTable";


function App() {
  const [InvestmentParams, SetInvestmentParams] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = InvestmentParams.duration >= 1;
  const handleChange = (value,key) => {
    SetInvestmentParams((prevParams)=>{
      return ({
        ...prevParams,
        [key]:value
      }
      )
    })
  }

  return (
    <>
      <Header/>
      <UserInput InvestmentParams={InvestmentParams} handleChange={handleChange}/>
      {inputIsValid ? <ResultsTable input={InvestmentParams}/> : <p className="center">Please Enter Duration Greater than Zero</p>}
    </>
  )
}

export default App
