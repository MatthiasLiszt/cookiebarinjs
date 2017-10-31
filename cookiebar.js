
var boringLaw="some boring EU cookie law";
var u=new Date();
var cookieName="qookiebar=";
var cookieText=cookieName+u.getTime();

console.log(cookieText);

var qookie=document.getElementById('qookiebar');
var Accept="<button class='qookiebutton' onclick='(function(){document.cookie=\""+cookieText+"\";document.getElementById(\"qookiebar\").style.display=\"none\";})();'>Accept</button>";
var MoreInfo="<button class='qookiebutton' onclick='alert(\""+boringLaw+"\")'>MoreInfo</button>";

console.log("cookie found at "+document.cookie.indexOf(cookieName));
if(document.cookie.indexOf(cookieName)<0)
 {qookie.innerHTML="This site contains cookies."+Accept+MoreInfo;
  qookiefocus();
 }  
else
 {qookie.style.display="none";} 

function qookiefocus(){
 var qookie=document.getElementById('qookiebar').focus();
 console.log('qookiebar focused');
}
