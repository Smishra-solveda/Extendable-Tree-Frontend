import React, { useState } from "react";
import Branch from "./Branch";
import TreeHead from "./TreeHead";
import DetailCard from "./DetailCard";

export default function Heading({ id, relationTree, personData }) {
  const [currentnode,setCurrentNode] = useState(0)
  const node = personData.find((e) => e.id === id);
  return (
    <li>
      <code>
        {id<=currentnode && id === 0 ? (
          <TreeHead key={id} parent={id} />
        ) : (
          <DetailCard node={node} setCurrentNode={setCurrentNode} />
        )}
      </code>
      {id<=currentnode && relationTree[id] !== undefined ? (
        <Branch
          key={id}
          parent={id}
          childrens={relationTree[id]}
          relationTree={relationTree}
          personData={personData}
        />
      ) : (
        <ul>
        </ul>
      )}
    </li>
  );
}
