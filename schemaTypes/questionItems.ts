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
    name: 'correctAnswer',
    title: 'Correct Answer',
    description: 'The exact string match from options',
    type: 'string',
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

// export const fillBlankItem = {
//   name: 'fillBlankItem',
//   title: 'Fill in Blank Question',
//   type: 'object',
//   fields: [
//     ...commonFields,
//     {
//       name: 'questionText2',
//       title: 'Question Text Part 2',
//       type: 'text',
//       rows: 2,
//     },
//   ],
// }
//
// inside your schema file (e.g., questions.ts)

export const fillBlankItem = {
  name: 'fillBlankItem',
  title: 'Fill in Blank Question',
  type: 'object',
  fields: [
    {
      name: 'questionNumber',
      title: 'Question Number',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    // 1. Layout Selector
    {
      name: 'layout',
      title: 'Layout Style',
      type: 'string',
      options: {
        list: [
          {title: 'Simple Sentence', value: 'sentence'},
          {title: 'Note/List Item', value: 'note'},
        ],
        layout: 'radio',
      },
      initialValue: 'sentence',
    },

    // 2. Note-Specific Fields (Hidden unless layout is 'note')
    {
      name: 'noteLabel',
      title: 'Note Label',
      description: 'The text next to the number (e.g., "Feeding" in "14. Feeding")',
      type: 'string',
      hidden: ({parent}: {parent: any}) => parent?.layout !== 'note',
    },
    {
      name: 'contextBefore',
      title: 'Bullet Points Before',
      description: 'List items that appear above the question line',
      type: 'array',
      of: [{type: 'string'}],
      hidden: ({parent}: {parent: any}) => parent?.layout !== 'note',
    },

    // 3. The Question Line (Used for both layouts)
    {
      name: 'questionText',
      title: 'Text Before Blank',
      description: 'e.g., "trees are awesome, such as"',
      type: 'text',
      rows: 2,
    },
    {
      name: 'questionText2',
      title: 'Text After Blank',
      description: 'e.g., "something."',
      type: 'text',
      rows: 2,
    },

    // 4. Context After (For notes)
    {
      name: 'contextAfter',
      title: 'Bullet Points After',
      description: 'List items that appear below the question line',
      type: 'array',
      of: [{type: 'string'}],
      hidden: ({parent}: {parent: any}) => parent?.layout !== 'note',
    },

    {
      name: 'correctAnswer',
      title: 'Correct Answer(s)',
      type: 'text',
    },
    {
      name: 'answerExplanation',
      title: 'Answer Explanation',
      type: 'text',
      rows: 2,
    },
  ],
}

export const trueFalseItem = {
  name: 'trueFalseItem',
  title: 'True/False/NG Question',
  type: 'object',
  fields: [...commonFields],
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
  ],
}

export const dragDropItem = {
  name: 'dragDropItem',
  title: 'Drag & Drop Position',
  type: 'object',
  fields: [...commonFields],
}
