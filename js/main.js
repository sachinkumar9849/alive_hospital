
var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});



  $('.slide').slick({
    autoplay: false,
    arrows: false,
   
    dots: false,
    infinite: true,
    speed: 2000,
    fade: true,
    slide: 'div',
    slidesToShow: 1,
    slidesToScroll: 1,
   
   
});
 

// SLIDER END
var typing=new Typed(".text", {
    strings: ["056-525428"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
});
// animate btn end 

$(document).ready(function() {
    $('#myModal').modal('show');
});
// NOTICE POPUP END
// slider down start
$(function() {
    $('.scroll-down').click(function() {
        $('html, body').animate({ scrollTop: $('section#about').offset().top }, 'slow');
        return false;
    });
});
// slider down end

$(document).ready(function() {
    window.addEventListener("scroll", function() {
        var header = document.querySelector(".header");
        header.classList.toggle("sticky-bar", window.scrollY > 50);
    });

});

// NAVE SCROOL end


$('.testimonial_item').slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 1000,
    fade: false,
    slide: 'div',
    slidesToShow: 2,
    slidesToScroll: 1,
    cssEase: 'linear',
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});
$('.services_items').slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 1000,
    fade: false,
    slide: 'div',
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    responsive: [{
            breakpoint: 1444,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});
// slider end



// slider down start
$(function() {
    $('.scroll-down').click(function() {
        $('html, body').animate({ scrollTop: $('section.about').offset().top }, 'slow');
        return false;
    });
});
// slider down end



$(function() {
    new WOW().init();
});
// wow



class readMore {
    constructor() {
        this.content = '.readmore__content';
        this.buttonToggle = '.readmore__toggle';
    }

    bootstrap() {
        this.setNodes();
        this.init();
        this.addEventListeners();
    }

    setNodes() {
        this.nodes = {
            contentToggle: document.querySelector(this.content)
        };

        this.buttonToggle = this.nodes.contentToggle.parentElement.querySelector(this.buttonToggle);
    }

    init() {
        const { contentToggle } = this.nodes;

        this.stateContent = contentToggle.innerHTML;

        contentToggle.innerHTML = `${this.stateContent.substring(0, 600)}...`;
    }

    addEventListeners() {
        this.buttonToggle.addEventListener('click', this.onClick.bind(this))
    }

    onClick(event) {
        const targetEvent = event.currentTarget;
        const { contentToggle } = this.nodes

        if (targetEvent.getAttribute('aria-checked') === 'true') {
            targetEvent.setAttribute('aria-checked', 'false')
            contentToggle.innerHTML = this.stateContent;
            this.buttonToggle.innerHTML = 'Show Less'

        } else {
            targetEvent.setAttribute('aria-checked', 'true')
            contentToggle.innerHTML = `${this.stateContent.substring(0, 600)}...`
            this.buttonToggle.innerHTML = 'Show more'
        }
    }
}


const initReadMore = new readMore();
initReadMore.bootstrap()
    //about read more end
    $(".akf-button").click(function (e) {
  
        // Remove any old one
        $(".ripple").remove();
      
        // Setup
        var posX = $(this).offset().left,
            posY = $(this).offset().top,
            buttonWidth = $(this).width(),
            buttonHeight =  $(this).height();
        
        // Add the element
        $(this).prepend("<span class='ripple'></span>");
      
        
       // Make it round!
        if(buttonWidth >= buttonHeight) {
          buttonHeight = buttonWidth;
        } else {
          buttonWidth = buttonHeight; 
        }
        
        // Get the center of the element
        var x = e.pageX - posX - buttonWidth / 2;
        var y = e.pageY - posY - buttonHeight / 2;
        
       
        // Add the ripples CSS and start the animation
        $(".ripple").css({
          width: buttonWidth,
          height: buttonHeight,
          top: y + 'px',
          left: x + 'px'
        }).addClass("rippleEffect");
      });
      
    // btn end 
  