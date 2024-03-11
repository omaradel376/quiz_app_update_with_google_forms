import React from 'react'
// import ExamBoxInfo from '../../ExamBoxInfo'
import exames from "../../../../examesDataClassTwo.json"
import DegreeBoxInfo from '../../DegreeBoxInfo'


function ClassTwoDegree() {
  return (
    <div>
        {/* <ExamBoxInfo class_is="two" data={exames} /> */}
      <DegreeBoxInfo data={exames} />
    </div>
  )
}

export default ClassTwoDegree
