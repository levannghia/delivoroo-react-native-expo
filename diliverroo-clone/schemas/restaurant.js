export default {
    name: 'restaurant',
    type: 'document',
    title: 'Restaurant',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Restaurant name',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'short_description',
        type: 'string',
        title: 'Short description',
        validation: (Rule) => Rule.max(200)
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image of the restaurant',
      },
      {
        name: 'lat',
        type: 'number',
        title: 'Lat of the restaurant',
      },
      {
        name: 'long',
        type: 'number',
        title: 'Long of the restaurant',
      },
      {
        name: 'address',
        type: 'string',
        title: 'Restaurant address',
        validation: (Rule) => Rule.required()
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Enter a rating from (1 - 5 start)',
        validation: (Rule) => Rule.required().min(1).max(5).error("Please enter a value 1 and 5")
      },
      {
        name: 'type',
        type: 'reference',
        title: 'Category',
        to: [{type: "category"}],
        validation: (Rule) => Rule.required()
      },
      {
        name: 'dishes',
        type: 'array',
        title: 'Dishes',
        of: [{type: "reference", to: [{type: "dish"}] }],
      },
    ]
  }