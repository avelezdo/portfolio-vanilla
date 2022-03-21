function attachHoverAnimationOnItems(listOfItems, hard = false) {
	listOfItems.forEach((item, index, array) => {
		let lastItemIndex = array.length - 1;

		// Add hover effect
		item.addEventListener('mouseenter', function (e) {
			if (window.innerWidth > 952) {
				// if it's the first item
				if (index === 0) {
					for (let i = index + 1; i < array.length; i++) {
						listOfItems[i].classList.add(`push-right${hard ? '_hard' : ''}`);
					}
					// if it's the last item
				} else if (index === lastItemIndex) {
					for (let i = index - 1; i >= 0; i--) {
						listOfItems[i].classList.add(`push-left${hard ? '_hard' : ''}`);
					}
					// if it's any item in-between
				} else {
					for (let i = 0; i < array.length; i++) {
						if (i < index) {
							listOfItems[i].classList.add(`push-left${hard ? '_hard' : ''}`);
						} else if (i > index) {
							listOfItems[i].classList.add(`push-right${hard ? '_hard' : ''}`);
						}
					}
				}
			}
		});

		// Remove hover effect
		item.addEventListener('mouseleave', function (e) {
			if (window.innerWidth > 952) {
				// if it's the first item
				if (index === 0) {
					for (let i = index + 1; i < array.length; i++) {
						listOfItems[i].classList.remove(`push-right${hard ? '_hard' : ''}`);
					}
					// if it's the last item
				} else if (index === lastItemIndex) {
					for (let i = index - 1; i >= 0; i--) {
						listOfItems[i].classList.remove(`push-left${hard ? '_hard' : ''}`);
					}
				} else {
					for (let i = 0; i < array.length; i++) {
						if (i < index) {
							listOfItems[i].classList.remove(`push-left${hard ? '_hard' : ''}`);
						} else if (i > index) {
							listOfItems[i].classList.remove(`push-right${hard ? '_hard' : ''}`);
						}
					}
				}
			}
		});
	});
}
