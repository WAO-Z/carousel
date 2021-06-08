let leftArrow = document.querySelector(".leftArrow");
let rightArrow = document.querySelector(".rightArrow");
let pointList = document.querySelectorAll(".pointBox li");
let ul = document.querySelector(".carouselBox ul");
let carouselBox = document.querySelector(".carouselBox");
let nowIndex = 0;

/**
 * 右箭头事件
 */
rightArrow.addEventListener("click", function () {

	// nowIndex++;

	// if(nowIndex == ul.childElementCount){
	// 	nowIndex = 0
	// }

	(++nowIndex == ul.childElementCount) && (nowIndex = 0)

	ul.style.transform = `translateX(-${nowIndex}00%)`;
	pointList.forEach(function (item) {
		item.classList = ""
	})

	pointList[nowIndex].classList = "active"
})

/**
 * 左箭头事件
 */
leftArrow.addEventListener("click", function () {
	// nowIndex--;

	// if (nowIndex < 0) {
	// 	nowIndex = ul.childElementCount - 1;
	// }

	(--nowIndex < 0) && (nowIndex = ul.childElementCount - 1)

	ul.style.transform = `translateX(-${nowIndex}00%)`;

	pointList.forEach(function (item) {
		item.classList = ""
	})

	pointList[nowIndex].classList = "active"
})

//小圆点点击事件
pointList[2].addEventListener("click", function () {

	ul.style.transform = `translateX(-200%)`;
	pointList.forEach(function (item) {
		item.classList = ""
	})
	pointList[2].classList = "active"
})
pointList[1].addEventListener("click", function () {

	ul.style.transform = `translateX(-100%)`;
	pointList.forEach(function (item) {
		item.classList = ""
	})
	pointList[1].classList = "active"
})
pointList[0].addEventListener("click", function () {

	ul.style.transform = `translateX(0%)`;
	pointList.forEach(function (item) {
		item.classList = ""
	})
	pointList[0].classList = "active"
})

//自动轮播
let auto = setInterval(function () {
	(++nowIndex == ul.childElementCount) && (nowIndex = 0)

	ul.style.transform = `translateX(-${nowIndex}00%)`;
	pointList.forEach(function (item) {
		item.classList = ""
	})
	pointList[nowIndex].classList = "active"

}, 1000)

//取消轮播
carouselBox.addEventListener("mouseenter", function () {
	clearInterval(auto)
})

//添加轮播
carouselBox.addEventListener("mouseleave", function () {
	auto = setInterval(function () {
		(++nowIndex == ul.childElementCount) && (nowIndex = 0)

		ul.style.transform = `translateX(-${nowIndex}00%)`;
		pointList.forEach(function (item) {
			item.classList = ""
		})
		pointList[nowIndex].classList = "active"

	}, 1000)
})


