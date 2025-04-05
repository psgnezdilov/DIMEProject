const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.reset();
});
const toastTrigger = document.getElementById('ToastBtn')
const toastLiveExample = document.getElementById('Toast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
})
}