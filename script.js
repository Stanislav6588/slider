'use strict'

class Slider{
	constructor({item, items, start, active, end}){
		this.item = document.querySelector(item);
		this.items = document.querySelectorAll(items);
		this.start = start ;
		this.active = active ;
		this.end = end ;
		this.speed = 3000;
		this.current = 0;
	}

	autoPlay(){
		this.prev(this.current);
		this.current++;
		if(this.current >= this.items.length){
			this.current = 0;
			}
		this.next(this.current);
	}

	prev(index){
		this.items[index].classList.remove(this.active);
		this.items[index].classList.add(this.end);
		setTimeout(() => {
			this.items[index].classList.remove(this.end);
			this.items[index].classList.add(this.start);
		}, 1500);
	}

	next(index){
		this.items[index].classList.remove(this.start);
		this.items[index].classList.add(this.active);
	}

	startSlide(){
		setInterval(this.autoPlay.bind(this), this.speed);

	}

	defaultSettings(){
		let style = document.createElement('link');
		style.setAttribute('rel', 'stylesheet');
		style.setAttribute('href', 'slider.css');
		document.head.append(style);

		this.items.forEach((i) => i.classList.add(this.start));
		this.items[0].classList.remove(this.start);
		this.items[0].classList.add(this.active);
	}

	init() {
	this.defaultSettings();
	this.startSlide();
	}
}