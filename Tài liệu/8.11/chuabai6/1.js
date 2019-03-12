 $(function(){
	 console.log('tada ! ');
	 // ham click 
	 $('.n1').click(function(){
	 	$('body').animate({scrollTop:$('#sanpham').offset().top});
	 	return false; 
	 })
$('.n2').click(function(){
	 	$('body').animate({scrollTop:$('#gioithieu').offset().top});
	 	return false; 
	 })


$('.n3').click(function(){
	 	$('body').animate({scrollTop:$('#lienhe').offset().top});
	 	return false; 
	 })






	 $(window).scroll(function(){
 	 	vitrihientai = $('body').scrollTop();
	 	console.log(vitrihientai);

	 	if(vitrihientai >337){
	 		$('.navbar-fixed-top').addClass('tienhoa');
	 	} 
	 	else if(vitrihientai <337){
	 		$('.navbar-fixed-top').removeClass('tienhoa');
	 	}


	 	// mo rong 
	 	if(vitrihientai > 500) {
	 		$('.portfolio').addClass('bienra');
	 	}
	 	else if(vitrihientai < 700) {
	 		$('.portfolio').removeClass('bienra');
	 	}

	 })
})  
	 
     