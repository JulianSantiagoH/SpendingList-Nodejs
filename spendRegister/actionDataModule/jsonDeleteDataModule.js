import { writeFile } from "fs/promises";
import { jsonGetDataModule } from "../getDataModule/jsonGetDataModule.js";

export async function jsonDeleteDataModule (id){
    try{

        const jsonData = await jsonGetDataModule()
        
        const newArray = jsonData.filter(jsonData => jsonData.id !== id)

        await writeFile('./spendRegister.json',JSON.stringify(newArray,null,2),'utf-8')


    }catch(error){
        console.error(error)
    }
}
