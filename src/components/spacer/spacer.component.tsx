import React from "react";
import styled from "styled-components/native";

const TopSmall = styled.View`
  margin-top: ${(props:any) => props.theme.space[1]};
`;

const TopMedium = styled.View`
  margin-top: ${(props:any) => props.theme.space[2]};
`;

const TopLarge = styled.View`
  margin-top: ${(props:any) => props.theme.space[3]};
`;

const LeftSmall = styled.View`
  margin-left: ${(props:any) => props.theme.space[1]};
`;

const LeftMedium = styled.View`
  margin-left: ${(props:any) => props.theme.space[2]};
`;

const LeftLarge = styled.View`
  margin-left: ${(props:any) => props.theme.space[3]};
`;

export const Spacer = ({ variant }:any) => {
  if (variant === "top.medium") {
    return <TopMedium />;
  }
  if (variant === "top.large") {
    return <TopLarge />;
  }
  if (variant === "left.small") {
    return <LeftSmall />;
  }
  if (variant === "left.medium") {
    return <LeftMedium />;
  }
  if (variant === "left.large") {
    return <LeftLarge />;
  }
  return <TopSmall />;
};