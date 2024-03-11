import React from 'react'
import ExamBoxInfo from '../../ExamBoxInfo'
import exames from "../../../../examesDataClassTwo.json"


function ClassTwo() {
  return (
    <div>
        <ExamBoxInfo class_is="two" data={exames} />

    </div>
  )
}

export default ClassTwo
