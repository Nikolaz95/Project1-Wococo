import React from 'react'
import Hd from '../Hd/Hd'
import Ft from '../Ft/Ft'
import MainContent from '../MainContent2/MainContent'

const Hp = () => {
    return (
        <main>
            <Hd {...Hd} />
            <MainContent {...MainContent} />
            <Ft {...Ft} />

        </main>
    )
}

export default Hp