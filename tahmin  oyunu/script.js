

let gsayılar=[];
let ssayılar=[];
let tahmin=[];
let sayac=0;
function ekle(){
   let s1=document.getElementById("s1").value;
   if (gsayılar.includes(s1)){
       alert("Lütfen Aynı Rakam 2. Defa Girmeyiniz.");
   }
   else if (sayac==4){
       alert("Sadece 4 Rakamla Oynanabilir.");
   }
   else if (s1==""){
       alert("Lütfen Rakam Giriniz");
   }
   else if (s1>20){
       alert("0 ile 20 Arasında Rakamlar Giriniz");
   }
   else{
       gsayılar.push(s1);
       sayac=sayac+1;
       document.getElementsByTagName("p")[0].innerHTML="Oynadığın Rakamlar: "+gsayılar;
   }
}

  function oyna(){
    for(let i=0; i<ssayılar.length; i++){
        ssayılar.splice(i);
    }
    if (sayac<4){
        alert("Lütfen 4 Adet Rakam Oynayınız.");
    } 
    else{
        for (let i=1; i<=4; i++){
            let random=Math.round(Math.random()*5);
            if (ssayılar.includes(random)){
                let random=Math.round(Math.random()*5);
               ssayılar.push(random);
               document.getElementsByTagName("p")[1].innerHTML="Şanslı Rakamlar: "+ssayılar;
            }
            else{
                ssayılar.push(random);
                document.getElementsByTagName("p")[1].innerHTML="Şanslı Rakamlar: "+ssayılar;
            }
        }
        for (let i=0; i<ssayılar.length; i++){
            if (gsayılar[i]==ssayılar[i]){
                  tahmin.push(ssayılar[i]);
                  document.getElementsByTagName("p")[2].innerHTML="Tahmin Edilen Rakamlar: "+tahmin;
            }
            else{
                console.log("yanlıs");
            }
        }
    }
  }

  function yeniden(){
      
      for(let i=0; i<gsayılar.length; i++){
           ssayılar.splice(i);
           gsayılar.splice(i);
           tahmin.splice(i);
          
      }
      sayac=0;
      document.getElementsByTagName("p")[0].innerHTML="Oynadığınız Rakamlar: ";
      document.getElementsByTagName("p")[1].innerHTML="Şanslı Rakamlar: ";
      document.getElementsByTagName("p")[2].innerHTML="Tahmin Edilen Rakamlar: ";
 
  }