const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const buyBtns = document.querySelectorAll('.js-buy-ticket')//lay tat ca cac class co cung ten ra
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

function showBuyTickets() {//hiển thị bảng mua vé
    modal.classList.add('open')
}

function hideBuyTickets() {//ẩn
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {//lấy ra từng cái để xử lý
    buyBtn.addEventListener('click', showBuyTickets)//lắng nghe sự kiện từng click

}

modalClose.addEventListener('click', hideBuyTickets)
//click ở vùng ngoài sẽ ẩn form đc, nhưng click những thành phần bên trong form cũng sẽ mất theo
modal.addEventListener('click', hideBuyTickets)
//xử lý click vùng ngoài, vùng trong không bị ảnh hưởng, bị mất khi click
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})