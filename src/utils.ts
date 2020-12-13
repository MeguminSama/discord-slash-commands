import { sign } from "tweetnacl";

export const verifySignature = async (
  publicKey: string,
  signature: string,
  timestamp: string,
  rawBody: string
): Promise<boolean> => {
  return sign.detached.verify(
    Buffer.from(timestamp + rawBody),
    Buffer.from(signature, "hex"),
    Buffer.from(publicKey, "hex")
  );
};
