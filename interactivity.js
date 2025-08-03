// display grid 

const parentNode = document.querySelector('#main-grid')

const message = 'Enter the number of pixels you want each side of the sketch box to have. Max number of pixeled allowed is 50.'

const refresh = document.querySelector('#refresh')
const button = document.createElement('button')
button.textContent = 'Begin'
refresh.appendChild(button)


button.addEventListener('click', () => {
    if (button.textContent === 'Begin') {
        button.textContent = 'Refresh'
    } else if (button.textContent === 'Refresh') {
        while (parentNode.firstElementChild) {
        parentNode.removeChild(parentNode.firstElementChild)
    }
    }
    gridSizing = window.prompt(message)

    if (isNaN(gridSizing) || gridSizing <= 0) {
        alert('Please enter a valid number of pixels.')
        parentNode.style.border = 'none'
        button.textContent = 'Begin'
        return
    } else if (gridSizing > 50) {
        alert('The maximum number of pixels you can select is 50.')
        parentNode.style.border = 'none'
        button.textContent = 'Begin'
        return
    }
    parentNode.style.border = 'solid red 20px'
    for (i = 0; i <= ((gridSizing ** 2) - 1); i++) {
        const divElement = document.createElement('div')
        divElement.setAttribute('id', 'pixel')
        divElement.style.width = '8px'
        divElement.style.height = '8px'
        divElement.style.backgroundColor = 'white'
        parentNode.style.width = (8 * gridSizing) + 'px'
        divElement.addEventListener('mouseover', () => {
        divElement.style.backgroundColor = 'black'
    })
    parentNode.appendChild(divElement)
}
    
}
)


