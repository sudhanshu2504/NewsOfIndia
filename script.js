function f(){
    var d = new Date().toDateString();
    date.innerHTML = " Date : " + d;
    var d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    time.innerHTML =  `Time :  ${h%12} :  ${m} :  ${s} `;
}
setInterval(f,10)

