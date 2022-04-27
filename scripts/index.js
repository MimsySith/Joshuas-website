
   let smedia=document.getElementById('smedia');
   let ccreation=document.getElementById('ccreation');
   let photography=document.getElementById('photography');
   let writing=document.getElementById('writing');
   let seo=document.getElementById('seo');
   
   smedia.onclick=function(){
       let smedia_content=document.getElementById('smedia_content');
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
        let ccreation_content=document.getElementById('ccreation_content');
        if(ccreation_content.style.display=='none'){
            ccreation_content.style.display='block';
       }
        else{
            ccreation_content.style.display='none';
        };
    }
   
    photography.onclick=function(){
        let photography_content=document.getElementById('photography_content');
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
        let writing_content=document.getElementById('writing_content');
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
        let seo_content=document.getElementById('seo_content');
        let site=document.getElementById('site');
        if(seo_content.style.display=='none'){
            seo_content.style.display='block';
            site.scrollIntoView();
       }
        else{
            seo_content.style.display='none';
        };
    }
   
