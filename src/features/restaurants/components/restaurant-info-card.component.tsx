import { Text } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

interface Props {
  name?: string;
  icon?: any;
  photos?: [];
  address?: string;
  isOpenNow?: boolean;
  rating?: number;
  isClosedTemporarily?: any;
}

const RestaurantCard = styled<any>(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled<any>(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled<any>(Text)`
  padding: 16px;
  color: red;
`;
 

export default function RestaurantInfoCard(restaurant : Props) {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant
     
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
}
