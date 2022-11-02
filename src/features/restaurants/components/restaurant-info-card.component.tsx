import { Text } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

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
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled<any>(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
`;

const Title = styled<any>(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled<any>(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props: any) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props: any) => props.theme.space[2]};
  padding-bottom: ${(props: any) => props.theme.space[2]};
`;

export default function RestaurantInfoCard(restaurant: Props) {
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
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map((_, index) => (
            <SvgXml key={index} xml={star} width={20} height={20} />
          ))}
        </Rating>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}
