import React, { ReactElement } from 'react'

export const reviewLoadStepLabel = 'Review'

function ReviewLoadStep(): ReactElement {
  return (
    <div>
      <div>LAST step: ReviewLoadStep</div>
    </div>
  )
}

export default ReviewLoadStep

export const reviewLoadStepValidations = (values) => {
  const errors = {}
  console.log('Validations for Review', values)
  return errors
}
