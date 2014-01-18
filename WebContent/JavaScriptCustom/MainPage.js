$(document).ready(
		function() {

			$("#menu-list li:first-child").addClass("current-menu-item");

			$(".menu-item").click(
					function(event) {
						$(this).addClass("current-menu-item").siblings()
								.removeClass("current-menu-item");

						event.preventDefault();
					});

			$(".menu-item").hover(function() {
				$(this).addClass("active-menu-item");
			}, function() {
				$(this).removeClass("active-menu-item");
			});

		});