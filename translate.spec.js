import { expect, it } from "@jest/globals";

import { UTFChar } from "./translate";

it("translates one character correctly", () => {
  const result = UTFChar("Hello");
  expect(result).toBe(["....", "ello"]);
});

it("handles unknown characters correctly", () => {
  const result = UTFChar("@gmail.com");
  expect(result).toBe(["", "@gmail.com"]);
});

it("translates words correctly", () => {
  const result = someUTFChar("Hello");
  expect(result).toBe([".... . .-.. .-.. ---", ""]);
});

it("translates multiple words correctly", () => {
  const result = someUTFChar(
    "Hello World. Our bakers have been baking biscuits for more than 100 years."
  );
  expect(result).toBe([
    ".... . .-.. .-.. ---  .-- --- .-. .-.. -.. .-.-.-  --- ..- .-.  -... .- -.- . .-. ...  .... .- ...- .  -... . . -.  -... .- -.- .. -. --.  -... .. ... -.-. ..- .. - ...  ..-. --- .-.  -- --- .-. .  - .... .- -.  .---- ----- -----  -.-- . .- .-. ... .-.-.-",
    "",
  ]);
});
