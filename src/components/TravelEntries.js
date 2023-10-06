import React from 'react'
import IndivEntry from './IndivEntry'
import data from '../data'

function TravelEntries() {
  const travelDetails = data.map(entry => {
    return (
      <IndivEntry 
        id={entry.id}
        entry={entry}
      />
    )
  })
  return (
    <div>
        {travelDetails}
    </div>
  )
}

export default TravelEntries