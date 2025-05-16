# 🧮 Calcolatore
Una semplice calcolatrice da linea di comando (CLI) sviluppata in Node.js, che supporta operazioni di somma, sottrazione, moltiplicazione e divisione.

📦 *Requisiti*
Node.js >= 18 (si consiglia l'ultima LTS attualmente supportata)

npm (incluso con Node.js)

# 👤 Autore
Federico Cerra
https://github.com/FedericoCerra

# 🚀 Installazione

git clone https://github.com/FedericoCerra/calcolatore.git
cd calcolatore
npm ci

# 👤 Esecuzione

npm start

# Test

Per runnare i test:

    npm test

Per generare un report:

    npm run test:coverage

# CI/CD con GitHub Actions
La pipeline GitHub Actions automatizza:

Installazione dipendenze con npm ci

Esecuzione dei test unitari con Jest

(Facoltativo) Upload del report di coverage come artifact

Supporta anche l’esecuzione manuale tramite workflow_dispatch.