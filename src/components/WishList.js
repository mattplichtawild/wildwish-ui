import React from 'react'
import { Card } from 'semantic-ui-react';
import AnimalCard from "./AnimalCard"
import WishCard from './WishCard';

export default function WishList(props) {

    return (
      <div >
          {props.data.map((wish) => {
            return (
              // <AnimalCard key={wish.id} data={wish} />
              <Card.Group  stackable itemsPerRow={2}>
                <WishCard key={wish.id} data={wish} />
              </Card.Group>
            );
          })}
      </div>
    );
}

