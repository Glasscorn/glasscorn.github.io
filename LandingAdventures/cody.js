$(document).ready(function(){
		  $("a").click(function() {
		    var elementClick = $(this).attr("href")
		    var destination = $(elementClick).offset().top;
		    jQuery("html:not(:animated),body:not(:animated)").animate({
		      scrollTop: destination
		    }, 800);
		    return false;
		  });

	//E-mail Ajax Send
	$("button").click(function() { //Change
		$.ajax({
			type: "POST",
			url: "file.php", //Change
			data: $(this).serialize()
		}).done(function() {
			alert("Thank you!");
		});
		return false;
	});
});
