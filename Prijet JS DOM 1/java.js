var incrementButtons = document.querySelectorAll('.increment');
incrementButton.forEach(function(button) {
    button.addEventListener('click', function() {
        var parentArticle = button.parentElement;
        var quantitySpan = parentArticle.querySelector('span');
        var currentQuantity = parseInt(quantitySpan.innerText);
        quantitySpan.innerText = currentQuantity + 1;
    });
});

var decrementButton = document.querySelectorAll('.decrement');
decrementButton.forEach(function(button) {
    button.addEventListener('click', function() {
        var parentArticle = button.parentElement;
        var quantitySpan = parentArticle.querySelector('span');
        var currentQuantity = parseInt(quantitySpan.innerText);
        if (currentQuantity > 0) {
            quantitySpan.innerText = currentQuantity - 1;
        }
    });
});