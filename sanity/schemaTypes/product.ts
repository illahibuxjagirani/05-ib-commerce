
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
            title: 'Product Image:',
            of:[{type: 'image'}]
        },
        {
            name: 'description',
            type: 'text',
            title: "Description"
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug'
        }
    ]
}