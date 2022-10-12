import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Colors } from "../../colors/coloros";
import { Props } from "./Button";

interface PropsStyled extends Props{

}

export const Touchable = styled.TouchableOpacity`
  width: 40%;
  height: 38px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 5px #AAA ;

  ${({colorTheme}:PropsStyled)=>{
    switch(colorTheme){
      case 'Primary':
        return `background-color: ${Colors.Primary};`
      case 'Secundary':
        return `background-color: ${Colors.Secundary};`
      default:
        return `background-color: ${Colors.Primary};`
    }
  }}
`

Touchable.Text = styled(Text)`
  ${({colorTheme}:PropsStyled)=>{
    switch(colorTheme){
      case 'Primary':
        return `color: ${Colors.Secundary};`
      case 'Secundary':
        return `color: ${Colors.Primary};`
      default:
        return `color: ${Colors.Secundary};`
    }
  }}
  
`