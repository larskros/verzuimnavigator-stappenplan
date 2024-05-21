import React from 'react'
import stepindicatorbar from './StepIndicatorBar.module.css'

const StepIndicatorBar = (props: {ClassName: String;}) => {
  return (
    <>
        <div className={`${stepindicatorbar.StepIndicatorBar} ${props.ClassName}`}></div>
    </>
  )
}

export default StepIndicatorBar