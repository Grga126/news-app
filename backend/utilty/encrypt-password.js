import crypto from "crypto";
import { algorithm, key } from "../environment.js";

export default function encrypt(clearText) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const encrypted = cipher.update(clearText, "utf8", "hex");
  return [
    encrypted + cipher.final("hex"),
    Buffer.from(iv).toString("hex"),
  ].join("|");
}
