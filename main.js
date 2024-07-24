const bg = document.querySelector('.bg');
const p = document.querySelector('.loading')

const count = setInterval(blurry , 30);
let load = 0;

function blurry(){
    load++;
    if(load > 99){
        clearInterval(count);
    }
    p.innerHTML = `${load}%`;
    p.style.opacity = scale(load ,0 ,100 ,1 , 0)
    bg.style.filter = `blur(${scale(load ,0 ,100 ,30 , 0)}px)`
}

function scale(num , in_min ,in_max , out_min ,out_max) {
   return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}
