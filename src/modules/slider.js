
function slider(){
    function maxImg(number){
        if(number > document.querySelectorAll('.img').length - 1)
        {
            return 0;
        }
        else if (number < 0){
            return document.querySelectorAll('.img').length - 1;
        }
        else{
            return number;
        }
    }
    let position = 0;
    function SliderNext(){
        position++;
        position = maxImg(position);
        const sliderIMG = document.querySelectorAll('.img');
        sliderIMG.forEach((item)=>{
            item.style.transform = '';
            item.style.transform =  `translateX(-${position * 100}vw)`;
        });
    }
    function SliderPrev(){
        position--;
        position = maxImg(position);
        const sliderIMG = document.querySelectorAll('.img');
        sliderIMG.forEach((item)=>{
            item.style.transform = '';
            item.style.transform =  `translateX(-${position * 100}vw)`;
        });
        
    }
    document.querySelector('.vector-2').addEventListener('click', ()=>{
        SliderNext(position);
        console.log(position);
    });
    document.querySelector('.vector-1').addEventListener('click', ()=>{
        SliderPrev(position);
        console.log(position);
    });    
}



export default slider;
