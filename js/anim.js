/*=========================================================
|			aniheader (above sticky area)				|
=========================================================
|			anisticky top(hide quote)					|
--------------------------------------------------------
|			anisticky topspace(show quote)				|
---------------------------------------------------------
|			anisticky cardcontainer	(show card & quote)	|
|				card1									|
|				card2									|
|				...										|
|				card13									|
---------------------------------------------------------
|			anisticky quoteboxcontainer1(quote & icon)	|
|			anisticky quoteboxcontainer2(quote & icon)	|
|							...							|
|			anisticky quoteboxcontainer13(quote & icon)	|
---------------------------------------------------------
|			anisticky bottomspace(show quote)			|
--------------------------------------------------------
|			anisticky bottom(hide quote)				|
========================================================
|			anibottom(under sticky area)				|
========================================================|
*/

function fadeIn(el){
  el.classList.add('show');
  el.classList.remove('hide');  
}

function fadeOut(el){
	if ( typeof e1 == undefined || !el)
	{
		return;
	}
	el.classList.add('hide');
	el.classList.remove('show');
}

function fadeRemove(e1)
{
	if ( typeof e1 == undefined)
	{
		return;
	}
	e1.classList.remove('hide');
	e1.classList.remove('show');
}

function fadeInQuote(el){
	if ( typeof e1 == undefined)
	{
		return;
	}
	el.classList.add('showQuote');
	el.classList.remove('hideQuote');  
}

function fadeOutQuote(el, scrollUp){
	if ( typeof e1 == undefined || !el)
	{
		return;
	}
	el.classList.add('hideQuote');
	el.classList.remove('showQuote');
	if (scrollUp)
	{
		el.classList.add('under');
		el.classList.remove('above');
	}
	else
	{
		el.classList.add('above');
		el.classList.remove('under');
	}
}

function flipAdd(el){
	if ( typeof e1 == undefined)
	{
		return;
	}

	el.classList.add('flip');
	//console.log(el, "working");
}

function flipRemove(el){
	if ( typeof e1 == undefined)
	{
		return;
	}
	//console.log(el, "working");
	el.classList.remove('flip');  
}



function stickyMove(e1)
{
	if ( typeof e1 == undefined)
	{
		return;
	}
	e1.classList.add('move');
}

function stickyHide(e1)
{
	if ( typeof e1 == undefined)
	{
		return;
	}
	e1.classList.add('hide');
	
}
function stickyShow(e1)
{
	if ( typeof e1 == undefined)
	{
		return;
	}
	e1.classList.remove('hide');
}

function stickySticky(e1)
{
	if ( typeof e1 == undefined)
	{
		return;
	}
	e1.classList.remove('move');
}

function addClass(e1, className)
{
	if ( typeof e1 == undefined)
	{
		return;
	}
	e1.classList.add(className);
}

