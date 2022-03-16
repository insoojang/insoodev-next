import tw, { styled } from 'twin.macro'

import { MainLayout } from '../components/layout'
import { Jumbotron } from '../components/content'
import AboutMe from '../components/content/AboutMe'

const Index = () => {
    return (
        <MainLayout>
            <Main>
                <Jumbotron />
                <AboutMe />
            </Main>
        </MainLayout>
    )
}

export default Index

const Main = styled.main`
    ${tw`pt-[74px] pb-[100px]`}
`
