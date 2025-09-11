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

const variations_x = [
  { attributes: { color: 'red', size: '100' }, price: '34.00', is_in_stock: true, in_stock: 10, variation_is_active: true, availability_html: '' },

  { attributes: { color: 'red', size: '200' }, price: '40.00', is_in_stock: true, in_stock: 20, variation_is_active: true, availability_html: '' },

  { attributes: { color: 'green', size: '100' }, price: '56.00', is_in_stock: false, in_stock: 0, variation_is_active: true, availability_html: 'Out of stock' },

  { attributes: { color: 'green', size: '200' }, price: '67.00', is_in_stock: true, in_stock: 34, variation_is_active: true, availability_html: '' },

//  { attributes: { color: 'blue', size: '100' }, price: '18.00', is_in_stock: true, in_stock: 45, variation_is_active: true, availability_html: '' },

//  { attributes: { color: 'blue', size: '200' }, price: '12.00', is_in_stock: true, in_stock: 55, variation_is_active: false, availability_html: '' },

  { attributes: { color: 'blue', size: '' }, price: '12.00', is_in_stock: true, in_stock: 55, variation_is_active: true, availability_html: '' },
]

const variations = [
  {
    'attributes': {
      'attribute_pa_images': 'belt',
      'attribute_pa_color': 'green',
      'attribute_pa_sizes': '',
    },
    'availability_html': '<p class="stock in-stock">23 in stock</p>\n',
    'backorders_allowed': false,
    'dimensions': {
      'length': '',
      'width': '',
      'height': '',
    },
    'dimensions_html': 'N/A',
    'display_price': 90,
    'display_regular_price': 90,
    'image': {
      'title': 'belt',
      'caption': '',
      'url': 'http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt.jpg',
      'alt': 'belt',
      'src': 'http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt-416x416.jpg',
      'srcset': 'http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt-416x416.jpg 416w, http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt-324x324.jpg 324w, http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt-100x100.jpg 100w, http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt-300x300.jpg 300w, http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt-150x150.jpg 150w, http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt-768x768.jpg 768w, http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt-50x50.jpg 50w, http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt.jpg 801w',
      'sizes': '(max-width: 416px) 100vw, 416px',
      'full_src': 'http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt.jpg',
      'full_src_w': 801,
      'full_src_h': 801,
      'gallery_thumbnail_src': 'http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt-100x100.jpg',
      'gallery_thumbnail_src_w': 100,
      'gallery_thumbnail_src_h': 100,
      'thumb_src': 'http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt-324x324.jpg',
      'thumb_src_w': 324,
      'thumb_src_h': 324,
      'src_w': 416,
      'src_h': 416,
    },
    'image_id': 6083,
    'is_downloadable': false,
    'is_in_stock': true,
    'is_purchasable': true,
    'is_sold_individually': 'no',
    'is_virtual': false,
    'max_qty': 23,
    'min_qty': 1,
    'price_html': '<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>90.00</bdi></span></span>',
    'sku': '',
    'variation_description': '',
    'variation_id': 6154,
    'variation_is_active': true,
    'variation_is_visible': true,
    'weight': '',
    'weight_html': 'N/A',
  },
  {
    'attributes': {
      'attribute_pa_images': 'cap',
      'attribute_pa_color': 'red',
      'attribute_pa_sizes': '',
    },
    'availability_html': '<p class="stock out-of-stock">Out of stock</p>\n',
    'backorders_allowed': false,
    'dimensions': {
      'length': '',
      'width': '',
      'height': '',
    },
    'dimensions_html': 'N/A',
    'display_price': 80,
    'display_regular_price': 80,
    'image': {
      'title': 'belt',
      'caption': '',
      'url': 'http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt.jpg',
      'alt': 'belt',
      'src': 'http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt-416x416.jpg',
      'srcset': 'http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt-416x416.jpg 416w, http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt-324x324.jpg 324w, http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt-100x100.jpg 100w, http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt-300x300.jpg 300w, http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt-150x150.jpg 150w, http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt-768x768.jpg 768w, http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt-50x50.jpg 50w, http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt.jpg 801w',
      'sizes': '(max-width: 416px) 100vw, 416px',
      'full_src': 'http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt.jpg',
      'full_src_w': 801,
      'full_src_h': 801,
      'gallery_thumbnail_src': 'http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt-100x100.jpg',
      'gallery_thumbnail_src_w': 100,
      'gallery_thumbnail_src_h': 100,
      'thumb_src': 'http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/belt-324x324.jpg',
      'thumb_src_w': 324,
      'thumb_src_h': 324,
      'src_w': 416,
      'src_h': 416,
    },
    'image_id': 6083,
    'is_downloadable': false,
    'is_in_stock': false,
    'is_purchasable': true,
    'is_sold_individually': 'no',
    'is_virtual': false,
    'max_qty': '',
    'min_qty': 1,
    'price_html': '<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>80.00</bdi></span></span>',
    'sku': '',
    'variation_description': '',
    'variation_id': 6153,
    'variation_is_active': true,
    'variation_is_visible': true,
    'weight': '',
    'weight_html': 'N/A',
  },
  {
    'attributes': {
      'attribute_pa_images': 'glass',
      'attribute_pa_color': 'blue',
      'attribute_pa_sizes': '',
    },
    'availability_html': '<p class="stock in-stock">45 in stock</p>\n',
    'backorders_allowed': false,
    'dimensions': {
      'length': '',
      'width': '',
      'height': '',
    },
    'dimensions_html': 'N/A',
    'display_price': 80,
    'display_regular_price': 80,
    'image': {
      'title': 'hoodie',
      'caption': '',
      'url': 'http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/hoodie.jpg',
      'alt': 'hoodie',
      'src': 'http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/hoodie-416x416.jpg',
      'srcset': 'http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/hoodie-416x416.jpg 416w, http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/hoodie-324x324.jpg 324w, http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/hoodie-100x100.jpg 100w, http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/hoodie-300x300.jpg 300w, http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/hoodie-150x150.jpg 150w, http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/hoodie-768x768.jpg 768w, http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/hoodie-50x50.jpg 50w, http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/hoodie.jpg 801w',
      'sizes': '(max-width: 416px) 100vw, 416px',
      'full_src': 'http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/hoodie.jpg',
      'full_src_w': 801,
      'full_src_h': 801,
      'gallery_thumbnail_src': 'http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/hoodie-100x100.jpg',
      'gallery_thumbnail_src_w': 100,
      'gallery_thumbnail_src_h': 100,
      'thumb_src': 'http://sites.local/woo-variation-swatches/wp-content/uploads/2025/02/hoodie-324x324.jpg',
      'thumb_src_w': 324,
      'thumb_src_h': 324,
      'src_w': 416,
      'src_h': 416,
    },
    'image_id': 6114,
    'is_downloadable': false,
    'is_in_stock': true,
    'is_purchasable': true,
    'is_sold_individually': 'no',
    'is_virtual': false,
    'max_qty': 45,
    'min_qty': 1,
    'price_html': '<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>80.00</bdi></span></span>',
    'sku': '',
    'variation_description': '',
    'variation_id': 6155,
    'variation_is_active': true,
    'variation_is_visible': true,
    'weight': '',
    'weight_html': 'N/A',
  },
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
          // @TODO: Remove Selected text if not selected.
          // attribute.closest('.attributes').querySelector('.selected-value').innerText = ''

          const has = attribute.closest('.attributes').querySelector('.selected')

          if (!has) {
            attribute.closest('.attributes').querySelector('.selected-value').innerText = ''
          }
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
        document.querySelector('#price').innerHTML = variation.price_html
        document.querySelector('#stock').innerHTML = variation.availability_html
      }

    }
  }, { passive: true })

})

document.querySelector('#clear-button').addEventListener('click', (event) => {

  document.querySelector('#price').innerHTML = ''
  document.querySelector('#stock').innerHTML = ''

  document.querySelectorAll('[data-attribute_value]').forEach((item) => {
    item.classList.remove('selected', 'out-of-stock', 'disable')
    item.closest('.attributes').querySelector('.selected-value').innerText = ''
  })
})

