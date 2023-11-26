import Flavor from "./Flavor.jsx";

const Filter = (props) => {
  const filteredFlavors = props.flavors.filter(flavor => flavor.hasChocolateChips === true);

  return (
    <section>
      <h2>Flavors with Chocolate Chips</h2>
      <div className="flavors">
        {filteredFlavors.map((flavor, index) => (
          <Flavor key={index} flavor={flavor} />
        ))}
      </div>
    </section>
  );
}

export default Filter
