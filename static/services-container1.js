
// -------------------------tiles filleter------------------------
const btnfilter = document.querySelector(".filter-box");
const products1 = document.querySelectorAll(".tiles1");
const products2 = document.querySelectorAll(".tiles2");



window.onload = () => {
    btnfilter.onclick = (selectedfilter) => {
        if (selectedfilter.target.classList.contains("filter-btn")) {
            btnfilter.querySelector(".filter-active").classList.remove("filter-active");
            selectedfilter.target.classList.add("filter-active");

            let filtername = selectedfilter.target.getAttribute("data-filter")
            
            
            products1.forEach((product1) => {
                let filterproduct1 = product1.getAttribute("data-filter");
               

                if (filtername == "all-floor-tiles" || filtername == filterproduct1) {
                    product1.classList.add("show");
                    product1.classList.remove("hide");

                } else {
                    product1.classList.remove("show");
                    product1.classList.add("hide");
                }
            });
            products2.forEach((product2) => {
                let filterproduct2 = product2.getAttribute("data-filter");
               

                if (filtername == "all-wall-tiles" || filtername == filterproduct2) {
                    product2.classList.add("show");
                    product2.classList.remove("hide");

                } else {
                    product2.classList.remove("show");
                    product2.classList.add("hide");
                }
            });

        }
    }

}


// ----------------function ecatlouge----------------


