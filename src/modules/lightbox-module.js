const clonedElements = {};

function cloneElement(elements, arrayName) {
    clonedElements[arrayName] = [];

    if (Array.isArray(elements)) {
        elements.forEach((element) => {
            const clonedElement = element.cloneNode(true);
            clonedElements[arrayName].push(clonedElement);
        });
    } else {
        const clonedElement = elements.cloneNode(true);
        clonedElements[arrayName].push(clonedElement);
    }
}



export { cloneElement, clonedElements }
