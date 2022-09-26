import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import Rating from '../components/Rating';
import products from "../products";

function ProductDetails() {
  const params = useParams();
  
  const product= products .find((p)=> p._id == params.id)
  return (
    <div>{product.name}</div>
  )
}

export default ProductDetails