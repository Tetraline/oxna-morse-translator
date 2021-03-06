import dictionary from "./dictionary.js";

export const UTFChar = (string) => {
  const pattern = /[a-z]|[0-9]| /;
  if (pattern.test(string[0])) {
    let output = [];
    output[0] = dictionary[string[0]];
    output[1] = string.substring(1);
    return output;
  } else {
    return ["", string];
  }
};

export const someUTFChar = (string) => {
  let output = ["", string];
  let parseChar = UTFChar(output[1]);
  while (parseChar[0]) {
    output[0] += parseChar[0];
    if (parseChar[0] != " ") {
      output[0] += " "; // There should be spaces after each letter that is not a space itself
    }
    output[1] = parseChar[1];
    parseChar = UTFChar(output[1]);
  }
  output[0] = output[0].slice(0, -1); // Remove the trailing space
  return output;
};

export const translate = (string) => {
  let output = someUTFChar(string);
  if (output[1]) {
    console.error(`Unable to parse ${output[1]}`);
  }
  return output[0];
};
