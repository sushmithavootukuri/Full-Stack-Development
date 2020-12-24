let timer = document.createElement("div")
timer.setAttribute("class", "timer text-primary text-bolder text-center");
let heading = document.createElement("h3")
heading.innerText = "Celebration begins in"
let message = document.createElement("h1")
setTimeout(() => {
    message.innerHTML = "10"
    setTimeout(() => {
        message.innerHTML = "9"
        setTimeout(() => {
            message.innerHTML = "8"
            setTimeout(() => {
                message.innerHTML = "7"
                setTimeout(() => {
                    message.innerHTML = "6"
                    setTimeout(() => {
                        message.innerHTML = "5"
                        setTimeout(() => {
                            message.innerHTML = "4"
                            setTimeout(() => {
                                message.innerHTML = "3"
                                setTimeout(() => {
                                    message.innerHTML = "2"
                                    setTimeout(() => {
                                        message.innerHTML = "1"
                                        setTimeout(() => {
                                            message.innerHTML = "0"
                                            setTimeout(() => {
                                                heading.innerText = "";
                                                message.innerHTML = "Happy Independence Day!!"
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
timer.append(heading, message)
// row.appendChild(timer)
// main_div.appendChild(row)
document.body.append(timer)