import React from 'react'
import { Sidebar, Segment, Button, Icon } from "semantic-ui-react"
import DonateBox from "./DonateBox"
import WishCardIcons from "./WishCardIcons"

export default function CardActions (props) {

    const [state, setState] = React.useState( {liked: false} )

    return (
        <>
        
        <Button icon='share alternate' />
        <Button icon={state.liked ? 'heart' : 'heart outline'} onClick={ () => setState({liked: !state.liked}) }/>
        
        
        {state.liked ? <DonateBox /> : ''}

        </>
    )
}