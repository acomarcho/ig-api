const bigint = require("big-integer");

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = lower.toUpperCase();
const numbers = "0123456789";
const ig_alphabet = upper + lower + numbers + "-_";
const bigint_alphabet = numbers + lower;

const shortcodeToID = (shortcode) => {
  const o = shortcode.replace(/\S/g, (m) => {
    const c = ig_alphabet.indexOf(m);
    const b = bigint_alphabet.charAt(c);
    return b != "" ? b : `<${c}>`;
  });
  return bigint(o, 64).toString(10);
};

module.exports = {
  shortcodeToID,
};
