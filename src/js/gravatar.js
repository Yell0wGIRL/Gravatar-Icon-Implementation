function getGravatar(email, size=80, d='pm', rating='g') {


  var mdEmail = CryptoJS.MD5(email)
  var url = "https://s.gravatar.com/avatar/"+mdEmail+"?s="+size+"&d="+d+"&r="+rating
  var pic = document.getElementById("profile-picture")
  pic.src = url
}
