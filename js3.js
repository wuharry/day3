; (function () {
    const inputs = document.querySelectorAll('.controls input')
    //選取html裡class=controls底下的input標籤並把資料轉為nodelist

    function changeHandler() {
        //this-->觸發這個事件的人(指的是這個input)
        console.log(this.name, this.value)
        document.documentElement.style.setProperty('--' + this.name, this.value + (this.name === 'base' ? '' : 'px'))
        //選取到root(CSS的)，並修改其內容
        //條件? 成立執行:不成立執行
    }

    inputs.forEach(function (input) {
        input.addEventListener('change', changeHandler)
        //事件監聽器，當發生change(滑鼠放開時觸發)類的事件時，執行changeHandler函式
        input.addEventListener('mousemove', changeHandler)
        //事件監聽器，當發生mousemove(及時監聽/觸發)類的事件時，執行changeHandler函式
        //input會傳值出來
    })

})()
