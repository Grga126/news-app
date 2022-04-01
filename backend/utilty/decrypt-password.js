import crypto from 'crypto';
import { algorithm, key } from '../environment.js';

export default function decrypt(encryptedText) {
  const [encrypted, iv] = encryptedText.split("|");
  if (!iv) throw new Error("IV not found");
  const decipher = crypto.createDecipheriv(
    algorithm,
    key,
    Buffer.from(iv, "hex")
  );
  return decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8");
}
