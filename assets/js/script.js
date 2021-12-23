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

//> xử lý menu icon respon
var header = document.getElementById('header');
var mobileHeader = document.getElementById('mobile-menu');
//header.clientHeight (height = 46, 48, or 50) thay đổi thì đảm bảo giá trị vẫn được lưu vào headerHeight
var headerHeight = header.clientHeight;

//đóng mở mobile menu
mobileHeader.onclick = function () {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';

    } else {
        header.style.height = null;

    }
}

//tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function (event) {
        //khi click vào bất kì thẻ a nào, thì this trả lại chính thẻ a đó
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            // bỏ qua mặc định
            event.preventDefault();
        } else {
            header.style.height = null;
        }

    }
}