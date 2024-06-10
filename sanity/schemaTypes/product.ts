
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of Product:'
        },
        {
            name: 'image',
            type: 'array',
            title: 'Images of Product:',
            of:[{type: 'image'}]
        },
        {
            name: 'description',
            type: 'text',
            title: "Description Product"
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name'
            }

        },
        {
            name: 'price',
            type: 'number',
            title: 'Price of Product'
        },
        {
            name: 'category',
            type: 'reference',
            title: 'Product Category',
            to: [
                {type: 'category'}
            ]
        }
    ]
}