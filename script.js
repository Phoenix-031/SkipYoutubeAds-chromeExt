function skipads() {
    const skipbtn = document.getElementsByClassName("ytp-ad-skip-button")[0]

    if(skipbtn){
        skipbtn.click()
        console.log("ad skipped")
    }
}

setInterval(skipads,100)