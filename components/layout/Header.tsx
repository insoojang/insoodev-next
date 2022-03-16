import tw, { styled } from 'twin.macro'

interface IHeaderProps {
    float?: boolean
}
const Header = ({ float }: IHeaderProps) => {
    return (
        <Nav role="navigation">
            <Div_HeaderContainer value={float}>
                {/*<Div_Image>*/}
                {/*    <Image src="/images/logo.svg" priority layout="fill" alt="Logo" />*/}
                {/*</Div_Image>*/}
                <A_HeaderMenu
                    href="https://github.com/insoojang"
                    target="_blank"
                    rel="noreferrer"
                    role="menuitem"
                >
                    github
                </A_HeaderMenu>
            </Div_HeaderContainer>
        </Nav>
    )
}

export default Header
//
const Nav = styled.nav`
    ${tw`fixed z-50 top-0 left-0 right-0 m-[12px] max-lg:m-0`}
`
const Div_HeaderContainer = styled.div<IHeaderProps | any>(({ value }) => [
    tw`flex items-center max-w-screen-lg space-x-6 mx-auto bg-white px-[25px] py-[15px] transition-shadow rounded-2xl max-lg:rounded-none backdrop-filter backdrop-blur-xl`,
    value && tw`shadow-light-el-4 bg-opacity-75`,
])

const Div_Image = styled.div`
    ${tw`w-[172.5px] h-[24px] relative max-sm:w-[155px] max-sm:h-[25px]`}
`

const A_HeaderMenu = styled.a`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 20px;
    line-height: 22px;
    text-decoration-line: none;
    ${tw`text-dark-3 hover:text-dark-2 hover:no-underline transition-colors max-sm:text-[18px]`}
`
