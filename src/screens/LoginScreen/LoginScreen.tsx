import { ReactComponentElement, ReactElement, useState } from "react";
import { Image, View } from "react-native";
import Button from "../../components/button/Button";
import Screen from "../../components/Screen/Screen";
import TextClicable from "../../components/TextClicable/TextClicable";
import CaetInput from "../../components/TextImput/TextImput";
import { FormContainer, SubmitContainer } from "./styles";

const image = require('../../assets/images/LoginBackground.png')
const logo = require('../../assets/icons/LogoCAETcompleta.png') 
export function LoginScreen(){
  const [email,setEmail] = useState('')
  const [senha,setSenha] = useState('')
  return(
    <Screen source={image}>
      <Image source={logo} style={{flex:2}} resizeMode='contain'/>
      <FormContainer>
        <FormContainer.CaetInput placeholder="E-Mail"  onChageText={(value)=>{setEmail(value)}} value={email}  />
        <FormContainer.CaetInput isPassword placeholder="Senha" onChageText={(value)=>{setSenha(value)}} value={senha}/>
        <FormContainer.TextClicableContainer>
          <FormContainer.TextClicable onPress={()=>{alert("Esqueci minha senha")}} text="Esqueci minha senha?" />
        </FormContainer.TextClicableContainer>
      </FormContainer>
      <SubmitContainer>
        <SubmitContainer.Button onPress={()=>{alert('Clicou No login')}} text="Entrar" />
        <SubmitContainer.TextClicable onPress={()=>{alert("Clicou em Cadastre-se")}} text="Cadastre-se" />
      </SubmitContainer>
    </Screen>
  )
}