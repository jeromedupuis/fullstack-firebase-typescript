import bodyParser from "body-parser";
import cors from "cors";

export default function middleware(server: any) {
  server.use(bodyParser.json());
  server.use(cors({ origin: true }));
  return server;
}
