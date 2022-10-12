import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DatabaseAdapter from './src/adapters/databaseAdapter';
import { FirebaseAdapter } from './src/adapters/FirebaseAdapter';
import LoanManeger from './src/entities/classes/magerers/LoanManeger';
import MaterialManeger from './src/entities/classes/magerers/MaterialManeger';
import User from './src/entities/classes/models/User';
import UserManager from './src/entities/classes/magerers/UserManager';
import LoanManegerInterface from './src/entities/interfaces/LoanManegerInterface';
import ManterialManegerInterface from './src/entities/interfaces/MaterialManegerInterface';
import UserManegerInterface from './src/entities/interfaces/UserManegerInterface';
import { StatusLoan } from './src/entities/types/Loan';
import { StatusMaterial } from './src/entities/types/Material';
import Material from './src/entities/classes/models/Material';
import Loan from './src/entities/classes/models/Loan';
import Screen from './src/components/Screen/Screen';
import imageBackground from './src/assets/teste.png'
import CaetInput from './src/components/TextImput/TextImput';
import { useState } from 'react';
import Button from './src/components/button/Button';
import TextClicable from './src/components/TextClicable/TextClicable';
import { LoginScreen } from './src/screens/LoginScreen/LoginScreen';
export default function App() {
  const userManeger: UserManegerInterface = new UserManager();
  const materalManeger: ManterialManegerInterface = new MaterialManeger();
  const loanManeger: LoanManegerInterface = new LoanManeger();
  const [text, setText] = useState('')
  async function run(){
    await loanManeger.finishLoan(1)
  }
  run()
return (
  <LoginScreen />
)
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  input: {
    color: 'gray',
    marginVertical: 5
  }
});
