
   let smedia=document.getElementById('smedia');
   let ccreation=document.getElementById('ccreation');
   let photography=document.getElementById('photography');
   let writing=document.getElementById('writing');
   let seo=document.getElementById('seo');
   let smedia_content=document.getElementById('smedia_content');
   let ccreation_content=document.getElementById('ccreation_content');
   let photography_content=document.getElementById('photography_content');
   let writing_content=document.getElementById('writing_content');
   let seo_content=document.getElementById('seo_content');

   let menu_icon=document.getElementById('menu');
   let menu=document.getElementById('menu_div');
   let navthing=document.getElementById('navthing');
   let nav=document.getElementById('show');
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
        let ad=document.getElementById('ad');
        smedia.className='face_one_mobile';
        smedia_content.className='face_two_mobile';
        ad.scrollIntoView();
 }
 
     ccreation.onclick=function(){
         let cont=document.getElementById('cont');
         ccreation.className='face_one_mobile';
         ccreation_content.className='face_two_content';
         cont.scrollIntoView();
     }
    
     photography.onclick=function(){
         let bike=document.getElementById('bike');
         photography.className='face_one_mobile';
         photography_content.className='face_two_mobile';
         bike.scrollIntoView();
      
     }
 
     writing.onclick=function(){
         let book=document.getElementById('book');
         writing.className='face_one_mobile';
         writing_content.className='face_two_mobile';
         book.scrollIntoView();
     }
 
     seo.onclick=function(){
         let site=document.getElementById('site');
         seo.className='face_one_mobile';
         seo_content.className='face_two_mobile';
         site.scrollIntoView();
      
     }
 
} 


   