import { prompt } from "enquirer";

export async function isOkEnquirer(message = "Still continue ?") {
  const { ok } = await prompt<{ ok: boolean }>({
    type: "confirm",
    name: "ok",
    message,
  });

  return !!ok;
}
