import * as functions from 'firebase-functions';
import path from 'path';
import next from 'next';

const { api } = require('../server/bundle.js');

const app = next({
  dev: false,
  conf: {
    distDir: `${path.relative(process.cwd(), __dirname)}/../next`
  }
});

const handle = app.getRequestHandler();

const runtimeOpts: any = {
  timeoutSeconds: 300,
  memory: '1GB'
}

exports.next = functions.runWith(runtimeOpts).https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res));
});

exports.api = functions.runWith(runtimeOpts).https.onRequest(api);
