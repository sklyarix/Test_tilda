console.log('hello');
const cartProductsList = document.querySelectorAll('.cart__products__list');
const cartProductCounterMinus = document.querySelectorAll('.cart__product__counter__minus');
const cartProductQuantity = document.querySelectorAll('.cart__product__quantity');
const cartProductCounterPlus = document.querySelectorAll('.cart__product__counter__plus');
const cartProductDelete = document.querySelectorAll('.cart__product__delete');
const cartProductsPriceNumbers = document.querySelectorAll('.cart__products__price__numbers');
const cartBtn = document.querySelectorAll('.cart__btn');
const productBtn = document.querySelectorAll('.product__btn');
const fullPrice = document.querySelectorAll('.cart__products__price__numbers');
let price = 0;

const randomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2,15);
};

const priceWithoutSpaces = (str) => {  
    return str.replace(/\s/g,'');
}



const generateCartProduct = (img, title, articul, price, id) => {
    return `
        <div class="cart__product" data-id=${id}>
            <div class="cart__product__img"><img src="${img}"></div>
            <div class="cart__product__text">
                <div class="cart__product__title">${title}</div>
                <div class="cart__product__articul">${articul}</div>
                <div class="cart__counter__price">
                    <div class="cart__product__counter">
                        <div class="cart__product__counter__minus">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"> <g> <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="14" y1="31" x2="50" y2="31"/></g> <g> <circle fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/></g></svg>
                        </div>
                        <div class="cart__product__quantity">
                            1
                        </div>
                        <div class="cart__product__counter__plus">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"> <g> <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="32" y1="50" x2="32" y2="14"/> <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="14" y1="32" x2="50" y2="32"/></g><g><circle fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/></g></svg>
                        </div>
                    </div>
                    <div class="cart__product__price"> 	${price} ₽</div>
                </div>
            </div>
            <div class="cart__product__delete">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"> <g> <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="18.947" y1="17.153" x2="45.045" y2="43.056"/></g><g><line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="19.045" y1="43.153" x2="44.947" y2="17.056"/></g><g><circle fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/></g></svg>
            </div>
        </div>
    `;
}

productBtn.forEach(el => {
    el.closest('.product').setAttribute('data-id',randomId());
    el.addEventListener('click',(e) => {
        let self = e.currentTarget;
        let parent = self.closest('.product');
        let id = parent.dataset.id;
        let img = parent.querySelector('.product__img img').getAttribute('src');
        let title = parent.querySelector('.product__title').textContent;
        let articul = parent.querySelector('.product__info').textContent;
        let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.product__price').textContent));

        plusFullPrice(priceNumber)
        console.log(price);
        printFullPrice();
        cartProductsList.querySelector('.cart__products__list').insertAdjacentHTML('afterbegin', generateCartProduct (img, title, articul, price, id));
        self.disabled = true;
    });
})
const normalPrice = (str) => {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1');
};
const plusFullPrice = (currentPrice) => {
    return price += currentPrice;
}
const minusFullPrice = (currentPrice) => {
    return price -= currentPrice;
}
const printFullPrice = () => {
    fullPrice.textContent = `${normalPrice(price)}₽`;
}
