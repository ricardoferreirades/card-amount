// constructor
var CardAmount = function(selector) {
    this.selector = $(selector);
    this.click();
}

/*
   - method to show/hide card
   - render content
*/
CardAmount.prototype.setCardData = function(data, qtd) {
    console.log('data', data);
    console.log('qtd', qtd);
    /*
      - check if has content to render
      - show/hide/close
    */
    if(!isNaN(data) && data > 0) {
        if(this.selector.hasClass('hide')) {
            this.selector.removeClass("hide");
            this.selector.addClass("opened");
        }
    } else {
        this.selector.removeClass("opened closed");
        this.selector.addClass("hide");
    }

    // render content
    this.selector.html("<h4 class='title'>Soma dos selecionados" + qtd + "</h4><p>R$ "+ data.toFixed(2)+"</p>");
};

// click method
CardAmount.prototype.click = function() {
    //click event
    this.selector.on("click", function () {
        var $target = $(this);

        if($target.hasClass('opened')) {
            $target.toggleClass(('opened closed'));
        } else {
            $target.toggleClass(('opened closed'));
        }
    });
};