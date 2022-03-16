import tw, { styled } from 'twin.macro'
import { TypoH1 } from '../../styles/TypoSmallLabel'

const AboutMe = () => {
    return (
        <Section>
            <H_Display>
                ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴ
                <br />
                ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ
                <br />
                프론트엔드 엔지니어입니다.
            </H_Display>
            <P_Display>
                ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁ
                ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁ
                ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㅇㅁㄴㅇㅁㄴ
                ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁ
                ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㄴㅁㅇㄴㅁㄴㅁㅇㅇㅁㄴㅇ
            </P_Display>
        </Section>
    )
}
export default AboutMe

const Section = styled.section`
    ${tw`space-y-4`}
`
const H_Display = styled(TypoH1)`
    ${tw`text-dark-1 max-sm:text-2xl`}
`
const P_Display = styled.p`
    font-size: 20px;
    line-height: 1.6;
    ${tw`text-dark-2 max-sm:text-base`}
`
