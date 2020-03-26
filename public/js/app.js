console.log('javascript executed');

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const loc = document.querySelector('#msg1')
const frcst = document.querySelector('#msg2')

weatherForm.addEventListener('submit', (e) => {

    e.preventDefault()
    const location = search.value;
    loc.textContent = 'loading..'
    frcst.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                loc.textContent = data.error
            } else {
                loc.textContent = data.location
                frcst.textContent = data.forecast
            }
        })
    })
})