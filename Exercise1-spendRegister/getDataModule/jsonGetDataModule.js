import fs, { readFile } from 'fs/promises'

export async function jsonGetDataModule () {
    try{

        //*obtener el JSON
        const jsonData = await readFile('./spendRegister.json', 'utf-8');
        
        //*convertir el string a object

        const jsonConvert = JSON.parse(jsonData)

        return jsonConvert
       
    }catch(error){
        console.error(error)    
    }
    
}


