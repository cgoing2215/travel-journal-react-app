import React from 'react'
import locationIcon from './img/location-icon.png'

function IndivEntry(props) {
  return (
    <div id="entry-line-container">
        <div id="entry-container">
            <img src={props.entry.imageUrl} alt=""/>
            <div id="entry-description">
                <div id="location-line">
                    <img src={locationIcon} alt="location icon" />
                    <h3>{props.entry.location}</h3>
                    <a href={props.entry.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <h1>{props.entry.title}</h1>
                <h5>{props.entry.startDate} - {props.entry.endDate}</h5>
                <p>
                    {props.entry.description}
                </p>
            </div>
        </div>
        <span id="line-separator"></span>
    </div>
  )
}

export default IndivEntry