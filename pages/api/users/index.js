import dbConnect from "../../../until/dbConnect";
const handler = async (req, res) => {
  await dbConnect();
  res.status(200).json({ message: "Hello World" });
};

export default handler;
