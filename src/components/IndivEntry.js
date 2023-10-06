import React from 'react'
import locationIcon from './img/location-icon.png'

function IndivEntry(props) {
  return (
    <div>
        <img src={props.entry.imageUrl} alt=""/>
        <div ClassName="entry-description">
            <div ClassName="location-line">
                <img src={locationIcon} alt="" />
                <p>{props.entry.location}</p>
                <a href={props.entry.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            </div>
            <h1>{props.entry.title}</h1>
            <h5>{props.entry.startDate} - {props.entry.endDate}</h5>
            <p>
                {props.entry.description}
            </p>
        </div>
    </div>
  )
}

export default IndivEntry