import {Client,Account,Databases, Storage, Avatars} from "appwrite"

export const appwriteConfig ={
    projectId:process.env.REACT_APP_PROJECT_ID,
    URL:process.env.REACT_APP_APPWRITE_URL,
    databaseId: process.env.REACT_APP_DATABASE_ID,
    storageId: process.env.REACT_APP_STORAGE_ID,
    userCollectionId: process.env.REACT_APP_USER_COLLECTION_ID,
    jwtSecret: process.env.REACT_APP_JWT_SECRET_TOKEN,
 
}

export const client=new Client();

client.setProject(appwriteConfig.projectId)
client.setEndpoint(appwriteConfig.URL)

export const account=new Account(client);
export const databases=new Databases(client);
export const storage=new Storage(client);
export const avatars=new Avatars(client);