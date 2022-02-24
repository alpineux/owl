const editJsonFile = require("edit-json-file");
let file = editJsonFile("./lib/strings/rooms/amenities.json");

export default async (req, res) => {
  let file = editJsonFile(`./lib/reports/${req.query.id}.json`);
  let data = file.get();
  return res.status(200).send(data);
};