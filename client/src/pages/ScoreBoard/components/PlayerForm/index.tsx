import React from 'react'
import { Formik, Form, Field } from 'formik'

import { Wrapper, ButtonWrapper } from './styles'
import { doubleValidation, singleValidation } from './validation'
import { useStep } from '@Pages/ScoreBoard/context/step'
import TextInput from '@Components/TextInput'
import Button from '@Components/Button'
import Text from '@Components/Typography/Text'
import Divider from '@Components/Divider'
import VerticalSpacing from '@Components/VerticalSpacing'

type PlayerFormValues = {
    A1: string
    A2?: string
    B1: string
    B2?: string
}
const doubleValues = {
    A1: '',
    A2: '',
    B1: '',
    B2: '',
}
const singleValues = {
    A1: '',
    B1: '',
}

type PlayerFormProps = {}
function PlayerForm({}: PlayerFormProps) {
    const { activeStep, step, setActiveStepValue, next } = useStep()

    const isDoubleGame = step[0] === 'double'

    const initialValues: PlayerFormValues = isDoubleGame ? doubleValues : singleValues
    const validationSchema = isDoubleGame ? doubleValidation : singleValidation

    const handleSubmit = (values: PlayerFormValues) => {
        setActiveStepValue({
            A: [values.A1, values.A2],
            B: [values.B1, values.B2],
        })
        next()
    }

    return activeStep === 1 ? (
        <Wrapper>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                {({ errors, touched, isValid, dirty }) => {
                    return (
                        <Form>
                            <VerticalSpacing bottom size="xxxl">
                                <Text className="title">팀 A</Text>
                                <Divider gutter={12} />

                                <Field
                                    type="text"
                                    as={TextInput}
                                    name="A1"
                                    label="A팀의 첫 번째 선수를 입력해주세요."
                                    error={touched.A1 && errors.A1}
                                />
                                {isDoubleGame && (
                                    <Field
                                        type="text"
                                        as={TextInput}
                                        name="A2"
                                        label="A팀의 두 번째 선수를 입력해주세요."
                                        error={touched.A2 && errors.A2}
                                    />
                                )}
                            </VerticalSpacing>

                            <VerticalSpacing bottom size="xxxl">
                                <Text className="title">팀 B</Text>
                                <Divider gutter={12} />
                                <Field
                                    type="text"
                                    as={TextInput}
                                    name="B1"
                                    label="B팀의 첫 번째 선수를 입력해주세요."
                                    error={touched.B1 && errors.B1}
                                />
                                {isDoubleGame && (
                                    <Field
                                        type="text"
                                        as={TextInput}
                                        name="B2"
                                        label="B팀의 두 번째 선수를 입력해주세요."
                                        error={touched.B2 && errors.B2}
                                    />
                                )}
                            </VerticalSpacing>

                            <ButtonWrapper>
                                <Button type="submit" disabled={!dirty || !isValid}>
                                    입력완료
                                </Button>
                            </ButtonWrapper>
                        </Form>
                    )
                }}
            </Formik>
        </Wrapper>
    ) : null
}

export default PlayerForm
