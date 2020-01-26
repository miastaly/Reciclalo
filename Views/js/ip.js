var getBrowserInfo = function() {
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|Chrome|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    if(M[0]==='Chrome'){
        M[0]="Google ".concat(M[0])
    }
    switch (M[0]) {
        case 'Chrome':
        M[0]="Google ".concat(M[0])
            break;
    case 'firefox':
    M[0]="Mozilla Firefox"
    break;
        default:
            break;
    }
    return M.join(' ');
};
var navegador=getBrowserInfo();
var procedencia='';
if (document.referrer!=='') {
    procedencia=document.referrer
}else{
    procedencia='entrada directa'
}
var dia=new Date();
var obj_fecha=dia.getDate()+"/"+dia.getMonth()+"/"+dia.getFullYear()
var obj_hora=dia.getHours()+":"+dia.getMinutes()+":"+dia.getSeconds()
dia=obj_fecha.concat(" "+obj_hora)
$(document).ready(function() {
    $.post("../modelos/User/Controller/UserController.php",{Usr_Navegador:navegador,Usr_Procedencia:procedencia,Usr_Fecha:dia},function (data) {
       alert(data)
    },"json")
})