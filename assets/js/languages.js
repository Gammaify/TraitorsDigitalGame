$(document).ready(function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  var lang = urlParams.get("lang");

  if (lang == null) {
    lang = "en";
  }
  switch (lang) {
    case "en":
      $("#playerSelectTitle").text("Set Number of Players:");
      murderText = "Murder";
      banishmentText = "Banishment";
      quietNightText = "Quiet Night";
      NoMurderTonightText = "No Murder Tonight";
      voteAgainText = "Vote Again";
      break;
    case "de":
      $("#playerSelectTitle").text("Anzahl der Spieler festlegen:");
      murderText = "Mord";
      banishmentText = "Verbannung";
      quietNightText = "Ruhige Nacht";
      NoMurderTonightText = "Kein Mord heute Abend";
      voteAgainText = "nochmal wählen";
      break;
  }

  // eventNextBtn =
  //   "<object data='/assets/images/" + lang + "/Buttons/Next.svg'></object>";
  // eventReturnBtn =
  //   "<object data='/assets/images/" + lang + "/Buttons/Return.svg'></object>";
  murderDoneBtn =
    "<object data='/assets/images/" + lang + "/Buttons/Done.svg'></object>";
  murderDoneGreenBtn =
    "<object data='/assets/images/" +
    lang +
    "/Buttons/Done-Green.svg'></object>";

  $("#murderDoneBtn").attr(
    "data",
    "/assets/images/" + lang + "/Buttons/Done.svg"
  );
  $("#murderResetBtn").attr(
    "data",
    "/assets/images/" + lang + "/Buttons/Reset.svg"
  );
  $("#murderRevealBtn").attr(
    "data",
    "/assets/images/" + lang + "/Buttons/MurderReveal.svg"
  );
  $("#eventBtn").attr("data", "/assets/images/" + lang + "/Buttons/Event.svg");
  $("#finalBanishmentBtn").attr(
    "data",
    "/assets/images/" + lang + "/Buttons/Final-Banishment.svg"
  );
  // $("#returnBtn2").attr(
  //   "data",
  //   "/assets/images/" + lang + "/Buttons/Return2.svg"
  // );
  // $("#banishReturn2").attr(
  //   "data",
  //   "/assets/images/" + lang + "/Buttons/Return2.svg"
  // );
  $("#castVoteBtn").attr(
    "data",
    "/assets/images/" + lang + "/Buttons/CastVote.svg"
  );
  $("#revealVoteBtn").attr(
    "data",
    "/assets/images/" + lang + "/Buttons/RevealVote.svg"
  );
  $("#tiedVoteBtn").attr(
    "data",
    "/assets/images/" + lang + "/Buttons/TiedVote.svg"
  );
});
