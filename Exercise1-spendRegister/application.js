import { jsonAddDataModule } from "./actionDataModule/jsonAddDataModule.js";
import { jsonReadDataModule } from "./actionDataModule/jsonReadDataModule.js";
import { jsonDeleteDataModule } from "./actionDataModule/jsonDeleteDataModule.js";
import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

async function application() {
  try {
    const rl = readline.createInterface({ input, output });

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

    if (menu === '1') {
        const jsonData = await jsonReadDataModule();
        jsonData.map((value)=>{
          console.log('Id del gasto: ',value.id)
          console.log('Fecha del gasto: ',value.date)
          console.log('Valor del gasto: ',value.spend)
          console.log('--------------------------------')
        })
    } else if (menu === '2') {
        const dateSpendOption = await rl.question('Ingrese la fecha: ')
        const costSpendOption = await rl.question('Ingrese el valor del gasto: ')
        const costSpendInt = parseInt(costSpendOption)
        await jsonAddDataModule(dateSpendOption,costSpendInt)

    } else if (menu === '3') {
        const idSpendDelete = await rl.question('Ingrese el id del elemento a eliminar: ')
        const idSpendInt = parseInt(idSpendDelete)
        jsonDeleteDataModule(idSpendInt)
    } else if (menu === '4'){
      rl.on("close", () => {
        console.log("Hasta luego!!");
      });

      rl.close();

      leave = true

    } else {
        console.log('Error, Selecciona una opcion valida')
        console.log('')
    }
    }
    
  } catch (error) {
    console.log(error);
  }
}

application()