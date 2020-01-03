import { configure } from "@storybook/react";
import { configureActions } from "@storybook/addon-actions";

configure(require.context("../src", true, /\.stories\.js$/), module);

configureActions({
  depth: 100,
  limit: 20
});
