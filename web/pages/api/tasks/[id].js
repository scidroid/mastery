import { Deta } from "deta";

const deta = Deta(process.env.DETA_PROJECT_KEY);

const base = deta.Base("tasks");

const tasks = async (req, res) => {
  let {
    body,
    method,
    query: { id },
  } = req;

  if (method === "PUT") {
    body = JSON.parse(body);
    res.status(200).json(await base.put(body));
  } else if (method === "DELETE") {
    res.status(200).json(await base.delete(id));
  }
};

export default tasks;
