document.querySelector('.burger__menu').addEventListener('click', () => {
    document.querySelector('.header__networks').classList.toggle('active')
    document.querySelector('.header__links').classList.toggle('active')
    document.querySelector('.burger__menu').classList.toggle('active')
})

document.querySelectorAll('.main__block--text svg').forEach(el => {
    el.addEventListener('click', () => {
        el.parentElement.parentElement.querySelector('.main__block--image').classList.toggle('auto')
        el.classList.toggle('active')
        el.parentElement.parentElement.querySelector('.main__block--text').classList.toggle('border')
    })

})

$("#phone_1").mask("+7(999) 999-9999");
$("#phone_2").mask("+7(999) 999-9999");
$("#phone_3").mask("+7(999) 999-9999");

// document.querySelectorAll('.header__links a').forEach(link => {

//     link.addEventListener('click', function (e) {
//         e.preventDefault();
//         console.log($('main').offset().top);
//         // let href = this.getAttribute('href').substring(1);

//         // const scrollTarget = document.getElementById(href);

//         // const topOffset = document.querySelector('.scrollto').offsetHeight;
//         // const topOffset = 0; // если не нужен отступ сверху 
//         const elementPosition = 10000
//         const offsetPosition = $('main').offset().top

//         window.scrollBy({
//             top: 0,
//             behavior: 'smooth'
//         });
//     });
// });
$('.links').on('click', function (e) {
    let pos = ''
    switch (e.delegateTarget.innerText) {
        case "Каталог":
            pos = 'main'
            break;
        case "О компании":
            pos = '.section__about'
            break;
        case "Наши магазины":
            pos = '.section__score'
            break;
    }
    let mainPos = $(`${pos}`).offset().top - 100

    $('html, body').animate({
        scrollTop: mainPos
    });
    return false;
});
window.addEventListener('load', () => {
    document.querySelectorAll('.main__block--image').forEach(el => {
        switch (el.querySelectorAll('.main__block--js').length) {
            case el.querySelectorAll('.main__block--js').length:
                el.classList.add('val' + `${el.querySelectorAll('.main__block--js').length}`)
                break;
        }
    })
    // window.addEventListener('click', () => {
    //     document.querySelector('.alert--fixed.box-size').classList.remove('alert--active')
    // })
    // document.querySelector('.alert--fixed.box-size').addEventListener('click', (e) => {
    //     e.stopPropagation();
    // })
})
document.querySelector('.alert--x.alert--close.box-size').addEventListener('click', () => {
    document.querySelector('.alert--fixed.box-size').classList.remove('alert--active')
})