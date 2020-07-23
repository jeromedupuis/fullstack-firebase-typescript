import express from "express";
import bodyParser from "body-parser";

import sample from './sample';

export default function useRouter(api) {

  const router = express.Router();
  router.use(bodyParser.json());

  sample(router);


  return api.use("/api/v1", router);
}
