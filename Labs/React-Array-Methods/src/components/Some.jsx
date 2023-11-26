import Flavor from "./Flavor.jsx";
const Some=(props) =>{
  const hasFlavorsWithoutChocolateChips = props.flavors.some(flavor => !flavor.hasChocolateChips)
  return(
    <section>
    <h2>Do we have Flavors without Chocolate Chips? {hasFlavorsWithoutChocolateChips ? <h2>Yes</h2> : <h2>No</h2>} </h2>
  </section>
  )
}

export default Some;
