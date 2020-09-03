import JSON5 from "json5";

export default (req, res) => {
  res.statusCode = 200;
  res.json(JSON5.parse(JSON5.stringify({ name: "John Doe" })));
};
