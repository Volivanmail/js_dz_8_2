const card = document.querySelectorAll('.card');

let speed = 1000;
function rotator() {
    card.forEach((item) => {
        const rotatorCase = item.querySelectorAll('.rotator__case');
        for (let i = 0; i < rotatorCase.length; i++) {
            let speed = rotatorCase[i].dataset.speed;
            let color = rotatorCase[i].dataset.color;
            rotatorCase[i].style.color = color;
            if (rotatorCase[i].classList.contains('rotator__case_active')) {
                rotatorCase[i].classList.remove('rotator__case_active');
                if (i == rotatorCase.length - 1) {
                    rotatorCase[0].classList.add('rotator__case_active');
                    return speed;
                } else {
                    rotatorCase[i+1].classList.add('rotator__case_active');
                    return speed;
                }
            }
        }
    })
}
setInterval(rotator, speed);