// ------------------------------------------------------------------------------------------------------
// navigator.geolocation  يستخدم لتحقق إن كان متصفح وجهاز مستخدم يدعم خاصية تحديد مواقع              
// navigator.geolocation.getCurrentPosition()يستخدم لطلب صلاحية وصول إلى موقع من المستخدم
//                                            ولحصول على معلومات متعلقة بالموقع المستخدم
// ------------------------------------------------------------------------------------------------------
// navigator.geolocation.watchPosition() يستخدم للحصول على موقع مستخدم ويتم تحديث موقع بالاستمرار                                         
// ------------------------------------------------------------------------------------------------------
// navigator.geolocation.clearWatch(id); يستخدم لإيقاف تتبع مستخدم | ايقاف عرض موقع مستخدم بشكل مباشر
// ------------------------------------------------------------------------------------------------------
// https://www.openstreetmap.org/export/embed.html?bbox=,&;layer=mapnik
if(localStorage.getItem("longitude") != null && localStorage.getItem("latitude") != null)
{
    document.getElementById("map").innerHTML=
    `          <iframe style="margin: auto;"   id="if_map"  height="300" width="500"  src='https://www.openstreetmap.org/export/embed.html?bbox=${localStorage.getItem("longitude")},${localStorage.getItem("latitude")}&;layer=mapnik'> </iframe>  `
  
    test= document.getElementById("alert").innerHTML=`<div dir="rlt" class="alert alert-info" role="alert">
             يتم عرض الخريطة
         </div>`;
} 
var islive=false;
var sharelocation;
var acceslocaiton;
document.getElementById("to_set_locating").onclick = ()=>{

   
 if(islive === false ){
    sharelocation = navigator.geolocation.watchPosition(
      
        function(posation){
            acceslocaiton= true;
           var test= document.getElementById("alert").innerHTML=`<div dir="rlt" class="alert alert-info" role="alert">
             يتم عرض الخريطة
         </div>`;
         document.getElementById("to_set_locating").innerHTML = " OFF set Locating"
    document.getElementById("map").style.display="block"
   islive= true;
    acceslocaiton= false;
            document.getElementById("map").innerHTML=
            `          <iframe style="margin: auto;"   id="if_map"  height="300" width="500"  src='https://www.openstreetmap.org/export/embed.html?bbox=${posation.coords.longitude},${posation.coords.latitude}&;layer=mapnik'> </iframe>  `
         console.log(posation)
         localStorage.setItem("longitude",posation.coords.longitude)
         localStorage.setItem("latitude",posation.coords.latitude)

    },

    function(error){
        switch(error.code){
            case error.PERMISSION_DENIED:
                document.getElementById("alert").innerHTML= `<div dir="rtl" class="alert alert-danger" role="alert">
                المستخدم قام برفض صلاحية وصول للموقع
                </div>`
            break;
            case error.UNKNOWN_ERROR:
                document.getElementById("alert").innerHTML=
                `<div dir="rtl" class="alert alert-danger" role="alert">
                "  خطاء غير معروف"
                </div>`
            break;
        }
     }
 )
//     document.getElementById("alert").innerHTML=`<div dir="rlt" class="alert alert-info" role="alert">
//     يتم عرض الخريطة
//   </div>`;
//     document.getElementById("to_set_locating").innerHTML = " OFF set Locating"
//     document.getElementById("map").style.display="block"
//     islive= true;
//     acceslocaiton= false;

} else if(islive === true && acceslocaiton=== false){

     document.getElementById("alert").innerHTML=`<div dir="rlt" class="alert alert-dark" role="alert">
      تم ايقاف العرض و شكراّ 
     </div>`;
    document.getElementById("to_set_locating").innerHTML = " To set Locating"
    navigator.geolocation.clearWatch(sharelocation);
    document.getElementById("map").style.display="none"
    islive= false;
    acceslocaiton= true;
}
}












// انواع اخطاء الذي يمكن ان يحدث عند محاولة حصول على عنوان 
// switch(error.code) {
//     case error.PERMISSION_DENIED:
//       error = "User denied the request for Geolocation. اذا مستخدم رفض صلاحية وصول للموقع"
//       break;
//     case error.POSITION_UNAVAILABLE:
//      error = "Location information is unavailable. معلومات موقع غير متوفرة"
//       break;
//     case error.TIMEOUT:
//       error = "The request to get user location timed out.إذا لم يتمكن من حصول على موقع مستخدم"
//       break;
//     case error.UNKNOWN_ERROR:
//       error = "An unknown error occurred. إذا حدث خطا غير معروف"
//       break;
//   }