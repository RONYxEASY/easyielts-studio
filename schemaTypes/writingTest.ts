export default {
  name: 'writingTest',
  title: 'IELTS Writing Test',
  type: 'document',
  fields: [
    {
      name: 'testTitle',
      title: 'Test Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'testTitle',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
      title: 'Category',
    },
    {
      name: 'tasks',
      title: 'Writing Tasks',
      type: 'array',
      description: 'Add exactly 2 tasks (Task 1 and Task 2)',
      of: [
        {
          type: 'object',
          name: 'writingTask',
          fields: [
            {
              name: 'taskNumber',
              title: 'Task Number',
              type: 'number',
              validation: (Rule: any) => Rule.required().min(1).max(2),
            },
            {
              name: 'prompt',
              title: 'Task Prompt',
              type: 'text',
              rows: 10,
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'taskImage',
              title: 'Task Image (Optional)',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'wordLimit',
              title: 'Word Limit',
              type: 'string',
              initialValue: '150',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required().min(2).max(2),
    },
  ],
}
