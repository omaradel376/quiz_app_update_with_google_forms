import React from 'react'
import ExamBoxInfo from '../../ExamBoxInfo'
import exames from "../../../../examesDataClassOne.json"

function ClassOne() {
  return (
    <div>
  <ExamBoxInfo class_is="two" data={exames} />
    </div>
  )
}

export default ClassOne
