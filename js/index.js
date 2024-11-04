const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Stocks";
    }, 0);

    setTimeout(() => {
        text.textContent = "Mutual Funds";
    }, 4000);

    setTimeout(() => {
        text.textContent = "Future & Option";
    }, 8000);
    setTimeout(() => {
        text.textContent = "US Stocks";
    }, 12000);

}
textLoad();
setInterval(textLoad,16000);



