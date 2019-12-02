import React from "react";
import { useSelector } from "react-redux";
import { NavigationLink } from "../../models";
import HeaderAppBar from "./appBar";

export const Header = () => {
  const navigation: NavigationLink[] = useSelector<RootState, any>(
    state => state.header.navigation
  );
  const visiblity = useSelector<RootState, any>(
    state => state.header.visibility
  );

  if (!visiblity) return null;

  return (
    <>
      <HeaderAppBar navigation={navigation} />
    </>
  );
};
