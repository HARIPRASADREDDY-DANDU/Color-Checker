document.querySelector('.click').addEventListener('click',function () {
    const color = document.querySelector('.cl').value;

    if(color){
        document.querySelector('body').style.backgroundColor = document.querySelector('.cl').value;
    }
    
});

