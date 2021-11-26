import React from 'react'
import AnimalCard from "./AnimalCard"

export default function WishList(props) {

    return (
      <div >
        {/* <Grid container spacing={3} > */}
          {props.data.map((wish) => {
            return (
            // <Grid item xs={12} sm={6} lg={4}>
              <AnimalCard key={wish.id} data={wish} />
            // </Grid>
            );
          })}
        {/* </Grid> */}
      </div>
    );
}

