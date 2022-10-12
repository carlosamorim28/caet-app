import { ReactElement } from "react";
import { ImageBackground, ImageSourcePropType, StyleProp, View, ViewStyle } from "react-native";
import { BackgroundImageConteiner, Container as ContainerBase } from "./styles";
type props = {
  style?: StyleProp<ViewStyle>;
  children?: ReactElement[] | ReactElement;
  backgroundColor?: string
  source?: string; 
}
export default function Screen(props: props): ReactElement{
  const Container = props.source ?  BackgroundImageConteiner : ContainerBase;
  return(
    <Container source = {props.source} backgroundColor={props.backgroundColor} style={props.style}>
      {props.children}
    </Container>
  )
}