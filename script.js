window.addEventListener('DOMContentLoaded', ()=>{
    // fetch('058 db.json', {
    //     method: 'POST',
    //     headers: {'Content-type': 'aplication/json'},
    //     body: '......'
    // })
    // .then(data => console.log(data))
    // .catch(data => console.log('error'));

/*-----------------------------------------Механика бургера------------------------------------------------------------*/
    const burgers = document.querySelectorAll('.burger');
    burgers.forEach(item=>{
        item.addEventListener('click', (e)=>{
            item.parentElement.classList.add('burger_active');
            console.log('ddwe');
        });
    });
    burgers.forEach(item=>{
        item.parentElement.addEventListener('click', (e)=>{
            if(e.target && e.target == item.parentElement && item.parentElement.classList.contains('burger_active')){
                item.parentElement.classList.remove('burger_active');
            }
        });
    });

/*-----------------------------------------Заполнение хедера------------------------------------------------------------*/ 

    const headerItem = document.querySelector('.header__nav');
    const headerBurger = document.querySelector('.header__burger_content');
 
    function headerFill(content){
        let elem = document.createElement('li');
        elem.classList.add('header__nav_item');
        elem.classList.add('_btn');
        elem.textContent = content;
        let elem1 = document.createElement('li');
        elem1.classList.add('header__nav_item');
        elem1.classList.add('_btn');
        elem1.textContent = content;
        headerItem.append(elem1);
        headerBurger.append(elem);
    }
    // headerContent.forEach((item)=>{
    //     headerFill(item);
    // });

 /*-----------------------------------------Заполнение сайдбара------------------------------------------------------------*/

    const sidebarItem = document.querySelector('.sidebar__nav');
    const sidebarBurger = document.querySelectorAll('.burger__content');


    function sidebarFill(content){
        let elem = document.createElement('li');
        elem.classList.add('sidebar__nav_item');
        elem.classList.add('_btn');
        elem.textContent = content;
        let elem1 = document.createElement('li');
        elem1.classList.add('sidebar__nav_item');
        elem1.classList.add('_btn');
        elem1.textContent = content;
        let elem2 = document.createElement('li');
        elem2.classList.add('sidebar__nav_item');
        elem2.classList.add('_btn');
        elem2.textContent = content;
        sidebarItem.append(elem1);
        sidebarBurger[0].append(elem);
        sidebarBurger[1].append(elem2);
    }
    // sliderContent.forEach((item)=>{
    //     sidebarFill(item);
    // });
    

    /*--------------------------------------галлерея------------------------------------------------*/

    /*----------------------------------------запрос-------------------------------------------- */
    let dataFrom = 0;

    fetch('db.json', {
        method: 'GET',
        headers: {
            'Content-type': 'aplication/json'
        }
    }).then(data=> data.json())
    .then(data=> {
        dataFrom = data;
        data.slider.forEach((item)=>{
            sidebarFill(item);
        });
        data.header.forEach((item)=>{
            headerFill(item);
        })
        const slider = document.querySelector('.galary__slider');
        data.gridimg.forEach((item)=>{
            let imgContainer = document.createElement('div');
            imgContainer.classList.add('img');
            imgContainer.innerHTML = `<img src=${item} alt="">`;
            slider.append(imgContainer);
        });

    });

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

    
});