// Disable btns

let disableBtns = document.querySelectorAll('.cats-item__buy_not');

disableBtns.forEach(function(elem) {
    elem.disabled = true;
})

// Likes

let likes = document.querySelectorAll('.cats-item__like');

likes.forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        item.classList.toggle('active');
        if (item.classList.contains('active')) {
            let itemParent = item.parentNode;
            let msg = itemParent.querySelector('.cats-item__msg');
            msg.classList.remove('hidden');
            let closeMsg = function() {
                msg.classList.add('hidden');
            }
            setTimeout(closeMsg, 800);
        }
    })
});

// Scroll
let scrollBtn = document.querySelector('.cats__scroll-btn');

let toggleScrollBtn = function() {
    if (window.pageYOffset >= document.documentElement.clientHeight) {
        scrollBtn.classList.remove('hidden');
    } else {
        scrollBtn.classList.add('hidden');
    }
}

toggleScrollBtn();
window.addEventListener('scroll', toggleScrollBtn);

scrollBtn.addEventListener('click', function() {
    window.scrollTo(0, 0);
    scrollBtn.classList.add('hidden');
})

