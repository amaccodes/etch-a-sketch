// display grid 

const parentNode = document.querySelector('#main-grid')

const message = 'Enter the number of pixels you want each side of the sketch box to have.'
let gridSizing = window.prompt(message)

for (i = 0; i <= ((gridSizing ** 2) - 1); i++) {
    const divElement = document.createElement('div')
    divElement.setAttribute('id', 'pixel')
    divElement.style.width = '8px'
    divElement.style.height = '8px'
    parentNode.style.width = (8 * gridSizing) + 'px'
    divElement.addEventListener('mouseover', () => {
        divElement.style.backgroundColor = 'black'
    })
    parentNode.appendChild(divElement)
}




