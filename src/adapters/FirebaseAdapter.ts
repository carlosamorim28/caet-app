import { RequestType } from "../entities/RequestType";
import MaterialType, { StatusMaterial } from "../entities/types/Material";
import MemberType from "../entities/types/Member";
import DatabaseAdapter from "./databaseAdapter";
import {FirebaseApp, initializeApp} from 'firebase/app'
import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, UserCredential } from 'firebase/auth'
import { getFirestore, setDoc, doc, Firestore, addDoc, collection, FieldPath, deleteDoc, getDoc, getDocs, query, DocumentData, DocumentSnapshot, where, QuerySnapshot } from 'firebase/firestore';
import { LoanType, StatusLoan } from "../entities/types/Loan";

const firebaseConfig = {
  apiKey: "AIzaSyCQlYIyANz7tYPEr78jRZ7t0Ib357-SfOk",
  authDomain: "caet-app.firebaseapp.com",
  projectId: "caet-app",
  storageBucket: "caet-app.appspot.com",
  messagingSenderId: "101852658267",
  appId: "1:101852658267:web:86aad721685125bdfadd7e",
  measurementId: "G-YZ6LZ5KGCX"
}
export const Constants = {
  USER_TABLE: "Users",
  MATERIAL_TABLE: "Materials",
  LOAN_TABLE: 'Loans',
  LAST_IDS: 'last_ids'

}

export class FirebaseAdapter implements DatabaseAdapter{
  private app: FirebaseApp;
  private firestore: Firestore;
  private auth: Auth;

  constructor (){
    this.app = initializeApp(firebaseConfig);
    this.firestore = getFirestore(this.app);
    this.auth = getAuth()
  }
  initializeDB() {
    this.app = initializeApp(firebaseConfig);
    this.firestore = getFirestore(this.app);
  }

  async createUser(newMember: MemberType): Promise<RequestType<MemberType>> {
    try{
      await createUserWithEmailAndPassword(this.auth,newMember.login,newMember.senha);
      await setDoc(doc(this.firestore, Constants.USER_TABLE,`${newMember.id}`), newMember);
      await setDoc(doc(this.firestore,Constants.LAST_IDS,Constants.USER_TABLE),{id:newMember.id});
      return {statusCode: 200, data: newMember}
    }catch(e) {
      console.log(e)
      return {statusCode: 400, message: `${e}`}
    }
  }
  async deleteUser(id: number): Promise<RequestType<MemberType>> {
    try{
      await deleteDoc(doc(this.firestore,Constants.USER_TABLE,`${id}`))
      return({
        statusCode:200
      })
    }catch(e){
      return {statusCode: 400, message: `${e}`}
    }
    
  }
  async login(login: string, senha: string): Promise<RequestType<MemberType>> {
    try{
      const userCredencial:UserCredential = await signInWithEmailAndPassword(this.auth,login,senha);
      const documentData: QuerySnapshot<DocumentData> = await getDocs(query(collection(this.firestore,Constants.USER_TABLE), where("login",'==',userCredencial.user.email)));
      let user: MemberType | undefined = undefined;
      documentData.forEach((value: DocumentData)=>{
        user = value.data()
      })
      return{
        statusCode:200,
        data: user
      }
    }catch(e){
      return{
        statusCode:400
      }
    }
  }
  async logout(id: number): Promise<RequestType<MemberType>> {
    try{
      const response = await signOut(this.auth);
      return {
        statusCode: 200
      }
    }catch(error){
      return {
        statusCode: 400
      }
    }
  }
  async listUsers(): Promise<RequestType<MemberType[]>> {
    const querySnapshot = await getDocs(query(collection(this.firestore,Constants.USER_TABLE)))
    const members: MemberType[]=[];
    querySnapshot.forEach((doc:DocumentData)=>{
      members.push(doc.data());
    })
    return {
      statusCode: 200,
      data: members
    }
  }
  async createMaterial(newMaterial: MaterialType): Promise<RequestType<MaterialType>> {
    try{
      await setDoc(doc(this.firestore,Constants.LAST_IDS,Constants.MATERIAL_TABLE),{id:newMaterial.id})
      await setDoc(doc(this.firestore,Constants.MATERIAL_TABLE,String(newMaterial.id)),newMaterial)
      return {
        statusCode: 200,
        data: newMaterial
      }
    }catch(error){
      return{
        statusCode: 400,
        message: String(error)
      }
    }
  }
  async deleteMaterial(id: number): Promise<RequestType<MaterialType>> {
    try{
      await deleteDoc(doc(this.firestore,Constants.MATERIAL_TABLE,String(id)))
      return {
        statusCode:200
      }
    }catch(error){
      return{
        statusCode:400
      }
    }

  }
  async listMaterial(): Promise<RequestType<MaterialType[]>> {
    try{
      const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(query(collection(this.firestore,Constants.MATERIAL_TABLE)))
      const materials: MaterialType[] = []
      querySnapshot.forEach((value:DocumentData)=>{
        materials.push(value.data());
      });

      return{
        statusCode: 200,
        data: materials,
      }
    }catch(error){
      return{
        statusCode: 400,
      }
    }
  }
   async createLoan(loan: LoanType): Promise<RequestType<LoanType>>  {
    try{
      await setDoc(doc(this.firestore,Constants.LAST_IDS,Constants.LOAN_TABLE),{id:loan.id})
      await setDoc(doc(this.firestore, Constants.LOAN_TABLE, String(loan.id)),loan);
      const material: MaterialType = (await getDoc(doc(this.firestore,Constants.MATERIAL_TABLE,String(loan.mterial_id)))).data()
      material.status = StatusMaterial.outCAET 
      await setDoc(doc(this.firestore, Constants.MATERIAL_TABLE, String(loan.mterial_id)),material )
      return{
        statusCode:200,
        data: loan
      }
    }catch(error){
      return {
        statusCode:400
      }
    }

  }
  
