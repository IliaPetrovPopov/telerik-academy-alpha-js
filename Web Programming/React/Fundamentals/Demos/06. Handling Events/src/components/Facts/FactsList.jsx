import FactItem from "./FactItem";

function FactsList({ facts }) {
  const handleClick = (number) => alert(`You liked number ${number} fact!`);
  return (
    <div>
      {facts.map((fact) => {
        const factWithClick = { handleClick, ...fact };
        return <FactItem key={fact.number} {...factWithClick} />;
      })}
    </div>
  );
}

export default FactsList;
