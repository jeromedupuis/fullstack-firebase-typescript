import express from "express";
import useRouter from "./router";
import middleware from "./middleware";
import useGraphQl from "../graphql/server";

function startAppServer(callback?: any) {
  const server = express();

  middleware(server);
  useRouter(server);
  useGraphQl(server);

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
