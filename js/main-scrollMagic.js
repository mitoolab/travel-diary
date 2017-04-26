// ScrollMagic : body
(function(global){
	'use strict';
	// variables
	var ctrl,
			scene_list,
			scene;

	ctrl = new ScrollMagic.Controller();
	scene_list = '.intro, #albums'.split(', ');

	scene_list.forEach(function(trigger_el_selector, idx) {
			scene = new ScrollMagic.Scene({
			'triggerElement': trigger_el_selector,
			'triggerHook': 0,
			'offset': -700,
		})
		.setClassToggle(trigger_el_selector, 'fade-in')
		.addTo(ctrl);
	});
})(ScrollMagic);
