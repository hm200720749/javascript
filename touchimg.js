/**
 * Created by Administrator on 2017/3/29 0029.
 */
function touchimg(options){
    var elem=document.getElementById(options.elem);
    var temp_img=elem.innerHTML;
    //创建遮罩
    var wrap=document.createElement("div");
    wrap.style.overflow="hidden";
    wrap.style.position="relative";
    wrap.innerHTML=temp_img;
    elem.innerHTML="";
    elem.appendChild(wrap);
    //console.log(elem.innerHTML)
    var elem_ig_ul=elem.getElementsByClassName("img-ground")[0];
    var elem_ig_li=elem_ig_ul.getElementsByTagName("li");
    if(elem=="undefined"||elem_ig_li=="undefined") return;
    var elem_width=elem.clientWidth;
    var img_length=elem_ig_li.length;
    //ul 样式设置
    elem_ig_ul.style.width=elem_width*img_length+"px";
    elem_ig_ul.style.overflow="hidden";
    elem_ig_ul.style.position="relative";
    elem_ig_ul.style.transform="translate(0,0)";
    elem_ig_ul.style.transition="all 0.5s";
    //li 样式设置;
    for(var i=0;i<img_length;i++){
        elem_ig_li[i].style.float="left";
        elem_ig_li[i].style.width=elem_width+"px";
    }

   function loop_a(){
       var j=0;
       function loop_b(){
           console.log(j);
           if(j<img_length){
               j++;
           }else{
               j=0;
           }
           //setTimeout(loop_b,1000);
       }
       //console.log(j)
       return loop_b;
   }
    var loop=loop_a();
    loop();

    //console.log(img_length)
}