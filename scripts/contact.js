let menu_icon=document.getElementById('menu');
   let menu=document.getElementById('menu_div');
   let list=document.getElementById('list');
   let navbox=document.getElementById('nav');
   let head=document.getElementById('head');
   let welcome=document.getElementById('welcome');
  

   if(window.screen.availWidth<=800){
    menu_icon.style.display='block';s
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

}