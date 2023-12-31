export default {
    name: 'featured',
    type: 'document',
    title: 'Futired menu Categories',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'featured category name',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'short_description',
            type: 'string',
            title: 'Short description',
            validation: (Rule) => Rule.max(200)
        },
        {
            name: 'restaurants',
            type: 'array',
            title: 'Restaurants',
            of: [{ type: "reference", to: [{ type: "restaurant" }] }]
        },
    ]
}