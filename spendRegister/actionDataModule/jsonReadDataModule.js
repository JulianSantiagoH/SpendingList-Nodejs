import { jsonGetDataModule } from "../getDataModule/jsonGetDataModule.js";

export async function jsonReadDataModule (){
    try{
        const jsonData = await jsonGetDataModule()
        return jsonData

    }catch(error){
        console.log(error)
    }
}
