import Flavor from "./Flavor.jsx";
const Find=(props)=> {
  const findFlavor = props.flavors.find(flavor => flavor.name.includes('Sorbet'));
  return (
    <section>
      <h2>Flavor of the day: </h2>
      <div className="flavors">
      {findFlavor ? <p>{findFlavor.name}</p> : <p>No Sorbet Flavor Found</p>}
      </div>
    </section>
  );
}

export default Find;