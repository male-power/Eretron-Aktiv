document.addEventListener("DOMContentLoaded", function (event) {
    //timer
    // var fullTime = new Date().getTime() + 129600000; //1.5 дня
    // $('.countdown-container').countdown(fullTime, function(event) {
    //     $(this).html(event.strftime(
    //
    //
    //         '<div class="timer__wrapp">'+
    //         ' <div class="timer__item">01</div>'+
    //         '<div >:</div>'+'</div>'+
    //
    //         '<div class="timer__wrapp">' +
    //         '<div class="timer__item time__hours">%H</div>' +
    //         '<div >:</div>' +
    //
    //         '</div>' +
    //         '<div class="timer__wrapp">' +
    //         '<div class="timer__item time__minutes">%M</div>' +
    //         '<div >:</div>' +
    //         '</div>' +
    //         '<div class="timer__wrapp">' +
    //         '<div class="timer__item time__seconds">%S</div>' +
    //
    //         '</div>'));
    // });


    
	// TIME REMAIN
	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date());
		let seconds = Math.floor((t / 1000) % 60);
		let minutes = Math.floor((t / 1000 / 60) % 60);
		let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		let days = Math.floor(t / (1000 * 60 * 60 * 24));
		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds
		};
	}

	function initializeClock(id, endtime) {

		function updateClock() {
			var t = getTimeRemaining(endtime);

			if (t.total <= 0) {
				clearInterval(timeinterval);
				var deadline = new Date(Date.parse(new Date()) + 13500 * 1000);
				initializeClock('clockdiv', deadline);
			}

			let clock = document.querySelectorAll('.time-remain').forEach(item => {
				item.querySelector(".hour").innerHTML = ("0" + t.hours).slice(-2);
				item.querySelector(".minutes").innerHTML = ("0" + t.minutes).slice(-2);
				item.querySelector(".seconds").innerHTML = ("0" + t.seconds).slice(-2);
			});
		}
		updateClock();
		var timeinterval = setInterval(updateClock, 1000);
	}
	var deadline = new Date(Date.parse(new Date()) + 13500 * 1000);
  initializeClock("clockdiv", deadline);


    //    ВЫРАНИВАЕМ БЛОКИ ПО ВЫСОТЕ
    function alignmentHeight(element) {
        var maxHeight = 0;
        var block = $(element);

        for (var i = 0; i < block.length; i++) {

            if (maxHeight < block[i].clientHeight) {
                maxHeight = block[i].clientHeight;

            }

        }

        for (var j = 0; j < block.length; j++) {



            block[j].style.height = maxHeight + "px";
        }

    };


    //СОБИРАЕМ КАРУСЕЛЬ
    function createsSlider() {
        var item = $(".slider__item");
        for (var i = 0; i < item.length; i++) {


            item.addClass("item ");

        }
        $("#slider").carousel(3000);

    }

    //   ------------
    //
    //фиксируем меню при прокрутке
    // $(window).scroll(function(){
    //     if($(this).scrollTop()>60){
    //         $('#navigate').addClass('fixed');
    //     }
    //     else if ($(this).scrollTop()<60){
    //         $('#navigate').removeClass('fixed');
    //     }
    // });

    //плавный скролл
    $(".scroll-js").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });
    $("div.btn-buy").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });


    function dataToday(element) {
        var date = new Date();
        //Берем день
        var day = date.getDate();
        //Берем месяц
        var month = date.getMonth() + 1;
        //Берем год
        var yea = date.getFullYear();
        //находим блок

        var dataSpan = $(element);
        //Меняем содержимое спана
        dataSpan.html(+day + "." + month + "." + yea + " ");
    }
    dataToday(".date");

    $(".menu__btn").on("click", function () {
        $(".menu__list").toggleClass('menu__list--active');
    });
    //
    // function numberRandon(max,min) {
    //     var number = Math.floor(Math.random() * (max - min) + min);
    //     setInterval( $(".count").html(number-1)  , 1000);
    //
    //
    // }
    //     numberRandon(65,40);


    $(".menu__button").on("click", function () {
        var menu = $('.menu__list');
        if (menu.hasClass("open")) {

            menu.fadeOut().removeClass("open");
        } else {
            menu.fadeIn().addClass("open");
        }



    });

    function numberRandon(max, min) {
        var number = Math.floor(Math.random() * (max - min) + min);
        $(".count").html(number - 1);


    }
    numberRandon(65, 40);

    // HEADER FIXED
    let mediaQuery = window.matchMedia('(max-width: 990px)');
    if (mediaQuery.matches) {
        window.addEventListener('scroll', scrollNav);
        function scrollNav() {
            if (document.body.scrolltop > 600 || document.documentElement.scrollTop > 600 || window.pageYOffset > 600) {
                document.querySelector('header').style.position = 'fixed';
                document.querySelector('header').style.background = 'white';
                document.querySelector('header').style.width = 100 + '%';
                document.querySelector('header').style.zIndex = 100;
            } else {
                document.querySelector('header').style.position = '';                
                document.querySelector('header').style.background = '';
                document.querySelector('header').style.width = '';
                document.querySelector('header').style.zIndex = '';
            }
        }
    }

		function getSection() {
			let titles = document.querySelectorAll(".aside-title");

			Array.prototype.forEach.call(titles, title => {
				let button = title.querySelector(".aside__button");
				let arrow = title.querySelector(".arrow");
				let text = title.querySelector(".aside-text");

				text.classList.add("text--closed");
				arrow.classList.add("button__down");

				button.addEventListener("click", function () {
					arrow.classList.toggle("button__up");
					text.classList.toggle("text--opened");
					text.classList.toggle("text--closed");
				})
			})
		}

		getSection();

    // GET DATE
    var day = new Date().getDate();
    if (day < 10) { day = '0' + day; }
    var month = new Date().getMonth();
    month += 1;
    if (month < 10) { month = '0' + month; }
    var year = new Date().getFullYear();
    var time = day + '.' + month + '.' + year;
    document.querySelector('header .today').innerHTML = time;

    // COOPYRIGHT DATE
    document.querySelector('footer .copyright-year').innerHTML = new Date().getFullYear();

});