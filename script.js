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
  { attributes: { color: 'red', size: '100' }, price: '34.00', is_in_stock: true, in_stock: 10, variation_is_active: true, availability_html: '' },

  { attributes: { color: 'red', size: '200' }, price: '40.00', is_in_stock: true, in_stock: 20, variation_is_active: true, availability_html: '' },

  { attributes: { color: 'green', size: '100' }, price: '56.00', is_in_stock: false, in_stock: 0, variation_is_active: true, availability_html: 'Out of stock' },

  { attributes: { color: 'green', size: '200' }, price: '67.00', is_in_stock: true, in_stock: 34, variation_is_active: true, availability_html: '' },

//  { attributes: { color: 'blue', size: '100' }, price: '18.00', is_in_stock: true, in_stock: 45, variation_is_active: true, availability_html: '' },

//  { attributes: { color: 'blue', size: '200' }, price: '12.00', is_in_stock: true, in_stock: 55, variation_is_active: false, availability_html: '' },

  { attributes: { color: 'blue', size: '' }, price: '12.00', is_in_stock: true, in_stock: 55, variation_is_active: true, availability_html: '' },
]

function isAttributeMatched (attributeValue, chosenValue) {
  return attributeValue === chosenValue || '' === attributeValue
}

function findMatchingVariation (variations, chosen) {

  return variations.filter((currentVariation) => {
    return Object.keys(chosen).every((key) => currentVariation.variation_is_active && isAttributeMatched(currentVariation.attributes[key], chosen[key]))
  })
}

function findMaybeAvailableAttribute (variations, chosen) {

  const matchedVariations = variations.filter((currentVariation) => {
    return Object.keys(chosen).some((key) => currentVariation.variation_is_active && isAttributeMatched(currentVariation.attributes[key], chosen[key]))
  })

  return matchedVariations.reduce((available, maybeVariation) => {

    for (const [key, value] of Object.entries(maybeVariation.attributes)) {

      //     console.log(maybeVariation.variation_is_active, key)

      if (!Object.keys(chosen).includes(key)) {

        if (typeof available[key] === 'undefined') {
          //available[key] = []
          available[key] = {}
        }

        /* available[key].push({
           value,
           is_in_stock: maybeVariation.is_in_stock,
         })*/
        available[key][value] = {
          is_in_stock: maybeVariation.is_in_stock,
          stock_quantity: maybeVariation.in_stock,
        }

      }
    }

    return available

  }, {})
}

function getChosenAttributes () {

  let data = {
    totalAttributeCount: 0,
    selectedAttributeCount: 0,
    selectedAttributes: {},
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

// 1. Get chosen attributes

document.querySelectorAll('[data-attribute_value]').forEach((item, index) => {

  item.addEventListener('click', (event) => {
    const element = event.target

    const attribute_name = element.closest('.attributes').dataset['attribute_name']
    const attribute_value = element.dataset['attribute_value']

    element.closest('.attributes').querySelectorAll('li').forEach((li) => { li.classList.remove('selected', 'out-of-stock', 'disable') })
    element.closest('.attributes').querySelector('.selected-value').innerText = attribute_value

    element.classList.add('selected')
    element.classList.remove('disable', 'out-of-stock')

    const choosen = getChosenAttributes()

    const availables = findMaybeAvailableAttribute(variations, { [attribute_name]: attribute_value })

    for (const [key, values] of Object.entries(availables)) {
      document.querySelectorAll(`[data-attribute_name="${key}"] [data-attribute_value]`).forEach((attribute) => {

        const attribute_value = attribute.dataset.attribute_value

        attribute.classList.remove('disable', 'out-of-stock')

        const availableValues = Object.keys(values)

        // Any Value
        if (availableValues[0] === '') {
          return
        }

        if (!availableValues.includes(attribute_value)) {
          attribute.classList.remove('selected', 'out-of-stock')
          attribute.classList.add('disable')
          attribute.closest('.attributes').querySelector('.selected-value').innerText = ''
        }

        if (values[attribute_value] && values[attribute_value].is_in_stock === false && choosen.totalAttributeCount > choosen.selectedAttributeCount) {
          attribute.classList.remove('disable')
          attribute.classList.add('out-of-stock')
        }

      })
    }

    document.querySelector('#price').innerText = ''
    document.querySelector('#stock').innerText = ''

    if (choosen.totalAttributeCount === choosen.selectedAttributeCount) {
      const availableVariations = findMatchingVariation(variations, choosen.selectedAttributes)

      if (availableVariations.length > 0) {
        const variation = availableVariations.shift()
        document.querySelector('#price').innerText = variation.price
        document.querySelector('#stock').innerText = variation.availability_html
      }

    }
  }, { passive: true })

})

