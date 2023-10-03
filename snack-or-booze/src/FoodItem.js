import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ items, drinkItems ,cantFind }) {
  const { id } = useParams();
  
  let refreshment;
  
  let snack = items.find(snack => snack.id === id);
  let drink = drinkItems.find(drink => drink.id === id)
  
  
  if(snack){
    refreshment = snack
  } else if(drink){
    refreshment = drink
  }


  return (
    <section>
      <Card>
        {!snack && !drink ? '404 Not a valid item' :
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {refreshment.name}
          </CardTitle>
          <CardText className="font-italic">{refreshment.description}</CardText>
          <p>
            <b>Recipe:</b> {refreshment.recipe}
          </p>
          <p>
            <b>Serve:</b> {refreshment.serve}
          </p>
        </CardBody>
}
      </Card>
    </section>
  );
}

export default FoodItem;
