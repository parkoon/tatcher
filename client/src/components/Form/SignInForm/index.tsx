import React from 'react'

import Button from '@Components/Button'
import TextInput from '@Components/TextInput'
import VerticalSpacing from '@Components/VerticalSpacing'
import Title from '@Components/Typography/Title'
import Text from '@Components/Typography/Text'

function SignInForm() {
    return (
        <>
            <VerticalSpacing bottom size="lg">
                <Title block bold fontSize="xxxl">
                    로그인
                </Title>
            </VerticalSpacing>
            <VerticalSpacing bottom size="xxxl">
                <Text>이메일로 로그인하기</Text>
            </VerticalSpacing>
            <VerticalSpacing bottom size="lg">
                <TextInput label="아이디를 입력해주세요" />
            </VerticalSpacing>
            <VerticalSpacing bottom size="lg">
                <TextInput label="비밀번호를 입력해주세요" />
            </VerticalSpacing>

            <Button onClick={() => alert('로그인하기')}>로그인하기</Button>
        </>
    )
}

export default SignInForm
