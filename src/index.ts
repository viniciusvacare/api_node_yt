import { server } from "./server/Server";

server.listen(process.env.PORT || 8080, () => {
  console.log(`On fire 🔥... http://localhost:${process.env.PORT || 8080}`);
});

server.on('error', e => console.error("Error", e));