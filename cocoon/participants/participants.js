const sheetTSVUrl =  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRX0FWIxa_uzDiD4cbNkV41iHnXFcpcM_Y11VIj5REtpgbwXEld_zd1BvdFoMV-8aM-rWM8sGbtRAUt/pub?gid=1600347309&single=true&output=tsv"

loadSheetData(sheetTSVUrl, function(data){
  console.log(data)
  data.forEach(participant => {
    addParticipantDiv(participant)
  });
})

function addParticipantDiv(p){
  const sessionId = p.session ? "#" + p.session.slice(0,3) : ""
  const photoId = p.photo ? p.photo.split("=")[1] : ""
  const instagram = p.instagram ? `<a href="${p.instagram}" target="_blank">instagram</a> // ` : ""
  const twitter = p.twitter ? `<a href="${p.twitter}" target="_blank">twitter</a> // ` : ""
  const arena = p.arena ? `<a href="${p.arena}" target="_blank">are.na</a> //` : ""
  const socials = instagram + twitter + arena
  const participantDiv = `
  <div class="participantDiv">
  <h1><a href="${p.website}" target="_blank">${p.name}</a> (${p.pronouns.toLowerCase()})</h1>
  <h4>// ${socials}</h4>
  <img src="https://drive.google.com/thumbnail?id=${photoId}" />
  <p>${p.bio}</p>
  </div>
  `
  $(sessionId).append(participantDiv)
}

