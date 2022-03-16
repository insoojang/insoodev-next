import tw, { styled } from 'twin.macro'

const Footer = () => {
    return (
        <Footer_Container>
            <Div />
        </Footer_Container>
    )
}
export default Footer

const Footer_Container = styled.footer`
    ${tw`px-[16px] py-[30px] mb-[50px] max-w-screen-lg mx-auto`}
`
const Div = styled.div`
    ${tw`flex space-x-5`}
`
