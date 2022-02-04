const sheetTSVUrl =  "https://docs.google.com/spreadsheets/d/e/2PACX-1vS_gS_MyOn17RyyfkZEaMhDzm9ZK8smTy_bnkv9stYCKbXRJTATd8VqGvu5tSnAR651cLKkpqIIwAJN/pub?gid=1600347309&single=true&output=tsv"

loadSheetData(sheetTSVUrl, function(data){
  console.log(data)
  data.forEach(participant => {
    addParticipantDiv(participant)
  });
})

function addParticipantDiv(p){
  // const sessionId = "#RTP"
  const sessionId = p["Session(s) attended"] ? "#" + p["Session(s) attended"].slice(0,3) : ""
  // const sessionId = p["Session(s) attended"] ? "#" + p["Session(s) attended"].slice(0,3) : ""
  const pronouns = p["Pronouns"] ? p["Pronouns"].toLowerCase() : ""
  const photoId = p["Photo"] ? p["Photo"].split("=")[1] : ""
  console.log(photoId)
  const instagram = p.Instagram ? `<a href="${p.Instagram}" target="_blank">instagram</a> · ` : ""
  const twitter = p.Twitter ? `<a href="${p.Twitter}" target="_blank">twitter</a> · ` : ""
  const socials = instagram || twitter ? "/ " + instagram + twitter : ""
  const bio = p.Bio ? p.Bio : p.Learn
  const participantDiv = `


    <article id="section-participants" class="participantDiv">

  <span class="bio" style="background-image: url('https://drive.google.com/uc?export=view&id=${photoId}')" role="img"></span>

  <p><a href="${p.Website}" target="_blank">${p["Name"]}</a> (${pronouns}) · ${bio}
${socials} <BR><BR><BR>
</p>
</article>

  `
  console.log(participantDiv)
  console.log(sessionId)
  $(sessionId).append(participantDiv)
}
