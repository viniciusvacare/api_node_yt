"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./server/Server");
Server_1.server.listen(process.env.PORT || 8080, () => {
    console.log(`On fire 🔥... http://localhost:${process.env.PORT || 8080}`);
});
Server_1.server.on('error', e => console.error("Error", e));
