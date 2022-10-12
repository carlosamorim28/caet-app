import { Image as ImageBase, View } from "react-native";
import styled from "styled-components/native";
import Button from "../../components/button/Button";
import TextClicable from "../../components/TextClicable/TextClicable";
import CaetInput from "../../components/TextImput/TextImput";

export const FormContainer = styled(View)`
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
`
FormContainer.CaetInput = styled(CaetInput)`
  margin-top: 6px;
  margin-bottom: 5px;
`;

FormContainer.TextClicable = styled(TextClicable)`
margin-right: 15px;
`;

FormContainer.TextClicableContainer = styled(View)`
  width: 80%;
  align-items: flex-end;
`

export const SubmitContainer = styled(View)`
  flex: 1;
  width: 100%;
  align-items: center;
`;

SubmitContainer.Button = styled(Button)`
margin-bottom: 6px;
margin-top: 6px;
`

SubmitContainer.TextClicable = styled(TextClicable)`
margin-bottom: 6px;
margin-top: 6px;
`