//CV Download link create
function download_button_click() {
  let cvlink = document.createElement("a");
  cvlink.href = "cv.pdf";
  cvlink.download = "cv.pdf";
  cvlink.click();
  let Boutton = document.querySelector("button");
  Boutton.innerHTML = "CV Downloaded";
}
// Facebook logo Section
function facebook_logo_click(){
    let fb_link = document.createElement("a");
    fb_link.href = "https://www.facebook.com/tarikulislam3639";
    fb_link.click();
}
//Linkedin logo Section
function linkedin_logo_click(){
    let linkedin_link = document.createElement("a");
    linkedin_link.href = "https://www.linkedin.com/in/tarikul-islam-a439a0253/";
    linkedin_link.click();
}
//Twitter logo Section
function twitter_logo_click(){
    let twitter_link = document.createElement("a");
    twitter_link.href = "https://twitter.com/Tarikul3639";
    twitter_link.click();
}