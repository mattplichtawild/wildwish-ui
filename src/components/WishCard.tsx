import React from 'react'
import { Container, Card, Image } from 'semantic-ui-react'

type animal = {
    id: number,
    name: string,
    species: string,
    zoo: string,
    images: object,
}

interface WishProps {
    id: number
    animal: animal, 
    active: boolean
} 

export default function WishCard(props: WishProps) {

    return(
        <Card fluid>
            <Image src='https://wildwishdev.s3.amazonaws.com/media/shirkahntest_TKwHCah.jpg' />
            <Card.Content>
                <Card.Header>{props.animal.name}</Card.Header>
                <Card.Meta>{props.animal.zoo}</Card.Meta>
            </Card.Content>
        </Card>
    )
}

// What's the difference between: 
// function WishCard(props: WishProps) {}
// and
// function WishCard<Wish> (props: Wish) {}
// ?
