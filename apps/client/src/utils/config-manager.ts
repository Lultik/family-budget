/* eslint-disable no-console */
const cfgMap: Map<string, unknown> = new Map();
const DEBUG_MODE = "debug";

cfgMap.set(DEBUG_MODE, false);

export const getConfig = <V = unknown>(key: string) => {
  const isDebug = cfgMap.get(DEBUG_MODE) as boolean;

  if (isDebug) {
    if (cfgMap.get(key)) {
      console.log(`getConfig: key is ${key}, value is ${String(cfgMap.get(key))}`);
    } else {
      console.log(`getConfig: ${key} is missing`);
    }
  }

  return cfgMap.get(key) as V | undefined;
};

export const addConfig = <V = unknown>(key: string, value: V) => {
  const isDebug = cfgMap.get(DEBUG_MODE) as boolean;

  if (isDebug) {
    if (cfgMap.get(key)) {
      console.log(`addConfig: update key is ${key}, value is ${String(value)}`);
    } else {
      console.log(`addConfig: new key is ${key}, value is ${String(value)}`);
    }
  }
  cfgMap.set(key, value);
};
