//导航划过效果
$(function() {
	var $t, leftX, newWidth;
	let $div=$(".pull-down ");
	let $hg=$(".center");

	$('.son-nav ul').append('<div class="block"></div>');
	var $block = $('.block');

	$block.width($(".current").width()).css('left', $('.current a').position().left).data('rightLeft', $block.position().left).data('rightWidth', $block.width());

	$('.son-nav ul li').find('a').hover(function() {
		$t = $(this);
		leftX = $t.position().left;
		newWidth = $t.parent().width();

		$block.stop().animate({
			left: leftX,
			width: newWidth
		},300);
		$div.css("display","block");
	}, function() {
		$block.stop().animate({
			left: $block.data('rightLeft'),
			width: $block.data('rightWidth')
		},300)
		$div.css("display","none");
	})
	$div.hover(function(){
	$div.css({display:'block'});
},
function(){
	$div.css({display:'none'});
}
);
	
});