  async concludeLoan(id: number): Promise<RequestType<LoanType>> {
    try{
      const loan: LoanType  = (await getDoc(doc(this.firestore,Constants.LOAN_TABLE,String(id)))).data()
      loan.dateReturn = new Date(Date.now()).toDateString()
      loan.status = StatusLoan.finalized
      await setDoc(doc(this.firestore, Constants.LOAN_TABLE, String(loan.id)),loan);
      const material: MaterialType = (await getDoc(doc(this.firestore,Constants.MATERIAL_TABLE,String(loan.mterial_id)))).data()
      material.status = StatusMaterial.inCAET;
      await setDoc(doc(this.firestore, Constants.MATERIAL_TABLE, String(loan.mterial_id)),material)
      return{
        statusCode: 200,
        data:loan
      }
    }catch(error){
      return{
        statusCode:400
      }
    }
  }
  async listOpenLoans(): Promise<RequestType<LoanType[]>> {
    try{
      const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(query(collection(this.firestore,Constants.LOAN_TABLE),where('status','==',StatusLoan.active)))
      const loans: LoanType[] = []
      querySnapshot.forEach((value: DocumentData)=>{
        loans.push( value.data() )
      })
      return {
        statusCode:200,
        data: loans
      }
    }catch(error){
      return {
        statusCode:400
      }
    }
  }
  async listCloseLoans(): Promise<RequestType<LoanType[]>> {
    try{
      const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(query(collection(this.firestore,Constants.LOAN_TABLE),where('status','==',StatusLoan.finalized)))
      const loans: LoanType[] = []
      querySnapshot.forEach((value: DocumentData)=>{
        loans.push( value.data() )
      })
      return {
        statusCode:200,
        data: loans
      }
    }catch(error){
      return {
        statusCode:400
      }
    }
  } 

  async getLastId(nameTable: string): Promise<number> {
    try{
      const document = doc(this.firestore,Constants.LAST_IDS,nameTable)
      const id_data = await getDoc(document)
      let id = 0
      if(id_data.exists()){
        id = id_data.data().id      
      }else{
        await setDoc(document,{id: 0})
      }
      console.log('id', id)
      return id
      
    }catch(error){
      console.log(error)
      return -1;
    }
  }
  
}