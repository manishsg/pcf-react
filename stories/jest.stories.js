import React from "react";
import { storiesOf } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";

import("../test/.jest-test-results.json").then(results => {
  storiesOf("DatetimeBox", module)
    .addDecorator(withTests({ results }))
    .add("Test Results", () => <div>Jest results in storybook</div>, {
      jest: ["datetime.test.js", "storyShots.test.js"]
    });
});
