import User from "@/models/User";
import db from "@/utils/db";
import { hashPassword } from "@/utils/auth";

async function handler(req, res) {
  if (req.method !== "Post") {
    return;
  }

  const data = req.body;

  const { name, email, password } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message: "Invalid input",
    });
    return;
  }

  await db.connect();

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    res.status(422).json({
      message: "User already exists!",
    });
    db.disconnect();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await User.create({
    name: name,
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "Created user!" });
  await db.disconnect();
}

export default handler;
