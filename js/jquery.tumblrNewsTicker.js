(function($) {
	
	var defaults = {
		time:	5000,
		title:	'Tumblr News Ticker',
		blog:	'http://geocamppt.tumblr.com'
	};
	
	$.fn.tumblrNewsTicker = function(options) {
		
		// Handle the default settings
		var settings = $.extend({}, defaults, options);
		
		// Remove trailing slashes and Assemble the Tumblr API URL 
		var url = settings.blog.replace(/\/$/,'') + "/api/read/json?num=20&type=text&callback=?";
		
		this.append('<div class="tn-container">\
						<h2 class="tn-header">'+ settings.title +'</h2>\
						<div class="tn-data"><ul></ul></div>\
						<div class="tn-footer"></div>\
					</div>');

		var postList = this.find('.tn-data ul');
		
		//Get the posts as json	
		$.getJSON(url, function(data) {
			$.each(data.posts, function(i,posts){ 
				
				// Remove any HTML tags
				var title = posts['regular-title'].replace(/<\/?[^>]+>/gi, '');

				// Calculate the human-readable relative time
				var time = $.timeago( new Date( posts['unix-timestamp'] * 1000 ) );
				
				postList.append('<li class="tn-post">\
									<a href="' + posts.url + '" target="_blank">'+title+' </a>\
									<span>' + time + '</span>\
								</li>');
			});
	
			// Show the first 5 news items
	
			postList.find('li')
					.slice(0,5)
					.show()
					.last()
					.addClass('no-border');

			// Rotate posts every settings.time ms 
			// (only if they are more than the limit)
			
			if(data.posts.length > 5) {
					
				setInterval(function() {
						
					var posts =  postList.find('li');
					
					posts.first().slideUp('slow', function() {
						$(this).appendTo(postList);
					})
					
					posts.eq(4).removeClass('no-border');
					posts.eq(5).slideDown('slow').addClass('no-border');
							
				}, settings.time);
				
			}
			
		});
		
	 	return this;
	 	
	};
})(jQuery);