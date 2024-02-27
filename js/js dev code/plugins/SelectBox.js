function SelectBox(selector, settings)  {

	// let _sb = new SelectBox(el, {
	// 	on: {
	// 		open: function(){
	// 			console.log('open box');
	// 		},
	// 		close: function(){
	// 			console.log('close box');
	// 		},
	// 		select: function(option){
	// 			console.log('select box', option.value);
	// 		}
	// 	}
	// });


	this.selector = selector;
	this.settings = settings || {};
	
	this.init = function() {
		this.inputLabel = this.selector.dataset.selectboxLabel || false;
		let get_options = this.selector.querySelectorAll('option');
		this.id = Math.floor(Math.random() * 1000000);
		
		this.selector.dataset.selectboxId = this.id;
		
		this.options = [];
		this.callbacks = {};
		
		if(this.settings.on){
			this.callbacks = this.settings.on;
		}
		
		if(get_options) {
			get_options.forEach(function(option){
				this.options.push({
					value: option.value || option.innerHTML,
					label: option.innerHTML,
					selected: option.selected || false,
					disabled: option.disabled || false
				});
				
				if(option.selected)
				{
					this.selectedOption = {
						value: option.value || option.innerHTML,
						label: option.innerHTML,
						selected: true
					};
				}
			}.bind(this));
		}
		
		if(this.options.length) {
			this.render();
			this.initTargets();
			this.initEvents();
		}
	},
	
	this.render = function() {
		let _items_html = '';
			
		this.options.map(function(item){
			let _item_classes = ['selectbox_list_item'];

			if(item.selected){
				_item_classes.push('selected');
			}
			
			if(item.disabled){
				_item_classes.push('disabled');
			}
			
			_items_html += `<li class="${_item_classes.join(' ')}" data-value="${item.value}" data-disabled="${item.disabled ? 1 : 0}">${item.label}</li>`;
			return item;
		});

		let _selected = this.selectedOption || this.options[0];

		let _html = `
			<div class="selectbox_wrapper" id="selectbox_${this.id}">
				<div class="selectbox_input">
					${this.inputLabel ? `<span class="selectbox_input_label">${this.inputLabel}</span>` : ''}					
					<span class="selectbox_input_value" data-value="${_selected.value}">${_selected.label}</span>
					<span class="selectbox_input_arrow">
						<i class="icon-arrow-bottom-2"></i>
					</span>
				</div>
				<ul class="selectbox_list">${_items_html}</ul>
			</div>
			`;

		this.selector.insertAdjacentHTML('afterEnd', _html);
		this.selector.style.display = 'none';
	},
	
	this.initTargets = function() {
		this.selectBox = this.selector.nextElementSibling;
		this.selectBoxInput = this.selectBox.querySelector('.selectbox_input');
		this.selectBoxInputValue = this.selectBoxInput.querySelector('.selectbox_input_value');
		this.selectBoxList = this.selectBox.querySelector('.selectbox_list');
		this.selectBoxListItems = this.selectBoxList.querySelectorAll('.selectbox_list_item');
	}
	
	this.initEvents = function() {
		this.selectBoxInput.addEventListener('click', this.onClick.bind(this));
			
		this.selectboxOpenEvent = new CustomEvent('selectbox_open');
		this.selectBox.addEventListener('selectbox_open', this.onOpen.bind(this), false);
		
		this.selectboxCloseEvent = new CustomEvent('selectbox_close');
		this.selectBox.addEventListener('selectbox_close', this.onClose.bind(this), false);
		
		document.addEventListener('click', function(e){
			if(!e.target.closest(`#selectbox_${this.id}`)){
				this.selectBox.classList.remove('selectbox_open');
			}
		}.bind(this));
		
		this.selectBoxListItems.forEach(function(item){
			item.addEventListener('click', this.onSelect.bind(this));
		}.bind(this));
	},
	
	this.onClick = function(e) {
		e.preventDefault();
		this.selectBox.classList.contains('selectbox_open') ? (
			this.selectBox.dispatchEvent(this.selectboxCloseEvent)
		) : (
			this.selectBox.dispatchEvent(this.selectboxOpenEvent)
		);
	},
	
	this.onOpen = function() {
		this.selectBox.classList.add('selectbox_open');
		
		if(this.callbacks.open && typeof(this.callbacks.open) == 'function'){
			this.callbacks.open.call(this);
		}
		
		//this.setDirection();
	},
	
	this.setDirection = function() {
		let _max = window.getComputedStyle(this.selectBoxList).getPropertyValue('max-height');
		_max = parseInt(_max);

		let _min = window.innerHeight - (this.selectBox.offsetTop + this.selectBox.offsetHeight);

		if(!isNaN(_max) && _min < _max){
			this.selectBox.classList.add('selectbox_direction_bottom');
		} else{
			this.selectBox.classList.remove('selectbox_direction_bottom');
		}
	},
	
	this.onClose = function() {
		this.selectBox.classList.remove('selectbox_open');
		
		if(this.callbacks.close && typeof(this.callbacks.close) == 'function'){
			this.callbacks.close.call(this);
		}
	},
	
	this.onSelect = function(e) {
		e.preventDefault();
		
		if(parseInt(e.target.dataset.disabled)){
			return;
		}
		
		this.selectBoxInputValue.innerHTML = e.target.innerHTML;
		this.selectBoxInputValue.dataset.value = e.target.dataset.value;
		
		this.selector.value = e.target.dataset.value;
		this.selector.dispatchEvent(new Event('change'));
		
		this.selectBoxListItems.forEach(function(el){
			el.classList.remove('selected');
		});
		
		e.target.classList.add('selected');
		
		if(this.callbacks.select && typeof(this.callbacks.select) == 'function') {
			this.callbacks.select.call(this, {
				value: e.target.dataset.value,
				label: e.target.innerHTML
			});
		}
		
		this.selectBox.dispatchEvent(this.selectboxCloseEvent);
	}

	this.init();
}

export default SelectBox;