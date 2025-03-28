import conf from "../conf/conf";
import { Client, Account, ID} from 'appwrite';

//class bata kaam hunchha, jaba naya object create hunchha
export class AuthService{
    client =new Client ()
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client)
    }
    //euta method, jasle appwrite ko sabai service call garchha euta wrapper banaayera
    //async is used so that untill the account is created, teti bela samma rokchha, aghi jana didaina
    async createAccount({email, password, name}){
        try {
            const userAccount=await this.account.createMethod(ID.unique(), email, password, name )
            if (userAccount){
                //call another method
                return this.login;
            }else{
                return userAccount
            }
        } catch (error) {
           throw error; 
        }
    }

    async login({email,password}){
        try{
            return await this.account.createEmailSession(email, password)
        } catch(error){
            throw error;
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
           console.log("Appwrite Service :: logout :: error", error); 
        }
    }
}

const authService =new AuthService() //object, use constructor

export default authService
