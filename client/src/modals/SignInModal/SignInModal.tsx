import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import Title from '@Components/Typography/Title'
import TextInput from '@Components/TextInput'
import VerticalSpacing from '@Components/VerticalSpacing'
import Button from '@Components/Button'
import ModalContainer from '@Modals/ModalContainer/ModalContainer'
import { palette } from '@Helpers/palette'
import { Wrapper } from './styles'
import Text from '@Components/Typography/Text'
import Anchor from '@Components/Anchor'
import IconButton from '@Components/IconButton'

type SignInModalProps = {
    open: boolean
    onClose(): void
}

function SignInModal(props: SignInModalProps) {
    const { onClose } = props
    return (
        <ModalContainer {...props}>
            <Wrapper>
                <div className="left-column">
                    <img src="/images/tennis-icon.png" alt="tennis icon" />
                    <Title color={palette.black} fontSize="xl">
                        환영합니다 🙌
                    </Title>
                </div>
                <div className="right-column">
                    <div className="close-icon">
                        <IconButton onClick={onClose} icon={<AiOutlineClose />} />
                    </div>
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

                    <div className="sign-up-field">
                        <Text block center fontSize="sm">
                            아직 회원이 아니신가요? <Anchor>회원가입</Anchor>
                        </Text>
                    </div>
                </div>
            </Wrapper>
        </ModalContainer>
    )
}

export default SignInModal
