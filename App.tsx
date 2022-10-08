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

export default function App() {
  const userManeger: UserManegerInterface = new UserManager();
  const materalManeger: ManterialManegerInterface = new MaterialManeger();
  const loanManeger: LoanManegerInterface = new LoanManeger();
  async function run(){
    await materalManeger.generateNewMaterial(await new Material().generator('Pincel','Pincel preto novinho em folha'))
    await loanManeger.generetateNewLoan(await new Loan().generator(1,2))
  }
  run()
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
