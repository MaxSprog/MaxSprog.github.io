window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    var i = 1;
    body.childNodes.forEach(node => {
        // console.log(node);
        if(i == 3){
            console.log(node);
        }
        i += 1;
    });
});