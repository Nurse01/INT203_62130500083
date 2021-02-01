let indexOfImg;
const mainPic = document.getElementById("mainpic");
const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const pic5 = document.getElementById("pic5");
const pic6 = document.getElementById("pic6");
const srcElem = document.createAttribute("src");


function clickpic(indexOfImg) {
    pic1.style.setProperty('--border-color', "var(--non-pic-border)");
    pic2.style.setProperty('--border-color', "var(--non-pic-border)");
    pic3.style.setProperty('--border-color', "var(--non-pic-border)");
    pic4.style.setProperty('--border-color', "var(--non-pic-border)");
    pic5.style.setProperty('--border-color', "var(--non-pic-border)");
    pic6.style.setProperty('--border-color', "var(--non-pic-border)");
    let focusing;
    switch (indexOfImg) {
        case 1:
            focusing = pic1;
            break;
        case 2:
            focusing = pic2;
            break;
        case 3:
            focusing = pic3;
            break;
        case 4:
            focusing = pic4;
            break;
        case 5:
            focusing = pic5;
            break;
        case 6:
            focusing = pic6;
            break;
    }
    focusing.style.setProperty("--border-color", "var(--pic-border)");
    if (indexOfImg == 1) {
        mainPic.removeAttribute("src");
        srcElem.value = "images/nk-1.jpg";
        mainPic.setAttributeNode(srcElem);
    } else {
        mainPic.removeAttribute("src");
        srcElem.value = `images/nk-${indexOfImg}.png`;
        mainPic.setAttributeNode(srcElem);
    }
}

function run() {
    pic1.addEventListener("click", () => {
        clickpic(1);
    });
    pic2.addEventListener("click", () => {
        clickpic(2);
    });
    pic3.addEventListener("click", () => {
        clickpic(3);
    });
    pic4.addEventListener("click", () => {
        clickpic(4);
    });
    pic5.addEventListener("click", () => {
        clickpic(5);
    });
    pic6.addEventListener("click", () => {
        clickpic(6);
    });
}
run();