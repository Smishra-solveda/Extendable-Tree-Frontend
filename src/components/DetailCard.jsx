import React from 'react';

export default function DetailCard({node,setCurrentNode}) {
  return (
    <>
        <div onClick={()=>{
          setCurrentNode(node.id)
        }}>
        {node.name}
        </div>
        
    </>
  )
}