function removeClass(e1, className)
{
	if ( typeof e1 == undefined)
	{
		return;
	}
	e1.classList.remove(className);
}

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
var lastScrollTop = 0;
var precardNo = 1;
document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
	var wWidth = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;

	var wHeight = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;
	var aniheader = document.querySelector(".aniheader");
	var aniSection = document.querySelector(".anisticky_section");
	var aniBack = document.querySelector(".anisticky.back");
	var anistickyTop = document.querySelector(".anisticky.top");
	var anistickyTopSpace = document.querySelector(".anisticky.topspace");
	var anistickycardContainer = document.querySelector(".cardcontainer");
	var anistickyBottomSpace = document.querySelector(".anisticky.bottomspace");
	var anistickybottom = document.querySelector(".anisticky.bottom");
	var quoteboxContainer =  document.querySelector(".quoteboxcontainer");

	var aniheaderH = aniheader.scrollHeight;
	var anistickyTopH = anistickyTop.scrollHeight;
	var anistickyTopSpaceH = anistickyTopSpace.scrollHeight;
	var anistickycardContainerH = anistickycardContainer.scrollHeight;
	var anistickyBottomSpaceH = anistickyBottomSpace.scrollHeight;
	var anistickybottomH = anistickybottom.scrollHeight;
	var quoteboxContainerH = quoteboxContainer.scrollHeight;

	var ShowQuoteStartBottom = 115;
	var lastShownMarinBottom = 200;
	var maxCardNo = 13;

	var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
	var cardNo = 1;
	var initQuoteScroll = aniheaderH + anistickyTopH + anistickyTopSpaceH + anistickybottomH + ShowQuoteStartBottom;
	//console.log("aniheader", aniheaderH, "anistickyTop", anistickyTopH, "anistickyTopSpace", anistickyTopSpaceH, "anistickybottomH", anistickybottomH, "ShowQuoteStartBottom", ShowQuoteStartBottom, "initQuoteScroll", initQuoteScroll);
	//console.log(st, initQuoteScroll);
	if (st > initQuoteScroll)
	{
		cardNo = Math.trunc((st -initQuoteScroll) / quoteboxContainerH) + 2;
	}
	
	var scrollUp = 0;
	if (st > lastScrollTop){
      // downscroll code
	  console.log("down");
	  aniSection.classList.add("scrolldown");
	  removeClass(aniSection, "scrollup");
	  scrollUp = 0;
	} else {
      // upscroll code
	  console.log("up");
	  aniSection.classList.add("scrollup");
	  removeClass(aniSection, "scrolldown");
	  scrollUp = 1;
	}
	console.log(st , aniheaderH + anistickyTopH + anistickyTopSpaceH + anistickycardContainerH +  
		anistickyBottomSpaceH + anistickybottomH + anistickyBottomSpaceH + quoteboxContainerH * (maxCardNo - 1) - wHeight);
	if (st < aniheaderH)
	{
		aniBack.style.position='absolute';
		aniBack.style.bottom = 'unset';
		aniBack.style.top = '0';
	}
	else if (st >= aniheaderH && st < aniheaderH + anistickyTopH + anistickyTopH + anistickyTopSpaceH + anistickycardContainerH +  
		anistickyBottomSpaceH + anistickybottomH + anistickyBottomSpaceH + quoteboxContainerH * (maxCardNo - 1) - wHeight)
	{
		console.log("Leaving Up");
		aniBack.style.position='fixed';
		aniBack.style.top = 0;
		aniBack.style.bottom = 'unset';
	}
	else
	{
		aniBack.style.position='absolute';
		aniBack.style.bottom = 0;
		aniBack.style.top = 'unset';
	}
	

	function checkFadeQuote(cardNo)
	{
		console.log("cardNo", cardNo);
		if ( cardNo < 2)
		{
			cardNo = 2;
		}
		else if ( cardNo > maxCardNo)
		{
			cardNo = maxCardNo;
		}
		var quoteid = "quote" + cardNo;
		var quoteElement = document.getElementById(quoteid);

		var QuoteBoxs = document.querySelectorAll("#" + quoteid + " .quote_icon");

		for ( i = 0; i < QuoteBoxs.length; i ++)
		{
			var QuoteBox = QuoteBoxs[i];
			var QuoteBoxviewportOffset = QuoteBox.getBoundingClientRect();
			var QuoteBoxTop = QuoteBoxviewportOffset.top;
			var QuoteBoxH = QuoteBox.scrollHeight;
			console.log("QUoteBox", QuoteBox, "QuoteBoxTop", QuoteBoxTop);
			if (!scrollUp && QuoteBoxTop < 0 ||
				scrollUp && QuoteBoxTop > anistickyTopH + anistickyTopSpaceH + anistickycardContainerH - ShowQuoteStartBottom)
			{
				fadeOutQuote(QuoteBox, scrollUp);
			}
			else if ( scrollUp && QuoteBoxTop >  0||
				!scrollUp &&  QuoteBoxTop < anistickyTopH + anistickyTopSpaceH + anistickycardContainerH - ShowQuoteStartBottom)
			{
				fadeInQuote(QuoteBox);

				
			}

		}
		
		fadeInQuote(quoteElement);

		/* Mark last shown QuoteBox*/
		for ( i = 0; i < QuoteBoxs.length; i++ )
		{
			var QuoteBox = QuoteBoxs[i];
			if ( QuoteBox.classList.contains('showQuote') && ( i == QuoteBoxs.length - 1 || QuoteBoxs[i + 1].classList.contains('hideQuote') ) )
			{
				addClass(QuoteBoxs[i], 'lastshown');
			}
			else
			{
				removeClass(QuoteBoxs[i], 'lastshown');
			}
		}
	}

	lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
	//console.log("scrolltop:", st, "pageno", cardNo);
	
	if (cardNo < 1)
	{
		cardNo = 1;
	}
	else if (cardNo > maxCardNo)
	{
		cardNo = maxCardNo;
	}
	
	if (st < aniheaderH || st > aniheaderH + maxCardNo * quoteboxContainerH)
	{
		/*if (st < aniheaderH)
		{
			stickyHide(anistickyTop);
		}
		else
		{
			stickyMove(anistickyTop);
		}
		stickyMove(anistickyTopSpace);
		stickyMove(anistickybottom);
		stickyMove(anistickyBottomSpace);
		stickyMove(anistickycardContainer);*/
	}
	else
	{
		/*stickyShow(anistickyTop);
		stickyMove(anistickyTop);//stickySticky(anistickyTop);
		stickySticky(anistickyTopSpace);
		stickySticky(anistickyBottomSpace);
		stickyMove(anistickybottom);//stickySticky(anistickybottom);
		stickyMove(anistickycardContainer);//stickySticky(anistickycardContainer);*/
	}
	checkFadeQuote(cardNo - 1 );
	checkFadeQuote(cardNo);
	checkFadeQuote(cardNo + 1 );
	console.log("CardNo", cardNo, "PrecardNo", precardNo);
	if (cardNo !== precardNo)
	{
		checkFadeQuote(precardNo - 1);
		checkFadeQuote(precardNo);
		checkFadeQuote(precardNo + 1);
		precardNo = cardNo;
	}

	for ( i = 1; i <= maxCardNo; i ++)
	{
		var cardbeforeid = "card" + (i - 1);
		var cardid = "card" + i;
		var cardafterid = "card" + (i + 1);
		var cardElement = document.getElementById(cardid);
		var beforecardElement = document.getElementById(cardbeforeid);
		var aftercardElement = document.getElementById(cardafterid);

		//console.log("cardNo", cardNo, "i", i);
		if ( i == cardNo)
		{
			if (cardElement.classList.contains("back"))
			{
				flipAdd(anistickycardContainer);
				addClass(anistickycardContainer, "fliparea");
				
			}
			else if (cardElement.classList.contains("front"))
			{
				flipRemove(anistickycardContainer);
				addClass(anistickycardContainer, "fliparea");				
			}
			else
			{
				if (cardNo < 7)
				{
					flipRemove(anistickycardContainer);
					removeClass(anistickycardContainer, "fliparea");
				}
				else if (cardNo > 8)
				{
					flipAdd(anistickycardContainer);
					addClass(anistickycardContainer, "fliparea");
				}
				
			}
			fadeIn(cardElement);
			
		}
		else
		{
			
			fadeOut(cardElement);
			//setTimeout(function(){console.log(cardElement); cardElement.style.visibility = "hidden";}, 5000);
		}
	}



	

}, false);