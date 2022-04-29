
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
  

   if(window.screen.availWidth<=700){
    menu_icon.style.display='block';
    list.style.display='none';
    navbox.style.backgroundColor='#fff';
    head.style.alignItems='flex-endx'
   

    menu_icon.onclick=function(){
        if(menu.style.display=='none'){
            menu.style.display='block';
        } else {
            menu.style.display='none';
        }
    }
} 




   smedia.onclick=function(){
       let ad=document.getElementById('ad');
    if(smedia_content.style.display=='none'){
        smedia_content.style.display='block';
        ad.scrollIntoView();
   }
    else{
        smedia_content.style.display='none';
    };
}

    ccreation.onclick=function(){
        let cont=document.getElementById('cont');
        if(ccreation_content.style.display=='none'){
            ccreation_content.style.display='block';
            cont.scrollIntoView();
       }
        else{
            ccreation_content.style.display='none';
        };
    }
   
    photography.onclick=function(){
        let bike=document.getElementById('bike');
        if(photography_content.style.display=='none'){
            photography_content.style.display='block';
            bike.scrollIntoView();
       }
        else{
            photography_content.style.display='none';
        };
    }

    writing.onclick=function(){
        let book=document.getElementById('book');
        if(writing_content.style.display=='none'){
            writing_content.style.display='block';
            book.scrollIntoView();
       }
        else{
            writing_content.style.display='none';
        };
    }

    seo.onclick=function(){
        let site=document.getElementById('site');
        if(seo_content.style.display=='none'){
            seo_content.style.display='block';
            site.scrollIntoView();
       }
        else{
            seo_content.style.display='none';
        };
    }


    
console.log(window.screen.width)


 