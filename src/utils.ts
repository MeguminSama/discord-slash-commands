import * as ed from "noble-ed25519";

export const verifySignature = async (
  publicKey: string,
  signature: string,
  timestamp: string,
  rawBody: string,
): Promise<boolean> => {
  return ed.verify(
    signature,
    Buffer.concat(
      [Buffer.from(timestamp, "utf-8"), Buffer.from(rawBody, "utf-8")],
    ),
    publicKey,
  );
};
