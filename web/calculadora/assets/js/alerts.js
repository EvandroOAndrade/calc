function message(message){
		var t = $.toast({
           text: message,
           
           position: 'bottom-right'
       });

       setTimeout(function(){
       	t.reset();
       }, 5000);
	}