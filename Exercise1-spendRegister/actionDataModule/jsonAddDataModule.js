import {jsonGetDataModule} from '../getDataModule/jsonGetDataModule.js'
import {writeFile} from 'fs/promises'

export async function jsonAddDataModule (date,spend){
  try{
     const jsonData = await jsonGetDataModule()

   //*obtener la longitud del arreglo de objetos

    const jsonLength = jsonData[jsonData.length - 1]

    const jsonIdObject = jsonLength.id

    //*agregar un nuevo objeto (nuevo gasto)

    jsonData.push({
        id: jsonIdObject + 1,
        date:date,
        spend:spend
    })  

    await writeFile('./spendRegister.json',JSON.stringify(jsonData,null,2),'utf-8')

  }catch(error){
    console.log(error)
  }
} 
