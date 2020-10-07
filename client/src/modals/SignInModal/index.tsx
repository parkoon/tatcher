import React from 'react'
import { Formik } from 'formik'
import { AiOutlineClose } from 'react-icons/ai'

import Title from '@Components/Typography/Title'
import ModalContainer from '@Modals/ModalContainer'
import { palette } from '@Helpers/palette'
import { Wrapper } from './styles'
import Text from '@Components/Typography/Text'
import Anchor from '@Components/Anchor'
import IconButton from '@Components/IconButton'
import SignInForm from '@Components/Form/SignInForm'

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
                    <SignInForm />

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
