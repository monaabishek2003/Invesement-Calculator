import { useState } from "react";

const UserInput = () => {
  const [InvestmentParams, SetInvestmentParams] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
  });

  const handleChange = (value,key) => {
    SetInvestmentParams((prevParams)=>{
      return ({
        ...prevParams,
        [key]:value
      }
      )
    })
  }
  console.log(InvestmentParams)
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>INITIAL INVESTMENT</label>
          <input type="number" required value={InvestmentParams['initialInvestment']} onChange={(e)=>handleChange(e.target.value,'initialInvestment')}/>
        </div>
        <div>
          <label>ANNUAL INVESTMENT</label>
          <input type="number" required value={InvestmentParams['annualInvestment']} onChange={(e)=>handleChange(e.target.value,'annualInvestment')}/>
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>EXPECTED RETURN</label>
          <input type="number" required value={InvestmentParams['expectedReturn']} onChange={(e)=>handleChange(e.target.value,'expectedReturn')}/>
        </div>
        <div>
          <label>DURATION</label>
          <input type="number" required value={InvestmentParams['duration']} onChange={(e)=>handleChange(e.target.value,'duration')}/>
        </div>
      </div>
    </div>
  );
};

export default UserInput;
