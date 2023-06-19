import React, { useState } from 'react'
import Form1 from './Forms/Form'
import FormAbi from './Forms/FormAbi'
import FormEvents from './Forms/FormEvents'
import FormBlocks from './Forms/FormBlocks'

import {
  MainContainer,
  StepContainer,
  StepWrapper,
  StepStyle,
  StepsLabelContainer,
  StepLabel,
  StepCount,
  ButtonsContainer,
  ButtonStyle,
  FormContainer,
  CheckMark,
} from '../styles/Progressbarcss'
import { useNavigate } from 'react-router-dom'

const steps = [
  {
    label: 'Contract Address',
    step: 1,
  },
  {
    label: 'Contract ABI',
    step: 2,
  },
  {
    label: 'Select Events',
    step: 3,
  },
  {
    label: 'Block Range',
    step: 4,
  },
]

const Progressbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/query-subgraph');
  };

  const [activeStep, setActiveStep] = useState(1)

  const nextStep = () => {
    setActiveStep(activeStep + 1)
  }

  const prevStep = () => {
    setActiveStep(activeStep - 1)
  }

  const totalSteps = steps.length
  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`

  return (
    <div>
      
    <MainContainer>
      <StepContainer width={width}>
        {steps.map(({ step, label }) => (
          <StepWrapper key={step}>
            <StepStyle step={activeStep >= step ? 'completed' : 'incomplete'}>
              {activeStep > step ? (
                <CheckMark>L</CheckMark>
              ) : (
                <StepCount>{step}</StepCount>
              )}
            </StepStyle>
            <StepsLabelContainer>
              <StepLabel key={step}>{label}</StepLabel>
            </StepsLabelContainer>
          </StepWrapper>
        ))}
      </StepContainer>
      <FormContainer>
        {(() => {
          switch (activeStep) {
            case 1:
              return (
                <Form1 step={activeStep}/>
              )
            case 2:
              return (
                <FormAbi />
              )
            case 3:
              return (
                <FormEvents />
              )
            case 4:
              return (
                <FormBlocks />
              )
            default:
              return null;
          }
        })()}
      </FormContainer>
      <ButtonsContainer>
        <ButtonStyle onClick={prevStep} disabled={activeStep === 1}>
          Previous
        </ButtonStyle>
        {(() => {
          switch (activeStep) {
            case 1:
              return (
                <ButtonStyle onClick={() => {
                  nextStep();
                }} >
                  Next
                </ButtonStyle>
              );
            case 2:
              return (
                <ButtonStyle onClick={nextStep}>
                  Next
                </ButtonStyle>
              );
            case 3:
              return (
                <ButtonStyle onClick={nextStep}>
                  Next
                </ButtonStyle>
              );
            case 4:
              return (
                <ButtonStyle onClick={handleClick}>
                  Deploy Subgraph
                </ButtonStyle>
              );
            default:
              return (
                <ButtonStyle>
                  Submit
                </ButtonStyle>
              );
          }
        })()}
      </ButtonsContainer>
    </MainContainer>
  </div>
  )
}

export default Progressbar
