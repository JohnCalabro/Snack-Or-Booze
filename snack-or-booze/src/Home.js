import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({snacks, drinks}) {

  console.log(snacks)

 // with list of drinks passed down as props as well as snacks
 // which was passed down before I started I display the length of
 // these arrays to get the number of drinks
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <p>Choose from our menu of {snacks.length} available snacks!</p>
          <p>Enjoy {drinks.length} refreshing drinks!</p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
