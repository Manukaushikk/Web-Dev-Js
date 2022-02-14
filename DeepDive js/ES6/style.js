function fakeDownloadPromise(correct) {
    return new Promise(function(resolve, reject) {


        setTimeout(function() {
            let downloadData = "Some data we ripped of the interwebs"
            console.info("Downloading has completed")
            if (correct) {
                resolve(downloadData)
            } else {
                reject(new Error("Could not download file"))
            }
        }, 1000)
    })
}

let downloaded = fakeDownloadPromise(true);
downloaded.catch(function(err) {
    console.log(err)
})

setTimeout(function() {
    downloaded.then(function(data) {
        console.info("The data that was downloaded is this -->")
        console.info(data)
    })
}, 3000)