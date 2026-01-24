import LogoImg from "./assets/investment-calculator-logo.png";
import InputGroup from "./components/InputGroup.jsx";
import Result from "./components/Result.jsx";

import { calculateInvestmentResults, formatter } from "./util/investment.js";
import { useState } from "react";

function App() {
  const [initialValue, setInitialValue] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const resultArr = calculateInvestmentResults(initialValue);

  function handleValueChange(key, e) {
    setInitialValue((prev) => ({ ...prev, [key]: Number(e.target.value) }));
  }

  return (
    <div>
      <div id="header">
        <img src={LogoImg} alt="logo" />
        <h1>Investment Calculator</h1>
      </div>

      <InputGroup
        handleValueChange={handleValueChange}
        initialValue={initialValue}
      />
      <Result resultArr={resultArr} toCalculate={initialValue} />
    </div>
  );
}

export default App;
