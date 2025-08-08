import { jsonAddDataModule } from "./actionDataModule/jsonAddDataModule.js";
import { jsonReadDataModule } from "./actionDataModule/jsonReadDataModule.js";
import { jsonDeleteDataModule } from "./actionDataModule/jsonDeleteDataModule.js";
import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

async function application() {
  const rl = readline.createInterface({ input, output });
  try {

    let leave = false

    while (!leave){
        const menu = await rl.question(
      `Bienvenido Usuario, Porfavor selecciona una opcion valida
            
            1.Ver Gastos
            2.Agregar Gasto
            3.Eliminar Gasto
            4.Salir

        `

    );

    switch(menu){
      case '1':{
        const jsonData = await jsonReadDataModule();
        jsonData.map((value)=>{
          console.log('Id del gasto: ',value.id)
          console.log('Fecha del gasto: ',value.date)
          console.log('Valor del gasto: ',value.spend)
          console.log('--------------------------------')
        });
        break
      };
        
      case '2':{
        const dateSpendOption = await rl.question('Ingrese la fecha: ')
        const costSpendOption = await rl.question('Ingrese el valor del gasto: ')
        const costSpendInt = parseInt(costSpendOption)
        await jsonAddDataModule(dateSpendOption,costSpendInt)
        break
      };

      case '3':{
          const idSpendDelete = await rl.question('Ingrese el id del elemento a eliminar: ')
          const idSpendInt = parseInt(idSpendDelete)
          jsonDeleteDataModule(idSpendInt)
          break
      }
       
      case '4':{
        rl.on("close", () => {
          console.log("Hasta luego!!");
        });

        rl.close();

        return
      }

      default:{
        throw new Error('Me gusta ver gastos')
      }
    }

    }
    
  } catch (error) {
    console.log(error);
    rl.close();
  }
}

application()