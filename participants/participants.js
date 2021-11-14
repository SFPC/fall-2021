const sheetTSVUrl =  "https://docs.google.com/spreadsheets/d/1MNyUoUVDi_gPRhzC0s2wRVsRj7YlaZZYJ1Oh-5Ycv-I/edit#gid=1600347309"

loadSheetData(sheetTSVUrl, function(data){
  console.log(data)
  data.forEach(participant => {
    addParticipantDiv(participant)
  });
})

function addParticipantDiv(p){
  const sessionId = p["Session(s) attended"] ? "#" + p["Session(s) attended"].slice(0,3) : ""
  const pronouns = p["Your pronouns"] ? p["Your pronouns"].toLowerCase() : ""
  const photoId = p["Upload a photo of you to go with your bio : )"] ? p["Upload a photo of you to go with your bio : )"].split("=")[1] : ""
  console.log(photoId)
  const instagram = p.Instagram ? `<a href="${p.Instagram}" target="_blank">instagram</a> · ` : ""
  const twitter = p.Twitter ? `<a href="${p.Twitter}" target="_blank">twitter</a> · ` : ""
  const arena = p["Are.na"] ? `<a href="${p["Are.na"]}" target="_blank">are.na</a>` : ""
  const socials = instagram + twitter + arena
  const participantDiv = `
  <div class="session-info">
    <div class="description">
  <section>
    <div class="participantDiv">
  <h1><a href="${p.Website}" target="_blank">${p["Your first and last name"]}</a> (${pronouns})</h1>
<br><BR>
  <span class="bio" style="background-image: url('https://drive.google.com/uc?export=view&id=${photoId}')" role="img"></span>

  <p>${p["Please share your bio. In 150 words or less, introduce yourself. Invitation to talk about your practice, your history, and/or some of the things you are most interested in."]}<BR><BR>
${socials}
</p>
</div>
</section> </div></div>
  `
  console.log(participantDiv)
  console.log(sessionId)
  $(sessionId).append(participantDiv)
}
