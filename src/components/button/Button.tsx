import { ReactElement } from "react";
import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import {Touchable} from './Button.styles'
export type Props = {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  text: string;
  onPress():void;
  colorTheme?: 'Primary' | 'Secundary'
}
 export default function Button(props:Props):ReactElement<Props>{
  return(
    <Touchable
      colorTheme={props.colorTheme}
      onPress={props.onPress}
      style={props.style}
    >
      <Touchable.Text style={props.textStyle} colorTheme={props.colorTheme}>{props.text}</Touchable.Text>
    </Touchable>
  )
 }