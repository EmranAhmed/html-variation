/**
 *
 *
 * Color: Red | Green | Blue  = 3
 * Size:  100 | 200           = 2
 * Type: Still | Wood        = 2
 *
 *
 * */


/*const variations = [
    {attributes : {color : 'red', size : '100', type : 'still'}, price : '$34.00'},

    {attributes : {color : 'red', size : '200', type : 'still'}, price : '$40.00'},

    {attributes : {color : 'green', size : '100', type : 'still'}, price : '$56.00'},

    // {attribute : {color : 'green', size : 200}, price : '$67.00'},

    {attributes : {color : 'blue', size : '100', type : 'still'}, price : '$89.00'},

    {attributes : {color : 'blue', size : '200', type : 'still'}, price : '$12.00'},

    {attributes : {color : 'blue', size : '200', type : 'wood'}, price : '$15.00'},
];*/

const variations = [
    {attributes : {color : 'red', size : '100'}, price : '34.00'},

    {attributes : {color : 'red', size : '200'}, price : '40.00'},

    // {attributes : {color : 'green', size : ''}, price : '56.00'},

     {attributes : {color : 'green', size : '200'}, price : '67.00'},

    {attributes : {color : 'blue', size : '100'}, price : '89.00'},

    //{attributes : {color : 'blue', size : '200'}, price : '12.00'},
];


function isVariationMatched(currentVariation, attributeValue, chosenValue){
    return attributeValue === chosenValue || '' === attributeValue
}

function isAttributeMatched(attributeValue, chosenValue){
    return attributeValue === chosenValue || '' === attributeValue
}

function findMatchingVariation(variations, chosen) {

    return variations.filter((currentVariation) => {
        // return currentVariation.attributes[key] === chosen[key] || '' === currentVariation.attributes[key]
        return Object.keys(chosen).every((key) => isVariationMatched(currentVariation, currentVariation.attributes[key], chosen[key]))
    })
}

function findMaybeAvailableAttribute(variations, chosen) {

    const matchedVariations = variations.filter((currentVariation) => {
        // return currentVariation.attributes[key] === chosen[key] || '' === currentVariation.attributes[key]
        return Object.keys(chosen).some((key) => isAttributeMatched(currentVariation.attributes[key], chosen[key]))
    })

    return matchedVariations.reduce((available, maybeVariation) => {

        for (const [key, value] of Object.entries(maybeVariation.attributes)) {

            if (!Object.keys(chosen).includes(key)) {

                if (typeof available[key] === 'undefined') {
                    available[key] = []
                }

                available[key].push(value)

            }
        }

        return available

    }, {})
}

function getChosenAttributes() {

    let data = {
        totalAttributeCount    : 0,
        selectedAttributeCount : 0,
        selectedAttributes     : {}
    }

    document.querySelectorAll('[data-attribute_name]').forEach((attribute) => {

        const name = attribute.dataset.attribute_name
        data.totalAttributeCount++

        attribute.querySelectorAll('[data-attribute_value]').forEach((item) => {

            if (item.classList.contains('selected')) {
                const value = item.dataset.attribute_value
                data.selectedAttributeCount++
                data.selectedAttributes[name] = value
            }

        })
    })

    return data

}

document.querySelectorAll('[data-attribute_value]').forEach((item, index) => {

    item.addEventListener('click', (event) => {
        const element = event.target

        const attribute_name  = element.closest('.attributes').dataset['attribute_name']
        const attribute_value = element.dataset['attribute_value']

        element.closest('.attributes').querySelectorAll('li').forEach((li) => { li.classList.remove('selected') })

        element.classList.add('selected')
        element.classList.remove('disable')

        //

        const choosen = getChosenAttributes()

        const availables = findMaybeAvailableAttribute(variations, {[attribute_name] : attribute_value})

       // console.log(availables)

        for (const [key, values] of Object.entries(availables)) {
            document.querySelectorAll(`[data-attribute_name="${key}"] [data-attribute_value]`).forEach((attribute) => {

                const value = attribute.dataset.attribute_value

                attribute.classList.remove('disable')

               if( values[0] === '' ) {
                  return;
               }

                if (!values.includes(value)) {
                    attribute.classList.remove('selected')
                    attribute.classList.add('disable')
                }

            })
        }

        document.querySelector('#price').innerText = ''

        if (choosen.totalAttributeCount === choosen.selectedAttributeCount) {
            const variation = findMatchingVariation(variations, choosen.selectedAttributes)

            if (variation.length > 0) {
                document.querySelector('#price').innerText = variation.shift().price
            }

        }
    })

})

