import React, { useState } from 'react'

import { Wrapper, ProfileField, Item } from './styles'
import Avatar from '@Components/Avatar/Avatar'
import TextButton from '@Components/TextButton/TextButton'
import Text from '@Components/Typography/Text'
import DropdownContainer from '@Components/Dropdown/DropdownContainer/DropdownContainer'

type AvatarWithDropDownProps = {
    source: string
}
function AvatarWithDropDown({ source }: AvatarWithDropDownProps) {
    const [open, setOpen] = useState(false)

    const handleAvatarClick = () => {
        if (!open) {
            setOpen(true)
        }
    }

    return (
        <Wrapper>
            <Avatar source={source} onClick={handleAvatarClick} />

            {open && (
                <DropdownContainer open={open} onClose={() => setOpen(false)}>
                    <ProfileField>
                        <Avatar source="https://api.adorable.io/avatars/42/abott@adorable.png" />
                        <div className="right-column">
                            <Text>당신의 이름</Text>
                            <TextButton>프로필 관리</TextButton>
                        </div>
                    </ProfileField>
                    <Item>스코어 보드 생성</Item>
                    <Item>무엇이 들어갈까 1</Item>
                    <Item>무엇이 들어갈까 2</Item>
                    <Item>무엇이 들어갈까 3</Item>
                    <Item>무엇이 들어갈까 4</Item>
                </DropdownContainer>
            )}
        </Wrapper>
    )
}

export default AvatarWithDropDown
