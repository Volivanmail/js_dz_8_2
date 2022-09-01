const card = document.querySelectorAll('.card');

function rotator(item) {
    let speed;
    const rotatorCase = item.querySelectorAll('.rotator__case');
    for (let i = 0; i < rotatorCase.length; i++) {
        let color = rotatorCase[i].dataset.color;
        if (rotatorCase[i].classList.contains('rotator__case_active')) {
            rotatorCase[i].classList.remove('rotator__case_active');
            let index;
            if (i == rotatorCase.length - 1) {
                i = 0;
            } else {
                i = i + 1;
            }
            speed = rotatorCase[i].dataset.speed;
            rotatorCase[i].style.color = color;
            rotatorCase[i].classList.add('rotator__case_active');
            return speed;
        }
    }
}

card.forEach((item) => {
    setTimeout(function run() {
        speed = rotator(item);
        setTimeout(run, speed);
    }, 1500);
})