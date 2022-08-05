function galary(){
    let galaryItem;
    class Galary { //класс сазмещения и выравнивания сетки картинок
        constructor(galary, col){
            this.galary = galary,
            this.columnCount = col,
            this.columns = [];
            for(let i = 0; i< this.columnCount; i++){
                let column = document.createElement('div');
                column.classList.add('gallary__grid-item');
                galary.append(column);
            }
        }
        Log(){
            console.log(this.columns);
        }
        
        Add(imgs){
            const column = document.querySelectorAll('.gallary__grid-item');
            let columnIndex = 0;
            for(let i = 0; i < imgs.length; i++){
                if(columnIndex > this.columnCount-1){
                    columnIndex = 0;
                }
                let img = document.createElement('div');
                img.classList.add('grid-item');
                img.innerHTML = `<img class="grid-img" index=${i} src=${imgs[i].src} alt="">`;
                column[columnIndex].append(img);
                columnIndex++;
            }
        }
        Crop(){
            const column = document.querySelectorAll('.gallary__grid-item');
            let minHeight = 0; 
            let heightDiff = [];
            column.forEach(item =>{
                let now = 0;
                Array.from(item.children).forEach((img, i, arr)=>{
                    
                    now += img.clientHeight;
                });
                if (item.children.length > column[column.length - 1].children.length){
                    now += 10;
                }
                heightDiff.push(now);
                if(minHeight > now || minHeight == 0){
                    minHeight = now;
                    now = 0;
                }
            });
            heightDiff = heightDiff.map((item)=> item - minHeight);
            column.forEach((item, id)=>{
                Array.from(item.children).forEach((ite, i, arr)=>{
                    ite.style.maxHeight = `${ite.clientHeight - (heightDiff[id]/arr.length)}px`;
                });
            });
        }
    }

    function GoToImg(){ //переход по клику на картинку
        Array.from(document.querySelector('.gallary__grid').children).forEach((item)=>{
            item.addEventListener('click', (e)=>{
                const target = e.target;
                if (target && target.classList.contains('grid-img')){
                    console.log(target);
                    let index = target.getAttribute('index');
                    document.querySelectorAll('.img').forEach((item)=>{
                        item.style.transform = '';
                        item.style.transform =  `translateX(-${index * 100}vw)`;
                    });
                }
            });
        });
    };

    const setGalary = async (g, bd)=>{ //функция всей работы с картинками
        await g.Add(bd);
        let waitImg =  setInterval(()=>{
            let imgLoad = 0
            document.querySelectorAll('.grid-item').forEach((item)=>{
                if(item.clientHeight != 0){
                    imgLoad++;
                }
            });
            if(imgLoad == document.querySelectorAll('.grid-item').length){
                g.Crop();
                clearTimeout(waitImg);
            }
        }, 50)
        // await g.Crop();
        GoToImg();
    }
    let imgData = [];
    async function getImgFromDB(){
        await fetch('db.json', { // размещение картинок при загрузке страницы
            method: 'GET',
            headers: {
                'Content-type': 'aplication/json'
            }
        }).then(data=> data.json())
        .then(data=> {
            if (document.documentElement.clientWidth > 1000){
                document.getElementById('galary').innerHTML = '';
                const x = new Galary(document.getElementById('galary'), 6);
                setGalary(x, data.gridimg);
            }
            else if(document.documentElement.clientWidth < 1000 && document.documentElement.clientWidth > 550){
                document.getElementById('galary').innerHTML = '';
                const y = new Galary(document.getElementById('galary'), 4);
                setGalary(y, data.gridimg);
            }
            else if(document.documentElement.clientWidth < 500){
                document.getElementById('galary').innerHTML = '';
                const z = new Galary(document.getElementById('galary'), 2);
                setGalary(z, data.gridimg);
            }
        });
        galaryItem = document.querySelectorAll('.img img');
        console.log(galaryItem);
        galaryItem.forEach((item)=>{
            imgData.push({
            src: item.getAttribute('src')
            // title: item.getAttribute('title')
            });
        }, 0);   
        console.log(imgData);
    }
    getImgFromDB();
    


    
    window.addEventListener('resize', ()=>{ //переразмещение при масштабировании страницы
        
    //     fetch('db.json', {
    //         method: 'GET',
    //         headers: {
    //             'Content-type': 'aplication/json'
    //         }
    //     }).then(data=> data.json())
    //     .then (data=> {
    //         if (document.documentElement.clientWidth > 1000){
    //             document.getElementById('galary').innerHTML = '';
    //             const x = new Galary(document.getElementById('galary'), 6);
    //             setGalary(x, data.gridimg);
                
    //         }
    //         else if(document.documentElement.clientWidth < 1000 && document.documentElement.clientWidth > 550){
    //             document.getElementById('galary').innerHTML = '';
    //             const y = new Galary(document.getElementById('galary'), 4);
    //             setGalary(y, data.gridimg);
                
    //         }
    //         else if(document.documentElement.clientWidth < 550){
    //             document.getElementById('galary').innerHTML = '';
    //             const z = new Galary(document.getElementById('galary'), 2);
    //             setGalary(z, data.gridimg);
                
    //         }
    //     });
    if (document.documentElement.clientWidth > 1000){
        document.getElementById('galary').innerHTML = '';
        const x = new Galary(document.getElementById('galary'), 6);
        setGalary(x, imgData);
        
    }
    else if(document.documentElement.clientWidth < 1000 && document.documentElement.clientWidth > 550){
        document.getElementById('galary').innerHTML = '';
        const y = new Galary(document.getElementById('galary'), 4);
        setGalary(y, imgData);
        
    }
    else if(document.documentElement.clientWidth < 550){
        document.getElementById('galary').innerHTML = '';
        const z = new Galary(document.getElementById('galary'), 2);
        setGalary(z, imgData);
        
    }
    });
    
}

export default galary;