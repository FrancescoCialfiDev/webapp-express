// 1 step
creazione file server.js che conterrà il nostro server

// 2
da riga di comando inizializziamo il prgetto con: npm init -y (evita la procedura di configurazione)

// 3
installiamo express sul nostro progetto con: npm install express

// 4

-importiamo express su server.js
-creiamo un instanza del server e la inizializziamo alla costante server
-abbiamo importato dal file .env la porta di ascolto del server inizialiazzando la costante PORT a process.env.PORT

Utilizziamo i middleware di express come:

- server.use(express.static("public"))
- server.use(cors())
- server.use(express.json())

// 5
