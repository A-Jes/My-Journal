import React from "react"
import ReactDom from "react-dom"
import Navbar from "./Navbar"
import Main from "./Main"
import data from "./data"

export default function App (){
    const content = data.map(info => {
                return (
                    <Main 
               title= {info.title}
               location= {info.location}
               googleMapsUrl= {info.googleMapsUrl}
               startDate= {info.startDate}
               endDate= {info.endDate}
               description= {info.description}
               imageUrl= {info.imageUrl}
                    />
                )
    })
            return (
                <div>
                    <Navbar />
                    {content}
                </div>
            )
}


