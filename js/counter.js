document.addEventListener('DOMContentLoaded', function () {
    const counterKey = 'visitor-counter-demo';
    let count = localStorage.getItem(counterKey);
    if (!count) count = 1;
    else count = parseInt(count) + 1;
    localStorage.setItem(counterKey, count);

    const counterDiv = document.getElementById('visitor-counter');
    if (counterDiv) {
        counterDiv.innerHTML = `おめでとうございます！<br>あなたは${count}番目の訪問者です！`;
    }
});

    // localStorage.setItem('visitor-counter-demo', 0);
    //リセットのやつ↑

