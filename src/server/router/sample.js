import omit from "lodash/omit";

export default function(router) {
  router.get("/test", async (req, res) => {
    res.send('test');
  });
}
