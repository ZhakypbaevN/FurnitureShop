$(function() {

    var header = $("#header"),
        headerH = $("#header").innerHeight(),
        scrollOffset = $(window).scrollTop(),
        doc_w = $(window).width();
        




    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });


    function checkScroll(scrollOffset) {
        if(doc_w > '768'){
            if( scrollOffset >= headerH ) {
                header.addClass("fixed");
            } else {
                header.removeClass("fixed");
            }
        }

        if(doc_w < '768'){
            if( scrollOffset > 0 ) {
                header.addClass("fixed");
            } else {
                header.removeClass("fixed");
            }
        }
        
    }



    
    /* Smooth scroll 
    ///////////////////////////////////////////////////*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top  - 40;
            console.log(blockOffset);


        if(doc_w < '768'){
            $("#nav_toggle").removeClass("active");
            $("#nav").slideUp();
            $(".nav__itemHaSubnav").children(".subnav").slideUp();
            $(".nav__itemHaSubnav").removeClass("active");
            $(".accountProf__subnav").slideUp();
            $("#cart").removeClass('active');
            $("#search__btn").removeClass("active");
            $(".header__search").slideUp();
            $("#search__btn").removeClass("active");
            $(".header__search").slideUp();
            header.removeClass("whiteBg");
        }
        


        $("html, body").animate({
            scrollTop:  blockOffset
        }, 700);
    });



   



    /*    Slick Sliders    */
    /* Reviews: https://kenwheeler.github.io/slick/ */
    let inrtro_slider = $("#introSliderProducts");
    let intro__productsDesc_slider = $("#introProductDesc");
    let rooms_slider = $("#roomsSlider");
    let room__DescSlider = $("#room__descSlider");
    let tricks_slider = $("#tricks__slider");


    inrtro_slider.slick({
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        arrow: true,
        dots: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 8000,
        appendDots: $(".intro__productsDots"),
        appendArrows: $(".intro__productsBtn"),
        asNavFor: intro__productsDesc_slider,

        responsive: [
            {
              breakpoint: 1050,
              settings: {
                  variableWidth: false,
                  slidesToShow: 1
              }
            }
        ]



    });

    intro__productsDesc_slider.slick({
        arrows: false,
        fade: true,
        asNavFor: inrtro_slider

        
    });



    rooms_slider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        arrow: true,
        dots: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 4000,
        appendArrows: $(".rooms__sliderBtn"),
        asNavFor: room__DescSlider,

        responsive: [
            {
              breakpoint: 420,
              settings: {
                  variableWidth: false,
                  slidesToShow: 1,
                  appendDots: $(".rooms__sliderDots")
              }
            }
        ]
    });

    rooms_slider.on("beforeChange", function(event, slick, currentSlide, nextSlide){

        $(".room__item").removeClass("firstPhoto");

        if (nextSlide == 0){
            $(".room__item_1").addClass("firstPhoto");
        }
        else if (nextSlide == 1){
            $(".room__item_2").addClass("firstPhoto");
        }
        else if (nextSlide == 2){
            $(".room__item_3").addClass("firstPhoto");
        }
        else if (nextSlide == 3){
            $(".room__item_4").addClass("firstPhoto");
        }
    });

    room__DescSlider.slick({
        arrows: false,
        fade: true,
        speed: 0,
        asNavFor: rooms_slider
    });

    tricks_slider.slick({
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: false,
        arrow: true,
        dots: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        appendArrows: $(".tricks__sliderBtn"),

        responsive: [
            {
              breakpoint: 500,
              settings: {
                  slidesToShow: 1
              }
            }
        ]


    });


    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();
        doc_w = $(window).width();

        if(doc_w < '768'){
            $(".accountProf__subnav").slideUp();
            $("#liked").removeClass('active');
            $("#liked").find(".subnav").slideUp();
            $('#cart').removeClass('active');
            $('#cart').find(".subnav").slideUp();
            $(".body").removeClass("no-scroll");
            $("#search__btn").removeClass("active");
            $(".header__search").slideUp();

            $("#nav").slideToggle();
            if ($(this).hasClass("active")){
                setTimeout(function() {
                    header.removeClass("whiteBg");
                }, 290);
            }else{
                header.addClass("whiteBg");
            };

            $(this).toggleClass("active");

        };
    }); 

    $(".nav__itemHaSubnav").on("click", function(){
        doc_w = $(window).width();
        if(doc_w < '768'){
            $(this).siblings(".nav__itemHaSubnav").removeClass("active");
            $(this).siblings(".nav__itemHaSubnav").children(".subnav").slideUp();
            

            $(this).children(".subnav").slideToggle(); 
            $(this).toggleClass("active");
        };
    });   
    
    $(".accountProf__link").on("click", function(event){
        doc_w = $(window).width();
        if(doc_w < '768'){
            $("#nav_toggle").removeClass("active");
            $("#nav").slideUp();
            $(".nav__itemHaSubnav").children(".subnav").slideUp();
            $(".nav__itemHaSubnav").removeClass("active");
            $("#liked").removeClass('active');
            $("#liked").find(".subnav").slideUp();
            $('#cart').removeClass('active');
            $('#cart').find(".subnav").slideUp();
            $(".body").removeClass("no-scroll");
            $("#search__btn").removeClass("active");
            $(".header__search").slideUp();
            

            if ($(this).hasClass("active")){
                setTimeout(function() {
                    header.removeClass("whiteBg");
                }, 290);
            }else{
                header.addClass("whiteBg");
            };

            $(".accountProf__link").toggleClass("active");
            $(".accountProf__link").find(".subnav").slideToggle();
        };
    });  
    
    $(".main").on("click", function(event){
        doc_w = $(window).width();
        if(doc_w < '768'){
            $(".accountProf__subnav").slideUp();
            $("#search__btn").removeClass("active");
            $("#nav_toggle").removeClass("active");
            $("#nav").slideUp();
            $("#search__btn").removeClass("active");
            $(".header__search").slideUp();

            setTimeout(function() {
                header.removeClass("whiteBg");
            }, 290);
            $(".nav__itemHaSubnav").children(".subnav").slideUp();
            $(".nav__itemHaSubnav").removeClass("active");
            $(".accountProf__subnav").slideUp();
        };
    });



    $("#cartBtn").on("click", function(event){
        doc_w = $(window).width();
        if(doc_w < '768'){
            $("#nav_toggle").removeClass("active");
            $("#nav").slideUp();
            $(".nav__itemHaSubnav").children(".subnav").slideUp();
            $(".nav__itemHaSubnav").removeClass("active");
            $(".accountProf__subnav").slideUp();
            $("#liked").removeClass('active');
            $("#search__btn").removeClass("active");
            $(".header__search").slideUp();

            if ($("#cart").hasClass("active")){
                $(".body").removeClass("no-scroll");
                setTimeout(function() {
                    header.removeClass("whiteBg");
                }, 290);
            }else{
                $(".body").addClass("no-scroll");
                header.addClass("whiteBg");
            };

            $('#cart').toggleClass('active');
            $('#cart').find(".subnav").slideToggle(function(){
                $("#liked").find(".subnav").slideUp();
            });
            
        };
    });  

    $("#likedBtn").on("click", function(event){
        doc_w = $(window).width();
        if(doc_w < '768'){
            $("#nav_toggle").removeClass("active");
            $("#nav").slideUp();
            $(".nav__itemHaSubnav").children(".subnav").slideUp();
            $(".nav__itemHaSubnav").removeClass("active");
            $(".accountProf__subnav").slideUp();
            $("#cart").removeClass('active');
            $("#search__btn").removeClass("active");
            $(".header__search").slideUp();
            

            if ($("#liked").hasClass("active")){
                $(".body").removeClass("no-scroll");
                setTimeout(function() {
                    header.removeClass("whiteBg");
                }, 290);
            }else{
                $(".body").addClass("no-scroll");
                header.addClass("whiteBg");
            };

            $("#liked").toggleClass('active');
            $("#liked").find(".subnav").slideToggle(function(){
                $("#cart").find(".subnav").slideUp();
            });
            
        };
    });  



    /* Load More */
    $("#showMore").on("click", function(){
        $('.products__all .product__item:hidden').slice(0, 8).slideDown()
            if(($(".products__all .product__item:hidden")).length == 0){
                $("#showMore").fadeOut();
            };
    });





    // Search Btn
    ////////////////////////////////////////////////////////////////////////
    $("#search__btn").on("click", function(event){
        event.preventDefault();
        doc_w = $(window).width();

        if(doc_w < '768'){
            $("#nav_toggle").removeClass("active");
            $("#nav").slideUp();
            $(".nav__itemHaSubnav").children(".subnav").slideUp();
            $(".nav__itemHaSubnav").removeClass("active");
            $("#liked").removeClass('active');
            $("#liked").find(".subnav").slideUp();
            $('#cart').removeClass('active');
            $('#cart').find(".subnav").slideUp();
            $(".body").removeClass("no-scroll");
            $(".accountProf__link").removeClass("active");
            $(".accountProf__link").find(".subnav").slideUp();

            if ($(this).hasClass("active")){
                setTimeout(function() {
                    header.removeClass("whiteBg");
                }, 290);
            }else{
                header.addClass("whiteBg");
            };

        };
        

        $(this).toggleClass("active");
        $(".header__search").slideToggle();
    }); 






    


    // Cart Products
    const cartIconQuantityNum = $('#cartProductQuantity');
    const likedIconQuantityNum = $('#likedProductQuantity');
    const cartContentBtnNum = $('.subnav-content__btn--num');
    let fullprice = $(".fullprice span"),
        cartIconQuantity,
        cartProductQuantityNum,
        cartProductPrice,
        cartContent,
        cartProduct;


    function removeDots(price){
        let priceNoDots;
        let n = 0;

        for (let char of price) {
            if(char != "." && n != 0){
                priceNoDots += char;
            }
            if(char != "." && n == 0){
                n++;
                priceNoDots = char;
            }
        }
        
        priceNoDots = Number(priceNoDots);
        return priceNoDots;
    }


    function addDots(price){
        let a = price.length,
            priceWithDots,
            s = 3,
            n = 1,
            l = 1;
            priceArray = [];
            let g = a%3;

        for (let char of price) {
            priceArray.push(char);  
        }
        
        priceArray.reverse();
        for (let num of priceArray) {            
            if(n == s && a > 3) {
                priceArray[n] += ".";
                if(g != 0){
                    s += 3;
                }
                
            }

            n++;
        } 

        priceArray.reverse();
        for (let num of priceArray) {
            if(l == 1){
                priceWithDots = num;
            }
            if(l != 1){
                priceWithDots += num;
            }
            l++;
        } 
        return priceWithDots;
        
    }



    function ToggleQuantity(num, i){
        let n = Number(num.text());
        if(i == "+"){
            n++;
            return n;
            
        }
        if(i == "-"){
            n--;
            return n;
        }
        
    }

    

    function calcfullpriceSum(){
        cartContent = $("#cart");
        let l = cartContent.find(".cart__product").length;
        let fp = 0;
        cartProduct = $(".cart__product").first();

        for(let i = 1; i <= l; i++){
            cartProductPrice = removeDots(cartProduct.find(".subnav-product__price span").text());
            cartProductQuantityNum = cartProduct.find(".subnav-product__quantity--num").text();
            
            let productSum = cartProductQuantityNum *= cartProductPrice;
            fp += productSum;

            cartProduct = cartProduct.next();
        }

        fp = String(fp);
        fullprice.text(addDots(fp));

        if(l == 0){
            $('#cart').addClass('account__link--empty');
        }else{
            $('#cart').removeClass('account__link--empty');
        }

        cartContentBtnNum.text(l);
        cartIconQuantityNum.text(l);
    }

    calcfullpriceSum();


    

    
    $('.subnav-content__btn').on("click", function(event){
        event.preventDefault();
    });

    // Cart Product Btns
    $(document).on("click", '.subnav-product__arrow--top', function(event){
        event.preventDefault();
        let cartProductQuantity = $(this).siblings(".subnav-product__quantity--num");

        cartProductQuantity.text(ToggleQuantity(cartProductQuantity, "+")); 
        calcfullpriceSum();
    });

    $(document).on("click", '.subnav-product__arrow--bottom', function(event){
        event.preventDefault();
        let cartProductQuantity = $(this).siblings(".subnav-product__quantity--num");

        if(Number(cartProductQuantity.text()) > 0){
            cartProductQuantity.text(ToggleQuantity(cartProductQuantity, "-")); 
            calcfullpriceSum();
        };
    });

    $(document).on("click", '.cart-product__delete', function(event){
        event.preventDefault();

        $(this).parents(".cart__product").slideUp(350, function(){
            $(this).detach();
            calcfullpriceSum();
        });
    });

    

    function generateCartProduct(img, title, price, id){
        return `
            <li class="subnav-content__item cart__product" data-id="${id}">
                <article class="subnav-product">
                    <div class="subnav-product__content">
                        <img src="${img}" alt="" class="subnav-product__img">
                        <div class="subnav-product__text">
                            <h3 class="subnav-product__title">${title}</h3>
                            <div class="subnav-product__price">Rp <span>${price}</span></div>
                        </div>
                    </div>
                    
                    <div class="subnav-product__control">
                        <div class="subnav-product__quantity">
                            <button class="subnav-product__arrow subnav-product__arrow--top">
                                <svg>
                                    <use xlink:href="assets/images/sprite.svg#arrow"></use>
                                </svg>
                            </button>
                            
                            <div class="subnav-product__quantity--num">1</div>
                            
                            <button class="subnav-product__arrow subnav-product__arrow--bottom">
                                <svg>
                                    <use xlink:href="assets/images/sprite.svg#arrow"></use>
                                </svg>
                            </button>
                        </div> 
                        <button class="subnav-product__delete cart-product__delete">
                            <svg>
                                <use xlink:href="assets/images/sprite.svg#trash"></use>
                            </svg>
                        </button>
                    </div>
                </article>
            </li>
        `;
    };


    $(document).on("click", '.product__btn', function(){
        if (!$(this).hasClass("active")){
            $(this).addClass("active");
            $(this).text("In Cart");
            $("#search__btn").removeClass("active");

            let productImg = $(this).parents(".product__item").find(".product__img").attr("src");
            let productTitle = $(this).parents(".products__itemContent").find(".product__title").text();
            let productPrice = String($(this).parents(".products__itemContent").find(".product__price span").text());

            $(".cartContentList").prepend(generateCartProduct(productImg, productTitle, productPrice, 1));
            calcfullpriceSum()
        };  
    });


    





    // calcLikedProductLegth
    ///////////////////////////////////////////////////////////////////

    function calcLikedProductLegth(){
        likedContent = $("#liked");
        let l = likedContent.find(".liked__product").length;
        console.log(l);
        likedIconQuantityNum.text(l);

        if(l == 0){
            $('#liked').addClass('account__link--empty');
        }else{
            $('#liked').removeClass('account__link--empty');
        }
    }

    calcLikedProductLegth();

    $(document).on("click", '.liked-product__delete', function(event){
        event.preventDefault();
        console.log($(this).text());

        $(this).parents(".liked__product").slideUp(350, function(){
            $(this).detach();
            calcLikedProductLegth();
        });
    });

    function generateLikedProduct(img, title, price, id){
        return `
        <li class="subnav-content__item liked__product" data-id="${id}">
            <article class="subnav-product">
                <div class="subnav-product__content">
                    <img src="${img}" alt="" class="subnav-product__img">
                    <div class="subnav-product__text">
                        <h3 class="subnav-product__title">${title}</h3>
                        <div class="subnav-product__price">Rp <span>${price}</span></div>
                    </div>
                </div>
                
                <div class="subnav-product__control">
                    <button class="subnav-product__cart liked-product__cart">
                        <svg>
                            <use xlink:href="assets/images/sprite.svg#basket"></use>
                        </svg>
                    </button> 
                    
                    <button class="subnav-product__delete liked-product__delete">
                        <svg>
                            <use xlink:href="assets/images/sprite.svg#trash"></use>
                        </svg>
                    </button>
                </div>
            </article>
        </li>
        `;
    };

    $(document).on("click", '.product__link--Like', function(event){
        event.preventDefault();
        if (!$(this).hasClass("liked")){
            $(this).addClass("liked");
            $("#search__btn").removeClass("active");

            let productImg = $(this).parents(".product__item").find(".product__img").attr("src");
            let productTitle = $(this).parents(".products__itemContent").find(".product__title").text();
            let productPrice = String($(this).parents(".products__itemContent").find(".product__price span").text());

            $(".likeContentList").prepend(generateLikedProduct(productImg, productTitle, productPrice, 1));
            calcLikedProductLegth()

        };  
    });

    $(document).on("click", '.liked-product__cart', function(){
        if (!$(this).hasClass("active")){
            $(this).addClass("active");
            $("#search__btn").removeClass("active");

            let productImg = $(this).parents(".subnav-product").find(".subnav-product__img").attr("src");
            let productTitle = $(this).parents(".subnav-product").find(".subnav-product__title").text();
            let productPrice = String($(this).parents(".subnav-product").find(".subnav-product__price span").text());

            $(".cartContentList").prepend(generateCartProduct(productImg, productTitle, productPrice, 1));
            calcfullpriceSum()
        };  
    });

});



