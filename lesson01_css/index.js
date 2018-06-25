// alert("AAA");
// click 만들기
// 만들방법 다양함
// 하지만 jquery짱짱맨

function disableAllBtns() {
    for (let btnIdx = 1; btnIdx <= 4; btnIdx++) {
        $(`#header-btn-${btnIdx}`).removeClass("clicked");
    }
}

function disableBtn(id) {
    $(`#${id}`).removeClass("clicked");
}

prev = "";
for (let btnIdx = 1; btnIdx <= 4; btnIdx++) {
    // console.log(`#header-btn-${i}`);
    $(`#header-btn-${btnIdx}`).click(function () {
        // alert(this);
        if (prev === "") {
            disableAllBtns();
        } else {
            disableBtn(prev);
        }
        $(`#${this.id}`).addClass("clicked");
        prev = this.id;
    });
}