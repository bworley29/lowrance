$(document).ready(function ()
{
	var shortcutPage = $('div#shortcuts');
	var mappingPage = $('div#mapping');
	var homePage = $('div#home');
	var mappingInfo = $('div#mappingInfo');
	var $bottomBtns = $('div#mainNav').clone();
	$bottomBtns.each(function ()
	{
		$(this).appendTo('[class*="PageView"]');
	});
	//
	//$('.mappingPageView ul.internalNav').addClass('mappingMenu').clone().insertAfter('.mappingSectionMenu');
	//
	$('.shortcutBtn').click(function ()
	{
		shortcutPage.show();
		homePage.hide();
	});
	//
	$('.mappingBtn').click(function ()
	{
		mappingPage.show();
		homePage.hide();
	});
	//
	$('ul li a.mappingInfo').click(function ()
	{
		mappingInfo.show();
		mappingPage.hide();
	});
	
	$('.fa-home').click(function ()
	{
		$('[class*="PageView"]:visible').hide();
		homePage.show();
	});

	
	$('.fa-chevron-circle-down').toggle(

	function ()
	{
		$('.mappingMenu').slideDown('fast');
		$(this).removeClass('fa-chevron-circle-down').addClass('fa-times-circle');
	}, function ()
	{
		$('.mappingMenu').slideUp('fast');
		$(this).removeClass('fa-times-circle').addClass('fa-chevron-circle-down');
	});
});