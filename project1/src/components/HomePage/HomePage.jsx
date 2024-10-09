import React from 'react'

import Button from '../Button/Button'
import Header from '../Header/Header'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'

const HomePage = ({ }) => {
    return (
        <main>
            <Header {...Header} />
            <Content {...Content} />
            <Footer {...Footer} />
        </main>
    )
}

export default HomePage