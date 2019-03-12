 $(function(){
	 console.log('tada ! ');

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
	 
     