

	// Play initial animations on page load.
	$(function () {
		setTimeout(function () {
			$('#preloader').fadeOut('slow', function () {
				$(this).remove();
			});
		}, 2000);
	});
