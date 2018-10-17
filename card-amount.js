// constructor
function CardAmount (options) {
    this.selector = $(options.card);
    this.title = $(options.title);
    this.amountQuantity = $(options.amountQuantity);
    this.titleValue = options.titleValue;
    this.data = $(options.data);
    this.init();
}

/*
   - method to show/hide card
   - render content
*/
CardAmount.prototype.setCardData = function(data = 0, qtd = 0) {
    /*
      - check if has content to render
      - show/hide/close
    */

    if(qtd) {
        this.selector.removeClass("hide");
        this.selector.addClass("opened");
        
    } else {
        this.selector.removeClass("opened closed");
        this.selector.addClass("hide");
    }

    data = data.toFixed(2);

    amount = data.toString();
    var dot = amount.lastIndexOf('.');

    if (dot != -1) {
        amount = amount.substr(0, dot) + "," + amount.substr(dot + 1);
    }

    // render content
    this.data.html(parseFloat(data) > 0 ? 'R$' + amount : null);
    this.amountQuantity.html(qtd > 0 ? ''+ qtd : null);
};


// click method
CardAmount.prototype.init = function() {
    //click event
    $(this.selector).addClass('hide card-amount');
    $(this.title).addClass('card-amount__title');
    $(this.title).text(this.titleValue);
    $(this.amountQuantity).addClass('card-amount__amount-quantity');
    $(this.data).addClass('card-amount__amount');
};