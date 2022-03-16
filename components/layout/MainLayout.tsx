import tw, { styled } from 'twin.macro'
import { Header, Footer } from './index'
import { useScroll } from '../../hooks/useScroll'

const MainLayout = ({ children }) => {
    const float = useScroll()
    return (
        <>
            <Header float={float} />
            <Main>{children}</Main>
            <Footer />
        </>
    )
}

export default MainLayout

const Main = styled.main`
    ${tw`px-[16px] max-w-screen-lg mx-auto`}
`
