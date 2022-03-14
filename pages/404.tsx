import Link from 'next/link'
import tw, { styled } from 'twin.macro'

import NormalButton from '../components/button/NormalButton'

function NotFound() {
    return (
        <Div_Container>
            <H1_Description>
                존재하지 않거나
                <br />
                준비 중인 페이지입니다.
            </H1_Description>
            <Link href="/" passHref={true}>
                <NormalButton>메인으로</NormalButton>
            </Link>
        </Div_Container>
    )
}

export default NotFound

const Div_Container = styled.div`
    ${tw`px-[16px] space-y-4 mt-[200px] flex flex-col items-center justify-center`}
`
const H1_Description = styled.div`
    ${tw`max-sm:text-xl text-3xl text-center font-bold text-dark-1`}
`
