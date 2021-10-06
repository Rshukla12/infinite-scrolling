let count = 0;

function generateItems(){
    const container = document.getElementById("container");
    for ( let i = 0; i < 25; i++ ){
        const div = document.createElement("div");
        div.innerText = "Masai Student " + ++count;
        container.append(div);
    }
}

function handleScroll(){
    const container = document.getElementById("container");
    if ( container.scrollTop + container.clientHeight >= ( 80/100 ) * container.scrollHeight ){
        generateItems();
    }    
}


function throttler(){
    let oldTime = 0;
    return ()=> {
        let id;
        const currentTime = new Date();
        if ( currentTime - oldTime > 100 ){
            let id;
            oldTime = currentTime;
            id = setTimeout( handleScroll(), 0 );
        }
    }
}


window.addEventListener("load", () => {
    const cont = document.getElementById("container");
    generateItems();
    cont.onscroll = throttler();
})