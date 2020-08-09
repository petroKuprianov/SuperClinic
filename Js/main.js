    'use strict';

    var selector = {
        $button1: document.querySelector('.footer__switch-1'),
        $button2: document.querySelector('.footer__switch-2'),
        $button3: document.querySelector('.footer__switch-3'),
        $one: document.querySelector('.footer__change_info-1'),
        $two: document.querySelector('.footer__change_info-2'),
        $three: document.querySelector('.footer__change_info-3'),
        $one1: document.querySelector('.footer__change_info-11'),
        $two2: document.querySelector('.footer__change_info-22'),
        $three3: document.querySelector('.footer__change_info-33'),
        $one_polugon: document.querySelector('.footer_polygon-1'),
        $two_polugon: document.querySelector('.footer_polygon-2'),
        $three_polugon: document.querySelector('.footer_polygon-3')
    };

     selector.$button1.addEventListener('click',  function (event) {
        event.preventDefault();
        setTimeout(()=>{
            changeDisplay(selector.$one, 'block');
            changeDisplay(selector.$two, 'none');
            changeDisplay(selector.$three, 'none');
            changeDisplay(selector.$one1, 'block');
            changeDisplay(selector.$two2, 'none');
            changeDisplay(selector.$three3, 'none');
            changeVisibility(selector.$one_polugon, 'visible');
            changeVisibility(selector.$two_polugon, 'hidden');
            changeVisibility(selector.$three_polugon, 'hidden');
        }, 200)
            
    });
    selector.$button2.addEventListener('click', function (event) {
        event.preventDefault();
        setTimeout(()=>
        {
            changeDisplay(selector.$one, 'none');
            changeDisplay(selector.$two, 'block');
            changeDisplay(selector.$three, 'none');
            changeDisplay(selector.$one1, 'none');
            changeDisplay(selector.$two2, 'block');
            changeDisplay(selector.$three3, 'none');
            changeVisibility(selector.$one_polugon, 'hidden');
            changeVisibility(selector.$two_polugon, 'visible');
            changeVisibility(selector.$three_polugon, 'hidden');
        }, 200)
    });

    selector.$button3.addEventListener('click', function (event) {
        event.preventDefault();

        setTimeout(()=>{

            changeDisplay(selector.$one, 'none');
            changeDisplay(selector.$two, 'none');
            changeDisplay(selector.$three, 'block');
            changeDisplay(selector.$one1, 'none');
            changeDisplay(selector.$two2, 'none');
            changeDisplay(selector.$three3, 'block');
            changeVisibility(selector.$one_polugon, 'hidden');
            changeVisibility(selector.$two_polugon, 'hidden');
            changeVisibility(selector.$three_polugon, 'visible');
        }, 200)

    });

    function changeDisplay($node, value) {
        $node.style.display = value;
        return $node;
    }
    function changeVisibility($node, value){
        $node.style.visibility = value;
        return $node;
    }
