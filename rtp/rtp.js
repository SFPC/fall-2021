let sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQsAMe9Y2vUPckn6dKZtmc4NvYroIaCd-QX1uVWmrQ3xbs3fW13OrhO2t9dcliX1E2wl10gFQSOY3pv/pub?gid=0&single=true&output=tsv"
loadSheetDataFieldsAsRows(sheetURL, function(data){
  fillPageContent(data)
})

function fillPageContent(program){
  $('#class').addClass(program.urlTitle)
  if(program.classImage) $('#programImg').attr('src', program.classImage).attr('alt', program.classImageAltText)
  $('.title').text(program.title)
  // $('#byline').html(`<span class="teacherName"></span><span class="TAName"></span>`)

  $('.teacherName').text(program.teacher)
  if(program.teacher2) $('.TAName').text(" with " + program.teacher2 )
  else $('.TAName').text("")
  if(program.byline) $('#byline').text(program.byline)
  $('#date').text(program.date)
  $('#time').text(program.time)
  $('#location').html(program.location)
  if(program.location.includes("In Person")){
      $('#section-covid, option[value="section-covid"]').show()
      $('#location').html($('#location').html() + ` · <a href="#section-covid" class="moreAbtCovid">Covid-19 Safety</a>`)
      $('#section-teachers').html($('#section-teachers').html().replace("organized", "supported"))
  }
  else{
      $('#section-covid, option[value="section-covid"]').hide()
  }
  $('.price').text("$"+program.price)
  $('.application-link').attr('href', program.applicationLink)
  $('.organizerLink').attr('href', program.organizerLink)
  $('.deadline').html(program.deadline)
  $('#descriptionText').html(program.description)
  if (program.expectations){
       hyphensToList(program.expectations, "#expectations")
  }
  else{
      $('#expectations').parent().hide()
      $('#allSections option[value="section-expectations"]')
  }
  if (program.syllabus){
       $('#syllabus').parent().show()
       hyphensToList(program.syllabus, "#syllabus")
  }
  else{
      $('#syllabus').parent().hide()
      $('#allSections option[value="section-syllabus"]')
  }
  addTeacher(program, "", "#teacher-list")
  if(program.teacher2) addTeacher(program, "2", "#teacher-list")
  if(program.teacher3) addTeacher(program, "3", "#teacher-list")
  if(program.teacher4) addTeacher(program, "4", "#teacher-list")
  if(program.teacher5) addTeacher(program, "5", "#teacher-list")
  if(program.teacher6) addTeacher(program, "6", "#teacher-list")
  $('#organizers').text(program.organizers)
  // $('#isThisForMe').text(program.isThisForMe)
  if (program.isThisForMe){
       $('#isThisForMe').parent().show()
       hyphensToList(program.isThisForMe, "#isThisForMe")
  }
  else{
      $('#isThisForMe').parent().hide()
      $('#allSections option[value="section-forme"]')
  }
  if (program.whatWillIGetFromThis){
      $('#whatWillIGetFromThis').parent().show()
      hyphensToList(program.whatWillIGetFromThis, "#whatWillIGetFromThis")
  }
  else $('#whatWillIGetFromThis').parent().hide()
  $('#whatWillIGetFromThis').text(program.whatWillIGetFromThis)
  $('#class').fadeIn()
  // $('#class')[0].scrollIntoView(true)
  // $('#footer').fadeIn()


}
