import React from 'react'
import styled from 'styled-components'
import {FaProjectDiagram, FaExternalLinkAlt} from 'react-icons/fa'
import {colors} from '../../theme/theme'

export default function RepoList({userInfo}) {
    return (
        <RepoWrapper>
            <h2>Top Repos</h2>
            <div className='container'>
                
                {
                    userInfo.repos.slice(0,9).map((repo,index) =>{
                            return(
                                <Repo key={index}>
                                    <div className="row">
                                        <FaProjectDiagram  className='icon'/>
                                        <div className="repo-name">{repo.name}</div>
                                    </div>
                                    <div className="row">
                                        <div className="info">{`Language: ${repo.language ? repo.language : 'Unknown'}`}</div>
                                        <div className="info">{`Stars: ${repo.stargazers_count}`}</div>
                                        <div className="info">{`Forks: ${repo.forks}`}</div>
                                        <div className="info">{`Size: ${repo.size}KB`}</div>
                                    </div>
                                    <div className="row">
                                        <a href={repo.html_url} target='_blank' rel="noreferrer" className="link">Open <FaExternalLinkAlt/></a>
                                    </div>
                                </Repo>
                            )
                        }
                    )
                }
            </div>
        </RepoWrapper>
    )
}

const RepoWrapper = styled.div`
    width: 100%;
    margin-top: 100px;
    padding: 0 8%;
    h2{
        color: ${colors.darkGrey}
    }
    .container{
        padding: 25px 0;
        display: flex;
        flex-wrap: wrap;
        gap: 25px;
        justify-content: space-between;
    }

`

const Repo = styled.div`
    border-radius: 3px;
    box-shadow: 1px 1px 5px rgba(0,0,0, 0.2);
    padding: 15px;
    width: 300px;
    height: 180px;
    display: flex;
    gap: 15px;
    flex-direction: column;

    .row{
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        align-items: center;

        .repo-name, .icon{
            color: ${colors.darkGrey};
            font-size: 22px;
            font-weight: 700;

        }
        .icon{
            color: ${colors.purple};
        }
        .info{
            font-size: 0.8rem;
            color: ${colors.grey};
        }
        .link{
            width: 100%;
            padding: 10px;
            text-decoration: none;
            color: ${colors.purple};
            background: ${colors.darkGrey};
            border-radius: 3px;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
        }
    }
`