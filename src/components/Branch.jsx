import React from 'react'
import Heading from './Heading'

export default function Branch({parent, childrens, relationTree, personData}) {
  return (
    <ul>
        {childrens.map(x => {
            return <Heading key={x} id={x} relationTree={relationTree} personData={personData}/>
        })}
    </ul>
  )
}
