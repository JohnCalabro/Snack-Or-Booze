import React from "react";
import { Link, useParams } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ snacks, drinks }) {
  

  const {items} = useParams();
  
  let menuItems;
  let title;
  let description;

  if(items === 'snacks'){
    menuItems = snacks
    title = 'Food Menu'
    description = 'Choose from our selection of delicious snacks!'
  } else if(items === 'drinks'){
    menuItems = drinks
    title = 'Drink Menu'
    description = 'Choose from our selection of drinks and have a good time!'
  } else {
    title = 'Error 404'
    description = `Hmmm. I can't seem to find what you want.`
  }
  

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title}
          </CardTitle>
          <CardText>
            {description}
          </CardText>
          <ListGroup>
            {!menuItems ? '' : menuItems.map(it => (
              <Link to={`${it.name}/${it.id}`} key={it.id}>
              
                <ListGroupItem>{it.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
