$(function(){


// console.log("Hi");





$("#contactForm").validate({

		// errorLabelContainer: "#messageBox",
  // 		 wrapper: "li",
		
		rules:{

			name: {
				required: true,
				minlength: 2
			},
	

			email: {
				required: true,
				 email: true
			},

			phone: {
				required: true,
				digits:true
			
			},


			message: {
				required: false
				
				
			}




		}, //end of rules




		messages: {
			
			name:{
				required: "Name is Required",

				
			},


			email:{
				required: "Email is Required",
				
			},


			phone:{
				required: "Phone is Required",
				 digits: "numbers only",
				
			},

			// message:{
			// 	required: "Message is Required",
			// 	// digits: "numbers only",
				
			// }

		}, // end of messages







		highlight:function(element,errorClass) {
			$(element).addClass("animated pulse");
			
			 $(element).addClass("redBorder");

			$(element).one("animationend",function(){
				$(this).removeClass("animated pulse");
			});
		}









	});



});