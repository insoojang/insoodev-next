import tw, { styled } from 'twin.macro'
import { Header, Footer } from './index'
import { useScrollReactiveFloat } from '../../hooks/useScrollReactiveFloat'

const MainLayout = ({ children }) => {
    const float = useScrollReactiveFloat()
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
