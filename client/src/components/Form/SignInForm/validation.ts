import * as Yup from 'yup'

const signInValidation = Yup.object().shape({
    id: Yup.string().required('아이디를 입력해주세요.'),
    password: Yup.string().required('비밀번호를 입력해주세요.'),
})

export default signInValidation
