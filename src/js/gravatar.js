function getGravatar(email, size=80, d='pm', rating='g') {
  //var s = document.createElement('script')
  //s.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"
  //document.append(s)
  
  var mdEmail = CryptoJS.MD5(email)
  var url = "https://s.gravatar.com/avatar/"+mdEmail+"?s="+size+"&d="+d+"&r="+rating
  var pic = document.getElementById("profile-picture")
  pic.src = url
}
