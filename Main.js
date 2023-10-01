import React from "react"


export default function Main (props){
    return(
        <div>
        <div className="main" >
        <div>
            <img src={props.imageUrl} className="main-img" />
            </div>
            <div className="main-div" >
                <img src="https://img.freepik.com/premium-vector/red-pin-point-isolated-white-background_120819-360.jpg" className="main-img1"/>
                <span className="japan" >{props.location}</span>
                <a href={props.googleMapsUrl} className="main-a" >View on Google Maps </a>   
             <h4 className="h4" >{props.title}</h4>
             <h5 className="main-h5" > {`${props.startDate}-${props.endDate}`}</h5>
             <p className="p" >{props.description}</p>
            </div>
        </div>
        <hr/>
        </div>
    )
}