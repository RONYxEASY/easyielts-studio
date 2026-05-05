export default {
  name: 'shortListeningTest',
  title: 'Short Listening Test',
  type: 'document',
  fields: [
    {
      name: 'testTitle',
      title: 'Test Title',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'testTitle',
        maxLength: 96,
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'audioFile',
      title: 'Test Audio',
      description: 'Upload the MP3 file for the entire test',
      type: 'file',
      options: {
        accept: 'audio/*',
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'sections',
      title: 'Test Sections',
      type: 'array',
      description: 'Add exactly 4 sections (Parts 1-4)',
      validation: (Rule: {
        required: () => {
          (): any
          new (): any
          min: {
            (arg0: number): {(): any; new (): any; max: {(arg0: number): any; new (): any}}
            new (): any
          }
        }
      }) => Rule.required().min(1).max(1),
      of: [
        {
          type: 'object',
          title: 'Section',
          fields: [
            {
              name: 'sectionTitle',
              title: 'Section Title',
              type: 'string',
              initialValue: 'Part 1',
            },
            {
              name: 'questionsGroup',
              title: 'Question Groups',
              type: 'array',
              of: [
                {type: 'mcqGroup'},
                {type: 'doubleMcqGroup'},
                {type: 'fillBlankGroup'},
                {type: 'trueFalseGroup'},
                {type: 'dropDownGroup'},
                {type: 'dragDropGroup'},
              ],
            },
          ],
        },
      ],
    },
  ],
}
