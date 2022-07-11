// setInterval(function (){
//     const show = document.querySelector('span[data-show]');
//     var next = show.nextElementSibling || document.querySelector('span:first-child');
//     const up = document.querySelector('span[data-up]');

//     if(up){
//         up.removeAttribute('data-up');
//     }
//     if(next == null){
//         next= document.querySelector('span:first-child');
//     }
//     show.removeAttribute('data-show');
//     show.setAttribute('data-up', '')

//     next.setAttribute('data-show', '');
//     console.log('rodou');
// }, 2000)

setInterval(function () {
    const html = 'Html', css = 'CSS', sass = 'SASS', js = 'Java script', react = 'ReactJs';
    const span = document.querySelector('span[data-show]');

    switch (span.innerText) {
        case html:
            span.innerText = css;
            break;
        case css:
            span.innerText = sass;
            break;
        case sass:
            span.innerText = js;
            break;
        case js:
            span.innerText = react;
            break;
        case react:
            span.innerText = html;
            break;
    }
}, 2000)