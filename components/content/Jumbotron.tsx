import tw, { styled } from 'twin.macro'
import { TypoDisplay1 } from '../../styles/TypoSmallLabel'

const Jumbotron = () => {
    return (
        <Div>
            <P_Display>
                안녕하세요.
                <br />
                장인수입니다.
            </P_Display>
        </Div>
    )
}

export default Jumbotron

const Div = styled.div`
    ${tw`py-[150px] max-sm:py-[100px]`}
`
const P_Display = styled(TypoDisplay1)`
    ${tw`max-sm:text-4xl bg-gradient-to-t from-primary to-primary-lighter bg-clip-text text-transparent`}
`
