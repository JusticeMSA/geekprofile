import React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme/theme'
import {FaLocationArrow, FaCalendarAlt} from 'react-icons/fa'

export default function Header({userInfo}) {

    return (
        <Section>
            <ProfilePicture src={userInfo.profileInfo.profilePictureUrl}/>
            <FullName>{userInfo.profileInfo.full_name}</FullName>
            <Username>{userInfo.profileInfo.username}</Username>
            <LJWrapper>
                {userInfo.profileInfo.location !== null ?
                (<div><FaLocationArrow/> {userInfo.profileInfo.location}</div>) :
                 ''
                }
                <div><FaCalendarAlt/> {userInfo.profileInfo.joined}</div>
            </LJWrapper>
            <CardsWrapper>
                <Card>
                    <span className="num">{userInfo.profileInfo.repositries}</span>
                    <span className="descr">Repositries</span>
                </Card>
                <Card>
                    <span className="num">{userInfo.profileInfo.followers}</span>
                    <span className="descr">Followers</span>
                </Card>
                <Card>
                    <span className="num">{userInfo.profileInfo.following}</span>
                    <span className="descr">Following</span>
                </Card>
            </CardsWrapper>
        </Section>
    )
}

const Section = styled.section`
    background-color: ${colors.black};
    height: 70vh;
    box-sizing: border-box;
    padding: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px; 

`

const ProfilePicture = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: solid 5px ${colors.purple};
`

const FullName = styled.div`
    font-size: 2em;
    color: ${colors.lightGrey};
`

const Username = styled.div`
    font-size: 1.3em;
    color: ${colors.blue}
`

const LJWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    color: ${colors.lightGrey};
    font-size: 0.9em;
`

const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`

const Card = styled.div`
    background-color: ${colors.darkGrey};
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;
    border-radius: 2px;
    font-size: 16px;
    max-width:  113px;

    .num{
        color: ${colors.lightGrey}
    }

    .descr{
        font-size: 0.7em;
        color: ${colors.purple}
    }

`