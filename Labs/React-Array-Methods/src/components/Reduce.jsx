const Reduce=(props)=> {
  const numberOfFlavorsWithChocolateChips = props.flavors.reduce((count, flavor) => {
    if (flavor.hasChocolateChips) {
      return count + 1;
    }
    return count;
  }, 0);

  return (
    <div>
    <p>Number of ice cream flavors with chocolate chips: {numberOfFlavorsWithChocolateChips}</p>
  </div>
  );
}

export default Reduce;
