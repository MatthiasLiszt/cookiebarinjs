
var boringLaw="some boring EU cookie law";
var u=new Date();
var cookieText="qookiebar="+u.getTime();

console.log(cookieText);

var qookie=document.getElementById('qookiebar');
var Accept="<button class='qookiebutton' onclick='(function(){document.cookie=\""+cookieText+"\"})();'>Accept</button>";
var MoreInfo="<button class='qookiebutton' onclick='alert(\""+boringLaw+"\")'>MoreInfo</button>";

qookie.innerHTML="This site contains cookies."+Accept+MoreInfo;
