import FactItem from "./FactItem";

function FactsList({ facts }) {
  return (
    <div>
      {facts.map((fact) => (
        <FactItem key={fact.number} {...fact} />
      ))}
    </div>
  );
}

export default FactsList;