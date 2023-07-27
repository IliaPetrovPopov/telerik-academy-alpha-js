import { useState } from "react";
import FactItem from "./FactItem";

function FactsList({ factsData }) {
  const [facts, updateFacts] = useState(factsData);

  const likeFactHandler = (number) => {
    if (!facts.some(fact => fact.number === number)) {
      return;
    }
    const updatedFacts = facts.map((fact) => {
      if (fact.number === number) {
        return { ...fact, isLiked: !fact.isLiked };
      }
      return fact;
    });
    updateFacts(updatedFacts);
  }

  return (
    <div>
      {facts.map((fact) => {
        const factWithClick = { likeFactHandler, ...fact };
        return <FactItem key={fact.number} {...factWithClick} />;
      })}
    </div>
  );
}

export default FactsList;
