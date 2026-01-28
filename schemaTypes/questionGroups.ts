import type {Rule} from 'sanity'

const groupFields = [
  {
    name: 'groupTitle',
    title: 'Group Title',
    type: 'string',
    placeholder: 'Questions 1-4',
    validation: (rule: Rule) => rule.required(),
  },
  {
    name: 'poster',
    title: 'Group Image',
    description: '(optional)',
    type: 'image',
    options: {
      hotspot: true,
    },
    fields: [
      {
        name: 'caption',
        title: 'Caption',
        placeholder: 'Map',
        type: 'string',
      },
      {
        name: 'altText',
        title: 'Alt Text',
        description: 'Description of Image for accessibility and seo.',
        placeholder: 'Map of small town with narrow roads',
        type: 'string',
      },
    ],
  },
  {
    name: 'instructions',
    title: 'Instructions',
    type: 'array',
    of: [{type: 'block'}],
    rows: 2,
    validation: (rule: Rule) => rule.required(),
  },
]

export const mcqGroup = {
  name: 'mcqGroup',
  title: 'MCQ Group',
  type: 'object',
  fields: [
    ...groupFields,
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{type: 'mcqItem'}],
    },
  ],
}

export const doubleMcqGroup = {
  name: 'doubleMcqGroup',
  title: 'Double MCQ Group',
  type: 'object',
  fields: [
    ...groupFields,
    {
      name: 'questions',
      title: 'MCQ Sets',
      type: 'array',
      of: [{type: 'doubleMcqBlock'}],
    },
  ],
}

export const doubleMcqBlock = {
  name: 'doubleMcqBlock',
  title: 'Double MCQ Block',
  type: 'object',
  fields: [
    {
      name: 'questionRange',
      title: 'Question Numbers (Visual Label)',
      description: 'Appears above the question text (e.g., "Questions 23 & 24")',
      type: 'string',
      placeholder: '23-24',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'questionPrompt',
      title: 'Global Question Title',
      description:
        'The main question asking the user to select options (e.g., "Which TWO factors contributed to...")',
      type: 'text',
      rows: 2,
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'globalOptions',
      title: 'Global Options',
      description: 'The list of choices (A, B, C, D, E) shared by the questions below.',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule: Rule) => rule.min(3),
    },
    {
      name: 'items',
      title: 'Questions/Answer Slots',
      description: 'Add the 2 specific question slots here (e.g., Q21 and Q22).',
      type: 'array',
      of: [{type: 'doubleMcqItem'}],
      validation: (rule: Rule) =>
        rule.min(2).max(2).warning('Double MCQs usually have exactly 2 answer slots.'),
    },
  ],
  preview: {
    select: {
      title: 'questionRange',
      options: 'globalOptions',
    },
    prepare({title, options}: {title?: string; options?: string[]}) {
      return {
        title: title ? `${title.substring(0, 30)}` : 'Block',
        subtitle: `${options ? options.length : 0} Options`,
      }
    },
  },
}

export const fillBlankGroup = {
  name: 'fillBlankGroup',
  title: 'Fill Blank Group',
  type: 'object',
  fields: [
    ...groupFields,
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{type: 'fillBlankItem'}],
    },
  ],
}

export const trueFalseGroup = {
  name: 'trueFalseGroup',
  title: 'True/False Group',
  type: 'object',
  fields: [
    ...groupFields,
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{type: 'trueFalseItem'}],
    },
  ],
}

export const dropDownGroup = {
  name: 'dropDownGroup',
  title: 'Dropdown Group',
  type: 'object',
  fields: [
    ...groupFields,
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{type: 'dropDownItem'}],
    },
  ],
}

// Drag and drop is unique: Options are defined at the GROUP level
export const dragDropGroup = {
  name: 'dragDropGroup',
  title: 'Drag & Drop Group',
  type: 'object',
  fields: [
    ...groupFields,
    {
      name: 'globalOptions',
      title: 'Global Options',
      description: 'The pool of answers to drag from',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'questions',
      title: 'Positions/Questions',
      type: 'array',
      of: [{type: 'dragDropItem'}],
    },
  ],
}
