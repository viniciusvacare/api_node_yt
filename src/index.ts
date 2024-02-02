import { server } from "./server/Server";

const port = 8080;

server.listen(port, () => {
  console.log(`On fire 🔥... http://localhost:8080`);
});
