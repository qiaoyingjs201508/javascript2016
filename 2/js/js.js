/**
 * Created by myfir on 2015/12/27.
 */


(function(){
    var winH=document.documentElement.clientHeight;
    var inner=document.querySelector(".inner");
    var list =document.querySelectorAll('.inner>div');

    pagelist=[].slice.call(document.querySelectorAll('.inner>div'),0);

    var count=pagelist.length;
    var index=0;


    pageList.forEach(function (curItem) {
        curItem.style.height = winH + "px";
    });
    page.style.height = count * winH + "px";


    var body= document.body;
    $t.swipeup(body,{
        start:function(){
            this['changePos']=0;
            this['strTop']=parseFloat(inner.style.top);
        },
        move:function(){
            if(index>=)
            var changePos=this['endYswipeUp']-this['strYswipeUp'];
            inner.style.top=this['strTop']+changePos+'px'
        },
        end:function(){
            setTran(true);
            var changePos=this['changePos'];
            if(Math.abs(changePos)/winH>=0.25){
                index++;

            }else{
                inner.style.top=-index *winH+'px';
            }

        }
    })


    function  setTran(flag){
        if(flag){
            inner.
        }
    }



})()