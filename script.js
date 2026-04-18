let t = ['<img src="Rock.ico" alt="" width="80px">' , '<img src="Paper.ico" alt="" width="80px">' , '<img src="Scissors.ico" alt="" width="80px">']

function rand(){
   return Math.floor(Math.random()*(2-0+1)) + 0
}

document.querySelector('#btn3').onclick = function(){
    document.querySelector('.p1').innerHTML = '';
    document.querySelector('.text').innerHTML = '';
    let nm = rand();

    if(nm == 2){
        setTimeout(()=>{
            
            document.querySelector('.p1').innerHTML = `computer chose: <br> <br> ${t[nm]}`;
            document.querySelector('.text').innerHTML = 'you won!!!👏⭐';
            document.querySelector('.text').style.color='green';
        },500)
        
        
    }else if(nm == 0){
        setTimeout(()=>{
            
            document.querySelector('.p1').innerHTML = `computer chose: <br> <br> ${t[nm]}`;
            document.querySelector('.text').innerHTML = 'same!!!👍';
            document.querySelector('.text').style.color='orange';
        },500)
    }else{
        setTimeout(()=>{
            
            document.querySelector('.p1').innerHTML = `computer chose: <br> <br> ${t[nm]}`;
            document.querySelector('.text').innerHTML = 'you lost 😢';
            document.querySelector('.text').style.color='red';
        },500)
    }
}



document.querySelector('#btn1').onclick = function(){
    document.querySelector('.p1').innerHTML = '';
    document.querySelector('.text').innerHTML = '';
    let nm = rand();
    if(nm == 0){
        setTimeout(()=>{

            document.querySelector('.p1').innerHTML = `computer chose: <br> <br> ${t[nm]}`;
            document.querySelector('.text').innerHTML = 'you won!!!👏⭐';
            document.querySelector('.text').style.color='green';
        },500)
        
        
    }else if(nm == 1){
        setTimeout(()=>{
            
            document.querySelector('.p1').innerHTML = `computer chose: <br> <br> ${t[nm]}`;
            document.querySelector('.text').innerHTML = 'same!!!👍';
            document.querySelector('.text').style.color='orange';
        },500)
    }else{
        setTimeout(()=>{
            
            document.querySelector('.p1').innerHTML = `computer chose: <br> <br> ${t[nm]}`;
            document.querySelector('.text').innerHTML = 'you lost 😢';
            document.querySelector('.text').style.color='red';
        },500)
    }
}


    
    document.querySelector('#btn2').onclick = function(){
        document.querySelector('.p1').innerHTML = '';
    document.querySelector('.text').innerHTML = '';
    let nm = rand();
    if(nm == 1){
        setTimeout(
            ()=>{
        document.querySelector('.p1').innerHTML = `computer chose: <br> <br> ${t[nm]}`;
        document.querySelector('.text').innerHTML = 'you won!!!👏⭐';
        document.querySelector('.text').style.color='green';}
        
        ,500
    )
        
    }else if(nm == 2){
        setTimeout(
            ()=>{
        document.querySelector('.p1').innerHTML = `computer chose: <br> <br> ${t[nm]}`;
        document.querySelector('.text').innerHTML = 'same!!!👍';
        document.querySelector('.text').style.color='orange';}
    
    ,500)
    }else{
        setTimeout(
            ()=>{
        document.querySelector('.p1').innerHTML = `computer chose: <br> <br> ${t[nm]}`;
        document.querySelector('.text').innerHTML = 'you lost 😢';
        document.querySelector('.text').style.color='red';},500)
    }
}
