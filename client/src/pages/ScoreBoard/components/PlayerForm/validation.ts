import * as Yup from 'yup'

export const singleValidation = Yup.object().shape({
    A1: Yup.string().required('선수를 입력해주세요.'),
    B1: Yup.string().required('선수를 입력해주세요.'),
})
export const doubleValidation = Yup.object().shape({
    A1: Yup.string().required('선수를 입력해주세요.'),
    B1: Yup.string().required('선수를 입력해주세요.'),
    A2: Yup.string().required('팀원 안챙겨? 당신은 이기주의야.'),
    B2: Yup.string().required('팀원 안챙겨? 당신은 이기주의야.'),
})
