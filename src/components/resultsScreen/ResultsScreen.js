import React from 'react'
import Header from './Header'
import Statistics from './Statistics'

export default function ResultsScreen({statistics, userInfo}) {

    return (
        <>
            <Header userInfo={userInfo}/>
            <Statistics userInfo={userInfo}/>
        </>
    )
}
