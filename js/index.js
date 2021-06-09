let leftArrow = document.querySelector(".leftArrow");
let rightArrow = document.querySelector(".rightArrow");
let pointList = document.querySelectorAll(".pointBox li");
let ul = document.querySelector(".carouselBox ul");
let carouselBox = document.querySelector(".carouselBox");
let nowIndex = 0;
let timer;

/**
 * 左箭头事件
 */
leftArrow.addEventListener("click", function () {

	if (++nowIndex == ul.childElementCount) {
		leftEndRun();
	} else {
		run();
	}

})

/**
 * 左边尽头函数->这一张去到第一张
 */
function leftEndRun() {
	ul.appendChild(ul.firstElementChild.cloneNode(true));
	ul.style.transform = `translateX(-${nowIndex}00%)`;

	ul.addEventListener("transitionend", function () {
		ul.style.transition = "none"
		ul.style.transform = `translateX(0%)`;

		//读取ul的transition属性 提醒代码运行时注意样式改变的能力
		getComputedStyle(ul).transition;
		ul.style.transition = "";

		ul.removeChild(ul.lastElementChild);
		nowIndex = 0
	}, {
		once: true
	})

	pointList[2].classList.remove("active")
	pointList[0].classList.add("active");


}

/**
 * 右箭头事件
 */
rightArrow.addEventListener("click", function () {

	nowIndex--
	if (nowIndex == -1) {
		ul.appendChild(ul.firstElementChild.cloneNode(true));
		ul.style.transition = "none"
		ul.style.transform = `translateX(-300%)`;
		nowIndex = 2

		getComputedStyle(ul).transition;
		ul.style.transition = ""
		ul.style.transform = `translateX(-200%)`;

		pointList[0].classList.remove("active")
		pointList[2].classList.add("active");
		setTimeout(function () {
			ul.removeChild(ul.lastElementChild);
		}, 300)
	} else {
		run()
	}
})


/**
 * 小圆点的点击事件
 */
pointList.forEach(function (item, index) {
	item.addEventListener("click", function () {
		nowIndex = index;
		run();
	})
})

/**
 * 自动轮播
 */
timer = setInterval(function () {
	if (++nowIndex == ul.childElementCount) {
		leftEndRun();
	} else {
		run();
	}

}, 2000)

/**
 * 鼠标移入事件
 */
carouselBox.addEventListener("mouseenter", function () {
	clearInterval(timer);
})

/**
 * 鼠标移出事件
 */
carouselBox.addEventListener("mouseleave", function () {
	timer = setInterval(function () {


		if (++nowIndex == ul.childElementCount) {
			leftEndRun();
		} else {
			run();
		}

	}, 2000)
})

/**
 * 运行的主函数
 */
function run() {
	ul.style.transform = `translateX(-${nowIndex}00%)`;

	pointList.forEach(function (item) {
		item.classList.remove("active");
	})

	pointList[nowIndex].classList.add("active");

}
