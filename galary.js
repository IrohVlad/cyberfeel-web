window.addEventListener('DOMContentLoaded', ()=>{
    class Galary {
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
                img.innerHTML = `<img src=${imgs[i]} alt="">`;
                column[columnIndex].append(img);
                columnIndex++;
            }
        }
        Crop(){
            const column = document.querySelectorAll('.gallary__grid-item');
            console.log(column);
            let minHeight = 0; 
            let heightDiff = [];
            column.forEach(item =>{
                let now = 0;
                Array.from(item.children).forEach((img, i, arr)=>{
                    now += img.clientHeight;

                });
                heightDiff.push(now);
                console.log(now);
                if(minHeight > now || minHeight == 0){
                    minHeight = now;
                    now = 0;
                }
            });
            heightDiff = heightDiff.map((item)=> item - minHeight);
            console.log(heightDiff);
            column.forEach((item, id)=>{
                Array.from(item.children).forEach((ite, i, arr)=>{
                    ite.style.maxHeight = `${ite.clientHeight - (heightDiff[id]/arr.length)}px`;
                });
            });
        }
    }

    const setGalary = async (g, bd)=>{
        await g.Add(bd);
        setTimeout(()=>{g.Crop()}, 400);
    }

    fetch('db.json', {
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
    window.addEventListener('resize', ()=>{
        
        fetch('db.json', {
            method: 'GET',
            headers: {
                'Content-type': 'aplication/json'
            }
        }).then(data=> data.json())
        .then (data=> {
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
            else if(document.documentElement.clientWidth < 550){
                document.getElementById('galary').innerHTML = '';
                const z = new Galary(document.getElementById('galary'), 2);
                setGalary(z, data.gridimg);
            }
        });
        
    });
});