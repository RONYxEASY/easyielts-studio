import type {Rule} from 'sanity'

const commonFields = [
  {
    name: 'questionNumber',
    title: 'Question Number',
    type: 'string',
    validation: (rule: Rule) => rule.required(),
  },
  {
    name: 'questionText',
    title: 'Question Text',
    type: 'text',
    rows: 2,
    validation: (rule: Rule) => rule.required(),
  },
  {
    name: 'answerExplanation',
    title: 'Answer Explanation',
    type: 'text',
    rows: 2,
  },
]

export const mcqItem = {
  name: 'mcqItem',
  title: 'MCQ Question',
  type: 'object',
  fields: [
    ...commonFields,
    {
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'correctAnswer',
      title: 'Correct Answer',
      description: 'The exact string match from options',
      type: 'string',
    },
  ],
}

// export const doubleMcqItem = {
//   name: 'doubleMcqItem',
//   title: 'Double MCQ Question',
//   type: 'object',
//   fields: [
//     ...commonFields,
//     {
//       name: 'options',
//       title: 'Options',
//       type: 'array',
//       of: [{type: 'string'}],
//     },
//     {
//       name: 'correctAnswer',
//       title: 'Correct Answer',
//       description: 'Select multiple correct answers',
//       type: 'array',
//       of: [{type: 'string'}],
//     },
//   ],
// }
export const doubleMcqItem = {
  name: 'doubleMcqItem',
  title: 'Question Slot',
  type: 'object',
  fields: [
    {
      name: 'questionNumber',
      title: 'Question Number',
      type: 'string', // e.g., "21"
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'correctAnswer',
      title: 'Correct Answer',
      description: 'The correct option string for this specific number',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'answerExplanation',
      title: 'Answer Explanation',
      type: 'text',
      rows: 2,
    },
  ],
  preview: {
    select: {
      title: 'questionNumber',
      subtitle: 'correctAnswer',
    },
    prepare({title, subtitle}: {title?: string; subtitle?: string}) {
      return {
        title: `Q ${title}`,
        subtitle: `Answer: ${subtitle}`,
      }
    },
  },
}

export const fillBlankItem = {
  name: 'fillBlankItem',
  title: 'Fill in Blank Question',
  type: 'object',
  fields: [
    ...commonFields,
    {
      name: 'questionText2',
      title: 'Question Text Part 2',
      type: 'text',
      rows: 2,
    },
    {
      name: 'correctAnswer',
      title: 'Correct Answer(s)',
      description: 'Add acceptable variations (e.g., "10", "ten")',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}

export const trueFalseItem = {
  name: 'trueFalseItem',
  title: 'True/False/NG Question',
  type: 'object',
  fields: [
    ...commonFields,
    {
      name: 'correctAnswer',
      title: 'Correct Answer',
      type: 'string',
      options: {
        list: ['True', 'False', 'Not Given', 'Yes', 'No'],
      },
    },
  ],
}

export const dropDownItem = {
  name: 'dropDownItem',
  title: 'Dropdown Question',
  type: 'object',
  fields: [
    ...commonFields,
    {
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'correctAnswer',
      title: 'Correct Answer',
      type: 'string',
    },
  ],
}

export const dragDropItem = {
  name: 'dragDropItem',
  title: 'Drag & Drop Position',
  type: 'object',
  fields: [
    ...commonFields,
    {
      name: 'correctAnswer',
      title: 'Correct Option',
      description: 'Which option from the global list belongs here?',
      type: 'string',
    },
  ],
}
