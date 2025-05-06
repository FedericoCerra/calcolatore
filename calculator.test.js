const calculator = require("./calculator");

test("addizione di 2 e 3 deve restituire 5", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("sottrazione di 5 e 2 deve restituire 3", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test("moltiplicazione di 4 e 3 deve restituire 12", () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});

test("divisione di 10 per 2 deve restituire 5", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("divisione per zero deve lanciare un errore", () => {
  expect(() => calculator.divide(10, 0)).toThrow("Divisione per zero non consentita.");
});
