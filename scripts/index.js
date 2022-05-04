
   let smedia=document.getElementById('smedia');
   let ccreation=document.getElementById('ccreation');
   let photography=document.getElementById('photography');
   let writing=document.getElementById('writing');
   //let seo=document.getElementById('seo');
   let smedia_content=document.getElementById('smedia_content');
   let ccreation_content=document.getElementById('ccreation_content');
   let photography_content=document.getElementById('photography_content');
   let writing_content=document.getElementById('writing_content');
   //let seo_content=document.getElementById('seo_content');

   let menu_icon=document.getElementById('menu');
   let menu=document.getElementById('menu_div');
   //let navthing=document.getElementById('navthing');
   //let nav=document.getElementById('show');
   let list=document.getElementById('list');
   let navbox=document.getElementById('nav');
   let head=document.getElementById('head');
   let welcome=document.getElementById('welcome');
  

   if(window.screen.availWidth<=800){
    menu_icon.style.display='block';
    list.style.display='none';
    navbox.style.backgroundColor='#fff';
    head.style.alignItems='flex-end'

    

    menu_icon.onclick=function(){
        if(menu.style.display=='none'){
            menu.style.display='block';
        } else {
            menu.style.display='none';
        }
    }

    smedia.onclick=function(){
        if(smedia_content.style.transform.translateY==-110){
            smedia_content.style.transform.translateY=200
        } else {
            smedia_content.style.transform.translateY=-110
        }
        
 }
 
     ccreation.onclick=function(){
        if (ccreation_content.style.transform.translateY==-110){
            ccreation_content.style.transform.translateY=200
        } else {
            ccreation_content.style.transform.translateY=-110
        }
     }
    
     photography.onclick=function(){
         if(photography_content.style.transform.translateY==-110){
             photography_content.style.transform.translateY=200
         } else {
            photography_content.style.transform.translateY=-110
         }
     }
 
     writing.onclick=function(){
         if(writing_content.style.transform.translateY==-100){
             writing_content.style.transform.translateY=200
         } else {
             writing_content.style.transform.translateY=-110
         }
       
     }
 
  /*   seo.onclick=function(){
         let site=document.getElementById('site');
         if(seo_content.style.transformY==-100){
            seo_content.style.transform.translateY=200
         } else {
             seo_content.className='face_two_mobile_2'
         }
    }
       */
      
}
 



   