import express from "express";
import useRouter from "./router";

function startAppServer(callback?: any) {
  const server = express();

  useRouter(server);

  if(callback) {
    callback(server);
  }
  return server;
}

if(process.env.NODE_ENV !== "production") {
  startAppServer((server: any) => {
    server.listen(process.env.API_PORT, () => {
      console.log('API running on port ' + process.env.API_PORT);
    });
  });
}
else {
  exports.api = startAppServer();
}
