import { ReactElement } from "react";
import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { Touchable } from "./TextClicable.styles";

export type Props = {
  text: string;
  onPress():void;
  textStyle?: StyleProp<TextStyle>
  style?: StyleProp<ViewStyle>
}

export default function TextClicable(props:Props): ReactElement {
  return (
    <Touchable style={props.style}onPress={props.onPress}>
      <Touchable.Text style={props.textStyle}>{props.text}</Touchable.Text>
    </Touchable>
  )
}