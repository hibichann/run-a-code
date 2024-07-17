import { Storage } from "@plasmohq/storage"

import type { Config } from "../interface"

export const setConfig = async (v: Config) => {
  const storage = new Storage()
  await storage.set("config", v)
  console.log("set", v)
}
export const getConfig = async (): Promise<Config> => {
  const storage = new Storage()
  const config = (await storage.get("config")) as Config
  console.log("get", config)
  return config
}
