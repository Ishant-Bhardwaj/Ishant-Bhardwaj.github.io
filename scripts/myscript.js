// isElementInViewPort(ele){
// 	var windowOffsetY = window.pageOffsetY;
setTimeout(function(){
    var divElems = document.querySelectorAll('div');
divElems[divElems.length - 1].remove();
},0.5);


// }
// var windowOffsetY = window.pageYOffset;
// var topElement = document.querySelector('.hero');
var navBar = document.querySelector('#navBar');
// if(windowOffsetY === 0){
// 	document.body.style.overflowY = 'hidden';
// 	setTimeout(function(){
// 				topElement.remove();
// 	document.body.style.overflowY = 'scroll';

// 		scrollToElement(navBar);
// 	},7000);
// }

// window.addEventListener('scroll',function(){	
// 	windowOffsetY = window.pageYOffset;
// 	if(windowOffsetY >0){
// 	document.body.style.overflowY = 'scroll';
// }
	
// 	});


// Carousel opening
// window.addEventListener('scroll',function(){
// 	if(window.pageYOffset === 0){
// 		navBar.style.backgroundColor = 'white';
// 		navBar.style.color = '#007bff';
// 	}
// });
	var portfolioItems = document.querySelectorAll('.portfolio_item');
	portfolioItems.forEach(function(elem){
		elem.addEventListener('click',function(){
				var ele = document.getElementById('portfolio_carousel');
						ele.classList.remove('fadeOutSlideDown');

ele.classList.add('fadeInSlideUp');
var main_cont = document.querySelector('#port_content');
var  main_desc = document.querySelector('.main_desc');
main_cont.style.backgroundImage = 'url('+elem.dataset.img+')';
main_desc.innerHTML = elem.dataset.desc;
		ele.style.display = 'block';
		document.body.style.overflow='hidden';

		});
	});

// 

function playCloseAnim(ele){
		ele.classList.remove('fadeInSlideUp');
	ele.classList.add('fadeOutSlideDown');
}
var portCont = document.getElementById('port_content');
var closeBtn = document.getElementById('close_btn');
closeBtn.addEventListener('click',function(){
	var elem = document.getElementById('portfolio_carousel');
	(function(){
playCloseAnim(elem);
document.body.style.overflowY='scroll';
	})();
setTimeout(function(){
		elem.style.display = 'none';

},500);	
});

console.log(portCont);
var toggledOn = false;
portCont.addEventListener('click',function(){
	var ele = document.querySelector('.main_desc');
	console.log(ele);
	if(toggledOn){
	ele.style.bottom='-15%';
	toggledOn=false;
	}
	else{
			ele.style.bottom='0';
				toggledOn=true;


	}	


});
var counterEle =0;

(function indicatorInit(){
var indicator = document.querySelectorAll('.indicator');
indicator.forEach(function(ele){
	var indicatorStyle = `.indicator${++counterEle}::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${ele.dataset.value};
    background: ${ele.dataset.color};
    transform: scaleY(0);
        }`;
	stleEle = document.head.appendChild(document.createElement('style'));
	stleEle.innerHTML = indicatorStyle;
	ele.classList.add(`indicator${counterEle}`);

	window.addEventListener('scroll',function(){
		var isVisible = isElementInViewPort(ele);
		console.log(ele);
		if(isVisible){
			ele.classList.add('growBottom');
		}
	});
});
})();


	var prevPos = window.pageYOffset;

window.addEventListener('scroll',function(){
	var currentPos = window.pageYOffset;
	if(currentPos<prevPos){
		navBar.style.top="0%";
	}
	else{
		navBar.style.top="-15%";
	}
	prevPos = currentPos;
});


function scrollToElement(ele){
	ele.scrollIntoView({behavior:'smooth',block:'start',inline:'nearest'});
}

var typingArr = ['Ishant Bhardwaj','Developer','UX Designer']
var counter = 0;
setInterval(function(){
	var elem = document.getElementById('desc-animated-part');
		counter = counter >= typingArr.length-1?0:counter+1;
		},5000);

function isElementInViewPort(ele){
	var windowOffsetY = window.pageYOffset;
	var heightPadding = window.innerHeight;
	var eleOffset = ele.offsetTop;
	var padding = 200;
	if(eleOffset<windowOffsetY+padding){
		return true;
	}
	return false;

}
var scrollElements = document.querySelectorAll('.animate_on_scroll');
scrollElements.forEach(function(elemIns){
	window.addEventListener('scroll', function(){
			var isVisible = isElementInViewPort(elemIns);
			if(isVisible){

				elemIns.classList.add('animate');

			}
	});
});
