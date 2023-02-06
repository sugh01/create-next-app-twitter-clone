import React from "react";
import {Card} from 'react-bootstrap'

const Tweet = ({text, author, date} : {text: string, author: string, date:string}) => {
    return <>
        <Card style={{width:'50 rem', margin:'auto', 'marginBottom':'30px'}}>
            <Card.Body>
            <Card.Title>{author}</Card.Title>
            <Card.Subtitle>{date}</Card.Subtitle>
            <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    </>
}

export default Tweet