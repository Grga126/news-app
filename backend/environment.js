import crypto from "crypto";

export const algorithm = "aes-192-cbc";
export const key = crypto.scryptSync("secret", "salt", 24);
