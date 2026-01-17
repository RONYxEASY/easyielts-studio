import {defineType} from 'sanity'

export const categorySchema = defineType({
  name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
    },
  },
})
