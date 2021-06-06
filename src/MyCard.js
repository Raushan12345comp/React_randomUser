import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
const MyCard = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border danger"
          src= {details.picture?.large}
        ></img>
        <CardTitle className="text-primary">
          <h1>
            <span className="p-2">{details.name?.title}</span>
            <span>{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h1>
        </CardTitle>
        <CardText>
          <p><FaEnvelope />
          {details.email}</p>
          <p><FaPhone />
          {details.phone}</p>
          <p> <FaMapMarkerAlt />
          {details.location?.city}</p>
         
          <p>
          {details.phone}
          </p>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MyCard;
