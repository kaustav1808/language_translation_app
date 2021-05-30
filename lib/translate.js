const axios = require("axios");

let translate = async function (source, target, text) {
  let data = await axios.post(
    "https://translate.google.com/translate_a/single" +
      "?client=at&dt=t&dt=ld&dt=qca&dt=rm&dt=bd&dj=1&hl=" +
      target +
      "&ie=UTF-8" +
      "&oe=UTF-8&inputm=2&otf=2&iid=1dd3b944-fa62-4b55-b330-74909a99969e",
    {
      sl: source,
      tl: target,
      q: text,
    }
  );
  return data
};

module.exports = {translate};
