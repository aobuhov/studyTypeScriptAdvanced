const btn = document.querySelector('#bt')
if (btn) {
    btn!.addEventListener('click',
        () => {
            console.log('btn clicked')
        })
} else {
    console.log('btn is null')
}