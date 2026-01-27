import {categorySchema} from './categories'
import readingTest from './readingTest'
import listeningTest from './listeningTest'

import {
  mcqGroup,
  doubleMcqGroup,
  doubleMcqBlock,
  fillBlankGroup,
  trueFalseGroup,
  dropDownGroup,
  dragDropGroup,
} from './questionGroups'

import {
  mcqItem,
  doubleMcqItem,
  fillBlankItem,
  trueFalseItem,
  dropDownItem,
  dragDropItem,
} from './questionItems'

export const schemaTypes = [
  categorySchema,
  readingTest,
  listeningTest,

  // Question Groups
  mcqGroup,
  doubleMcqGroup,
  doubleMcqBlock,
  fillBlankGroup,
  trueFalseGroup,
  dropDownGroup,
  dragDropGroup,

  // Items
  mcqItem,
  doubleMcqItem,
  fillBlankItem,
  trueFalseItem,
  dropDownItem,
  dragDropItem,
]
