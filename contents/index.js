import { getConfig, setConfig } from "../uitls/utils"
import config from "./config.json"

export {}

console.log("RUN A CODE works")
// init
async function initConfig() {
  // const data = await getConfig()
  const data = null
  if (!data) await setConfig({ list: config.list })
}
initConfig()
