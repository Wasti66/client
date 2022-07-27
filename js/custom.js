
	   $(document).ready(function(){
		/*-- uppper Button Start --*/
			$(window).scroll(function(){
				
				var x = $(window).scrollTop();
				
				if(x > 1000){
					
					$('#upper').fadeIn(1000);
				}else{
					
					$('#upper').fadeOut(400);
				}
			});
			$('#upper').click(function(){
				$('html').animate({scrollTop:0},800);
			});
			
		});
		
		var $grid = $('.gallery').isotope({
		  // options
		  itemSelector: '.gallery-item',
		  layoutMode: 'fitRows'
		});
		// filter items on button click
		$('.gallery-filter').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
		});
	 