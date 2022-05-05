let menu_icon=document.getElementById('menu1');
   let menu=document.getElementById('menu_div1');
   let list=document.getElementById('list1');
   let navbox=document.getElementById('nav1');

   let welcome=document.getElementById('welcome1');
  

   if(window.screen.availWidth<=900){
    menu_icon.style.display='block';
    list.style.display='none';
    navbox.style.backgroundColor='#fff';

    menu_icon.onclick=function(){
        if(menu.style.display=='none'){
            menu.style.display='block';
        } else {
            menu.style.display='none';
        }
    }

   }