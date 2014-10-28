$(function(){
	var menuActive = "page-menu-active";
	$(".page-nav-toggle").click(function(){
		$("body").toggleClass(menuActive);
	});
	
	$(".page-chrome,.page-nav-list a").click(function(){
		if($("body").hasClass(menuActive)){
			$("body").toggleClass(menuActive);
		}
	});
});
