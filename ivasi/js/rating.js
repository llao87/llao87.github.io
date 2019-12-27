$(function(){
	$(".rating > .rating-star").mouseover(function(){
		$(this).prevAll(".rating-star").addClass('rating-star--hover-full');
		$(this).addClass('rating-star--hover-full');
		$(this).nextAll(".rating-star").addClass('rating-star--hover-empty');
	});

	$(".rating-star").mouseout(function(){
		$(".rating-star").removeClass('rating-star--hover-full rating-star--hover-empty');
	});

	$(".rating-star").click(function() {
		let $currentClickedStar = $(this);
		let $currentParent 		= $currentClickedStar.parents('.rating');
		let $currentRatingBlock = $currentParent.find(".rating-star");
		let $productId 			= $currentParent.attr('data-productId');
		let $currentStar		= $currentRatingBlock.index($(this));
		let $currentRating 		= Number($currentStar) + 1;

		let postData = {
			'product_id': $productId,
			'rating': $currentRating,
			'action': 'write'
		};

		console.log("для товара " + $productId, " Оценка " + $currentRating);
		console.log(postData);


		$.ajax({
			url: '/php/rating.php',
			method: 'POST',
			data: postData,
			success: function(response) {
				$currentParent.siblings('.result').html(response);
			}
		});
	});
});
