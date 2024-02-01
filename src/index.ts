import { server } from "./server/Server";

const port = 8080;

server.listen(port, () => {
  console.log(`In up 🔥... http://localhost:8080`);
});
