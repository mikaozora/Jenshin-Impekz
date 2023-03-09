const tabs = document.querySelectorAll(".tabs .btn");
// console.log(tabs);

const faces= document.querySelectorAll(".tabs-content .wrap-content .face-content img");
// console.log(faces);

const contents = document.querySelectorAll(".tabs-content .wrap-content");
// console.log(contents);

const headContents = document.querySelectorAll(".wrap-left .wrap-head .head-content");
// console.log(headContents);

const charPicts = document.querySelectorAll(".wrap-right .char-pict");
// console.log(charPicts);

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("on");
        })
        contents.forEach(content => {
            content.classList.remove("on");
        })
        console.log(index);
        tabs[index].classList.add("on");
        contents[index].classList.add("on");

        headContents.forEach(head => {
            head.classList.remove("on");
        })
        charPicts.forEach(pict => {
            pict.classList.remove("on");
        })
        // console.log(index);
        headContents[index*2].classList.add("on");
        charPicts[index*2].classList.add("on");
    })

    faces.forEach((face, index) => {
        face.addEventListener("click", () => {
            headContents.forEach(head => {
                head.classList.remove("on");
            })
            charPicts.forEach(pict => {
                pict.classList.remove("on");
            })
            // console.log(index);
            headContents[index].classList.add("on");
            charPicts[index].classList.add("on");
        })
    })

})