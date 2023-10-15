export default {
    name: 'category',
    type: 'document',
    title: 'Menu Category',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Category name',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'image',
            type: 'image',
            title: 'image of category',
        },
    ]
}