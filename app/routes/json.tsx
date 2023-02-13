import type { MetaFunction } from "@remix-run/cloudflare";
import EncoderDecoder from "~/components/encoder-decoder";

export const meta: MetaFunction = () => ({
  title: "JSON | Utiliti",
});

async function encode(text: string): Promise<string> {
  try {
    return JSON.stringify(text);
  } catch (e) {
    return Promise.reject({ message: (e as SyntaxError).message });
  }
}

async function decode(text: string): Promise<string> {
  try {
    return JSON.parse(text);
  } catch (e) {
    return Promise.reject({ message: (e as SyntaxError).message });
  }
}

export default function JSONEncoder() {
  return (
    <EncoderDecoder
      label="JSON"
      encode={encode}
      decode={decode}
      showLoadFile={true}
    />
  );
}
