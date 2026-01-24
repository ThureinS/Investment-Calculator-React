import { calculateInvestmentResults, formatter } from "../util/investment.js";

const tableHeaders = [
  "Year",
  "Investment Value",
  "Interest (Year)",
  "Total Interest",
  "Invested Capital",
];

const Result = ({ resultArr, toCalculate }) => {
  return (
    <table id="result">
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {resultArr.map((item) => (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{formatter.format(item.valueEndOfYear)}</td>
            <td>{formatter.format(item.interest)}</td>
            <td>
              {formatter.format(
                item.valueEndOfYear -
                  (toCalculate.initialInvestment +
                    item.annualInvestment * item.year),
              )}
            </td>
            <td>
              {formatter.format(
                toCalculate.initialInvestment +
                  item.annualInvestment * item.year,
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Result;
