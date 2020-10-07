import React from 'react'
import { Formik, Form, Field } from 'formik'

import signInValidation from './validation'

import Button from '@Components/Button'
import TextInput from '@Components/TextInput'
import VerticalSpacing from '@Components/VerticalSpacing'
import Title from '@Components/Typography/Title'
import Text from '@Components/Typography/Text'
import { useAuth } from '@Context/auth'
import { useNotification } from '@Components/Notification'

const testToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

type FormValues = {
    id: string
    password: string
}
const initialValues = {
    id: '',
    password: '',
}

type SignInFormProps = {
    onSuccess(): void
}

function SignInForm({ onSuccess }: SignInFormProps) {
    const { login } = useAuth()
    const { addNotification } = useNotification()

    const handleSubmit = (values: FormValues) => {
        // if ()
        const validUser = values.id === 'admin' && values.password === '1234'

        if (!validUser) {
            addNotification('아이디와 패스워드를 다시 한 번 확인해주세요.', { appearance: 'error' })
            return
        }

        login({
            token: testToken,
        })

        addNotification('테니스 세계에 오신것을 환영합니다.', { appearance: 'success' })
        onSuccess()
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={signInValidation}>
            {({ errors, touched }) => {
                const hasIdError = touched.id && errors.id
                const hasPasswordError = touched.password && errors.password

                return (
                    <Form style={{ width: '100%' }}>
                        <VerticalSpacing bottom size="lg">
                            <Title block bold fontSize="xxxl">
                                로그인
                            </Title>
                        </VerticalSpacing>
                        <VerticalSpacing bottom size="xxxl">
                            <Text>이메일로 로그인하기</Text>
                        </VerticalSpacing>
                        <VerticalSpacing bottom size="xxl">
                            <Field
                                type="text"
                                name="id"
                                as={TextInput}
                                label="아이디를 입력해주세요"
                                error={hasIdError}
                                helperText={hasIdError && errors.id}
                            />
                        </VerticalSpacing>
                        <VerticalSpacing bottom size="xxxl">
                            <Field
                                type="password"
                                name="password"
                                as={TextInput}
                                label="비밀번호를 입력해주세요"
                                error={hasPasswordError}
                                helperText={hasPasswordError && errors.password}
                            />
                        </VerticalSpacing>

                        <Button type="submit">로그인하기</Button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default SignInForm
