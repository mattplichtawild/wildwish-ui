import React from 'react'
import AnimalCard from "./AnimalCard"

export default function WishList(props) {

    return (
      <div >
          {props.data.map((wish) => {
            return (
              <AnimalCard key={wish.id} data={wish} />
            );
          })}
      </div>
    );
}

