// index.html animation scripts

// variables
var contents,
		header;
// get ref.
contents = document.querySelectorAll('.contents-wrap');
header = document.querySelector('.header');

//album animation
contents.forEach(function(content, index){
	content.addEventListener('mouseover', function() {
		var image = this.parentNode.children[1].firstElementChild;
		this.setAttribute('style','top: -30px; transition: all 0.3s ease-in-out;');
		image.setAttribute('style','transform: scale(1.15); transition: all 0.5s ease-in-out;');
	});

	content.addEventListener('mouseout', function() {
		var image = this.parentNode.children[1].firstElementChild;
		this.setAttribute('style','top: 0px; transition: all 0.3s ease-in-out;');
		image.setAttribute('style','transform: scale(1); transition: all 0.5s ease-in-out;');
	});
});
