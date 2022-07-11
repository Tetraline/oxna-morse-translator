import { expect, it } from "@jest/globals";

import { UTFChar, someUTFChar, translate } from "./translate";

it("parses one character correctly", () => {
  const result = UTFChar("hello");
  expect(result).toEqual(["....", "ello"]);
});

it("can parse a single character string", () => {
  const result = UTFChar("h");
  expect(result).toEqual(["....", ""]);
});

it("handles unknown characters correctly", () => {
  const result = UTFChar("@gmail.com");
  expect(result).toEqual(["", "@gmail.com"]);
});

it("translates words correctly", () => {
  const result = someUTFChar("hello");
  expect(result).toEqual([".... . .-.. .-.. ---", ""]);
});

it("handles unknown characters correctly", () => {
  const result = someUTFChar("@gmail.com");
  expect(result).toEqual(["", "@gmail.com"]);
});

it("handles unknown characters correctly", () => {
  const result = someUTFChar("dave@gmail.com");
  expect(result).toEqual(["-.. .- ...- .", "@gmail.com"]);
});

it("translates multiple words correctly", () => {
  const result = someUTFChar(
    "hello world our bakers have been baking biscuits for more than 100 years"
  );
  expect(result).toEqual([
    ".... . .-.. .-.. ---  .-- --- .-. .-.. -..  --- ..- .-.  -... .- -.- . .-. ...  .... .- ...- .  -... . . -.  -... .- -.- .. -. --.  -... .. ... -.-. ..- .. - ...  ..-. --- .-.  -- --- .-. .  - .... .- -.  .---- ----- -----  -.-- . .- .-. ...",
    "",
  ]);
});

it("handles unknown characters correctly", () => {
  const logSpy = jest.spyOn(console, "error");
  const result = translate("dave@gmail.com");
  expect(result).toEqual("-.. .- ...- .");
  expect(logSpy).toHaveBeenCalledWith("Unable to parse @gmail.com");
});

it("translates multiple words correctly", () => {
  const result = translate(
    "hello world our bakers have been baking biscuits for more than 100 years"
  );
  expect(result).toEqual(
    ".... . .-.. .-.. ---  .-- --- .-. .-.. -..  --- ..- .-.  -... .- -.- . .-. ...  .... .- ...- .  -... . . -.  -... .- -.- .. -. --.  -... .. ... -.-. ..- .. - ...  ..-. --- .-.  -- --- .-. .  - .... .- -.  .---- ----- -----  -.-- . .- .-. ..."
  );
});
