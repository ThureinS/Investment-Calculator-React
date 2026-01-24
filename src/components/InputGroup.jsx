const inputArr = [
  "initial investment",
  "annual investment",
  "expected return",
  "duration",
];

const InputGroup = ({ handleValueChange, initialValue }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <p>initial investment</p>
          <input
            type="number"
            value={initialValue.initialInvestment}
            onChange={(e) => handleValueChange("initialInvestment", e)}
          />
        </div>
        <div>
          <p>annual investment</p>
          <input
            type="number"
            value={initialValue.annualInvestment}
            onChange={(e) => handleValueChange("annualInvestment", e)}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <p>expected return</p>
          <input
            type="number"
            value={initialValue.expectedReturn}
            onChange={(e) => handleValueChange("expectedReturn", e)}
          />
        </div>
        <div>
          <p>durations</p>
          <input
            type="number"
            value={initialValue.duration}
            onChange={(e) => handleValueChange("duration", e)}
          />
        </div>
      </div>
    </div>
  );
};

export default InputGroup;
