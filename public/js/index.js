$(document).ready(function () {
  $("#message").html("Hi kaustav!");
  let language = {
    Amharic: "am",
    Arabic: "ar",
    Basque: "eu",
    Bengali: "bn",
    "English (UK)": "en-GB",
    "Portuguese (Brazil)": "pt-BR",
    Bulgarian: "bg",
    Catalan: "ca",
    Cherokee: "chr",
    Croatian: "hr",
    Czech: "cs",
    Danish: "da",
    Dutch: "nl",
    "English (US)": "en",
    Estonian: "et",
    Filipino: "fil",
    Finnish: "fi",
    French: "fr",
    German: "de",
    Greek: "el",
    Gujarati: "gu",
    Hebrew: "iw",
    Hindi: "hi",
    Hungarian: "hu",
    Icelandic: "is",
    Indonesian: "id",
    Italian: "it",
    Japanese: "ja",
    Kannada: "kn",
    Korean: "ko",
    Latvian: "lv",
    Lithuanian: "lt",
    Malay: "ms",
    Malayalam: "ml",
    Marathi: "mr",
    Norwegian: "no",
    Polish: "pl",
    "Portuguese (Portugal)": "pt-PT",
    Romanian: "ro",
    Russian: "ru",
    Serbian: "sr",
    "Chinese (PRC)": "zh-CN",
    Slovak: "sk",
    Slovenian: "sl",
    Spanish: "es",
    Swahili: "sw",
    Swedish: "sv",
    Tamil: "ta",
    Telugu: "te",
    Thai: "th",
    "Chinese (Taiwan)": "zh-TW",
    Turkish: "tr",
    Urdu: "ur",
    Ukrainian: "uk",
    Vietnamese: "vi",
    Welsh: "cy",
  };

  $.each(language, function (key, value) {
    $("#source_language").append(
      "<option id='source_" +
        value +
        "' value=" +
        value +
        ">" +
        key +
        "</option>"
    );
  });

  $.each(language, function (key, value) {
    $("#target_language").append(
      "<option id='target_" +
        value +
        "' value=" +
        value +
        ">" +
        key +
        "</option>"
    );
  });

  $("#source_language").val("en");

  $("#submit").click(function () {
    if (!$("#text").val()) {
      alert("please add some text");
      return false;
    }
    if (!$("#source_language").val()) {
      alert("please select a source language");
      return false;
    }
    if (!$("#target_language").val()) {
      alert("please select a target language");
      return false;
    }

    $.ajax({
      method: "POST",
      url: "/translate",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({
        sl: $("#source_language").val(),
        tl: $("#target_language").val(),
        q: $("#text").val(),
      }),
    }).done(function (data) {
      console.log(data);
    });
  });
});
