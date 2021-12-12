import React from 'react'
import { Container, Card, Image } from 'semantic-ui-react'
import WishCardIcons from './WishCardIcons'
import DonateBox from './DonateBox'
import CardActions from './CardActions'

type image = {  
    upload: string
}

type animal = {
    id: number,
    name: string,
    species: string,
    zoo: string,
    images: Array<image>,
}

interface WishProps {
    data: {
        id: number
        animal: animal, 
        active: boolean,
        images: Array<image>
    }
} 

export default function WishCard(props: WishProps) {

    return(
        <Card fluid>
            {/* TODO: Rewrite to use 'avatar' attribute on animal when API is reformatted to correctly provide that */}
            <Image src={props.data.animal.images[0].upload} fluid/>

            <CardActions active={props.data.active} />

            <Card.Content>
                <Card.Header>{props.data.animal.name}</Card.Header>
                <Card.Meta>{props.data.animal.zoo}</Card.Meta>
            </Card.Content>
        </Card>
    )
}

// What's the difference between: 
// function WishCard(props: WishProps) {}
// and
// function WishCard<Wish> (props: Wish) {}
// ?
