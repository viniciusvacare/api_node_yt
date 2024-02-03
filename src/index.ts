import { server } from "./server/Server";

const PORT:number = 8080;

server.listen(PORT, () => {
  console.log(`On fire 🔥... http://localhost:8080`);
});

server.on('error', e => console.error("Error", e));