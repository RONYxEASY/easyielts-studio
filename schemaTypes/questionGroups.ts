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
      title: 'Questions',
      type: 'array',
      of: [{type: 'doubleMcqItem'}],
    },
  ],
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
