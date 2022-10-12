import { ReactElement } from "react";
import { StyleProp, TextInput, TextStyle, View } from "react-native";
import { Colors } from "../../colors/coloros";
import { Input } from "./TextInput.styles";
import InsetShadow from 'react-native-inset-shadow';
import { Shadow } from "react-native-neomorph-shadows";
export type props = {
  placeholder: string;
  onChageText(value: string): void;
  value: string;
  style?: StyleProp<TextStyle>
  isPassword?: boolean
  placeholderTextColor?: string;
  colorTheme?: 'Primary' | 'Secundary'
}
export default function CaetInput(props:props):ReactElement{
  function selectColor(){
    switch(props.colorTheme){
      case 'Primary':
        return props.placeholderTextColor ? props.placeholderTextColor : Colors.Secundary 
      case  'Secundary':
        return props.placeholderTextColor ? props.placeholderTextColor : Colors.Primary
      default:
        return props.placeholderTextColor ? props.placeholderTextColor : Colors.Secundary 
    }
  }

  return(
   <Input
    selectionColor={undefined}
    placeholderTextColor={selectColor()} 
    placeholder={props.placeholder } 
    value={props.value} 
    style={props.style} 
    onChangeText={props.onChageText} 
    secureTextEntry={props.isPassword}
    colorTheme={props.colorTheme}
    />
  )
}