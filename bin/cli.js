const readline = require("readline");
const calculator = require("../src/calculator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Benvenuto nella calcolatrice CLI!");
console.log("Operazioni disponibili: addizione, sottrazione, moltiplicazione, divisione");

rl.question("Seleziona un'operazione: ", (operation) => {
  if (!["addizione", "sottrazione", "moltiplicazione", "divisione"].includes(operation)) {
    console.log("Operazione non valida.");
    rl.close();
    return;
  }

  rl.question("Inserisci il primo numero: ", (num1) => {
    rl.question("Inserisci il secondo numero: ", (num2) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);

      if (isNaN(a) || isNaN(b)) {
        console.log("I parametri devono essere numeri validi.");
        rl.close();
        return;
      }

      let result;
      try {
        switch (operation) {
          case "addizione":
            result = calculator.add(a, b);
            break;
          case "sottrazione":
            result = calculator.subtract(a, b);
            break;
          case "moltiplicazione":
            result = calculator.multiply(a, b);
            break;
          case "divisione":
            result = calculator.divide(a, b);
            break;
        }
        console.log(`Risultato: ${result}`);
      } catch (error) {
        console.log(`Errore: ${error.message}`);
      }

      console.log("Grazie per aver usato la calcolatrice CLI!");
      rl.close();
    });
  });
});
