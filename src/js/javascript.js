//-------------------------------slider-services-----------------------------//
function SliderServices(element) {
    this.element = document.querySelector(element);
    this.slider = this.element.querySelectorAll(".our-services__block-with-picture-item");
    this.indicator = this.element.querySelectorAll(".indicator__block");
    this.button = this.element.querySelectorAll(".icon-border");
    this.init()
}

SliderServices.prototype = {
    init: function() {
        for(var i = 0; i < this.button.length; i++) {
            var button = this.button[i];
            this.controlSlide(button);
        }
    },

    controlSlide: function(button) {
        this.counter = 0;
        self = this;

        button.addEventListener("click", function() {
            var index = this.getAttribute("data-button");
            self.indicator[self.counter].classList.remove("indicator__block_visible");
            self.slider[self.counter].classList.remove("our-services__block-with-picture-item_visible");
           
            self.indicator[index].classList.add("indicator__block_visible");
            self.slider[index].classList.add("our-services__block-with-picture-item_visible");
            self.counter = index;
        })
    }
}

document.addEventListener( "DOMContentLoaded", function() {
	var SliderOurServices = new SliderServices( ".our-services" );
});


// //------------------------------CaseStudySlider------------------------------//

function SliderCaseStudy(element) {
    this.element = document.querySelector(element);
    
    this.slideText = this.element .querySelectorAll(".block-with-ideas-and-button");

    this.button = this.element.querySelectorAll(".indicator__block");

    this.slidePicture = this.element.querySelectorAll(".case-study__picture-image")
    this.start()
}

SliderCaseStudy.prototype = {

    start: function() {
        this.button[0].classList.add("indicator__block_circle_current");
        this.slideText[0].classList.add("block-with-ideas-and-button_visible");
        this.slidePicture[0].classList.add("case-study__picture-image_visible");
        this.init();
    },

    init: function() {
        for(var i = 0; i < this.button.length; i++ ) {
            button = this.button[i];

            this.control(button)
        }
    },

    control: function(button) {
        var self = this;
        this.counter = 0;
        this.countZindex = 1;

        button.addEventListener("click", function( e ) {

            self.controlPaint(this, this.counter);
            var index = this.getAttribute("data-button")
            this.classList.add("indicator__block_circle_current");

            function newSlide() {
                self.slideText[self.counter].classList.remove("block-with-ideas-and-button_visible");
                self.slidePicture[self.counter].classList.remove("case-study__picture-image_visible");
               
                self.counter = index;
            }

           self.slideText[index].classList.add("block-with-ideas-and-button_visible");
           self.slidePicture[index].classList.add("case-study__picture-image_visible");
           
           self.countZindex = self.countZindex + 1;

           self.slideText[index].style.zIndex = "1" + self.countZindex;  // `${self.countZindex}`- пребразование переменной в строку работает во Всех браузерах кроме IE 11
           console.log(("1" + self.countZindex));
           console.log(typeof ("1" + self.countZindex));
           self.slidePicture[index].style.zIndex ="1" + self.countZindex;;
           setTimeout(newSlide, 1000);
           
        })
    },

    controlPaint: function (button, counter) {
        button.classList.remove("indicator__block_circle_current");

        this.button[this.counter].classList.remove("indicator__block_circle_current");
    }
}


document.addEventListener( "DOMContentLoaded", function() {
	var SliderCase = new SliderCaseStudy( ".case-study" );
});


//------------------------------action-our-team-block------------------------//

var photoButton = document.querySelectorAll(".people-photo");

document.addEventListener("DOMContentLoaded", function( e ) {

        for(var i = 0; i < photoButton.length; i++) {

            photoButton[i].addEventListener("click", function() {
                
                this.classList.toggle("people-photo_zoom");

                for(var j = 0; j < this.parentElement.childNodes.length; j++) {

                    if(this !== this.parentElement.childNodes[j]) {

                        this.parentElement.childNodes[j].classList.toggle("team-info-block-people_display-element");
                    }
                }

            })
        }
})