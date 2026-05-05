import {categorySchema} from './categories'
import readingTest from './readingTest'
import listeningTest from './listeningTest'
import writingTest from './writingTest'

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
import shortReadingTest from './shortReadingTest'
import shortListeningTest from './shortListeningTest'

export const schemaTypes = [
  categorySchema,
  readingTest,
  shortReadingTest,
  listeningTest,
  shortListeningTest,
  writingTest,

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
