import React from 'react'
import { Card, Container } from 'semantic-ui-react';
import AnimalCard from "./AnimalCard"
import WishCard from './WishCard';

export default function WishList(props) {

  return (
    <div >
      <Card.Group stackable itemsPerRow={2}>
        {props.data.map((wish) => {
          return (
            <WishCard key={wish.id} data={wish} />
          );
        })}
      </Card.Group>
    </div>
  );
}

