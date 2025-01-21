import { loadConfiguration, runCucumber } from "@cucumber/cucumber/api";

const { runConfiguration } = await loadConfiguration({});
await runCucumber(runConfiguration);
