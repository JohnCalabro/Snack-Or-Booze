import React from "react";
import { Redirect} from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function NotFound () {
    return <div>
        <h1>Error 404</h1>
        <p>Hmmm. I can't seem to find what you want.</p>
    </div>
}

export default NotFound;