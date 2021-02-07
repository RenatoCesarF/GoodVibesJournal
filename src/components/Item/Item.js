import React from 'react'

import New from './New/New'
import Quote from './Quote/Quote'
import Tweet from './Tweet/Tweet'

function redirectTo(url) {
    window.open(url)
}

export default function Item(props) {
    
    if (props.type == "News") {
        return (
            <New
                title={props.title}
                description={props.description}
                image={props.image}
                url={props.url}
                redirectTo={redirectTo}
            />
            )
    }

    else if (props.type == "Quotes") {
        return (
            <Quote
                quote={props.quote}
                author={props.author}
            />
        )
    }
    
    else if (props.type == "Tweets") {
     
        return (
            <Tweet
                twUserPhoto={props.twUserPhoto}
                twUser={props.twUser}
                twLink={props.twLink}
                twText={props.twText}
                twMedia={props.twMedia}
                redirectTo={redirectTo}
            />
        )
    }
    else if (props.type == "Random") {
       
        if (props.twUser) {
            return (
                <Tweet
                twUserPhoto={props.twUserPhoto}
                twUser={props.twUser}
                twLink={props.twLink}
                twText={props.twText}
                twMedia={props.twMedia}
                redirectTo={redirectTo}
                /> 
                )
        }
        else if (props.title) {
            return (
                <New
                    title={props.title}
                    description={props.description}
                    image={props.image}
                    url={props.url}
                    redirectTo={redirectTo}
                />
                )
        }
        else {
            return (
                <Quote
                quote={props.quote}
                author={props.author}
            />
            )
        }
   
    }
}
