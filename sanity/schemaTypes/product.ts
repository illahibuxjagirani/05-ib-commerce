import { title } from "process";

export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'description',
            type: 'text',
            title: "Description"
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug'
        }
    ]
}