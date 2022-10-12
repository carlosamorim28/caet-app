import { TextInput } from "react-native";
import styled from "styled-components/native";
import { Colors } from "../../colors/coloros";
import { props } from "./TextImput";
 interface Props extends props{

 }

export const Input = styled(TextInput)`
  color: black;
  width: 80%;
  height: 48px;
  ${({colorTheme}:Props)=> {
    switch (colorTheme){
      case  'Primary':
        return `background-color: ${Colors.Primary};`
      case 'Secundary':
        return `background-color: ${Colors.Secundary};`
      default:
        return `background-color: ${Colors.Primary};`
    }
  }}
  padding: 10px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`