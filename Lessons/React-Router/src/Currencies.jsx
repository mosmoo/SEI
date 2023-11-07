import { Link } from 'react-router-dom';
import currencies from "./currencies.json";

function Currencies() {
  return (
    <div>
      {currencies.map((currency, i) => (
        <h2 key={i}>
          <Link to={`/price/${currency.currency}`}>{currency.currency}</Link>: 
          {currency.country}
        </h2>
      ))}
    </div>
  );
}
export default Currencies;
