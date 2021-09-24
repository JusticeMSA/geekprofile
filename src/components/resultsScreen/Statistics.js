import React from 'react'
import styled from 'styled-components'
import {colors} from '../../theme/theme'
import RepoList from './RepoList'
import { Doughnut, Bar } from 'react-chartjs-2';

export default function Statistics({userInfo}) {

    const extractLanguages = (langArray)=>{

        let arr = []
        userInfo.languages.map((lang) =>{
            return arr.push(lang.label)
        })

         return arr
    }

    const extractLangBackgroundColor = (langArray) =>{
        
        let arr = []
        userInfo.languages.map((lang) =>{
            return arr.push(lang.color)
        })

        return arr
    }

    const extractLangNumber = (langArray) =>{
        
        let arr = []
        userInfo.languages.map((lang) =>{
            return arr.push(lang.value)
        })

        return arr
    }

    const sortReposByStars= (repoArray) =>{

        //first we sort repos by stars
        let arr =  repoArray.sort((a,b) => {return b.stargazers_count - a.stargazers_count})
        let topFiveArr = []

        //we only need top five most starred
        arr.slice(0,5).map((ar,index) =>{

                 return topFiveArr.push(ar.stargazers_count)
        })

        return topFiveArr
    }
    const sortReposNamesByStars= (repoArray) =>{

        //first we sort repos by stars
        let arr =  repoArray.sort((a,b) => {return b.stargazers_count - a.stargazers_count})
        let topFiveArr = []

        //we only need top five most starred
        arr.slice(0,5).map((ar,index) =>{
            return topFiveArr.push(ar.name)
        })

        return topFiveArr
    }

    const langData = {

        labels: extractLanguages(userInfo.languages),
        datasets: [
            {
                label: 'languages',
                data: extractLangNumber(userInfo.languages),
                backgroundColor: extractLangBackgroundColor(userInfo.languages),
                borderWidth: 1,
            }
        ]
        
    }

    const starsData = {

        labels: sortReposNamesByStars(userInfo.repos),
        datasets: [
            {
              label: 'Most starred',
              data: sortReposByStars(userInfo.repos),
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        };

        const starsOptions = {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          };

    return (
        <StatsWrapper>
            <CardRow>
                <StatsCard>
                    <CardHeading>Top languages</CardHeading>
                    <Container>
                        <Doughnut data={langData} />
                    </Container>
                </StatsCard>
                <StatsCard>
                    <CardHeading>Most starred repos</CardHeading>
                    <Container>
                        <Bar data={starsData} options={starsOptions}/>
                    </Container>
                </StatsCard>
            </CardRow>
            <RepoList userInfo={userInfo}/>
        </StatsWrapper> 
    )
    }

const StatsWrapper = styled.section`
    position: absolute;
    top: 65vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;   
    `
    
const CardRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 90%;
    
    @media screen and (max-width: 680px){
        flex-direction: column;
        align-items: center;
    }

`

const StatsCard = styled.div`
    background: #fff;
    padding: 15px;
    width: 350px;
    height: 400px;
    min-width: 200px;
    border-radius: 3px;
    box-shadow: 1px 1px 5px rgba(0,0,0, 0.2);
    
    ul{
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 20px;

        li{
            margin-top: 50px;
            display: flex;
            gap: 10px;
            align-items: center;

            .language-color{
                width: 15px;
                height: 15px;
                background: ${props => props.languageColor};
            }
        
            .language-name{
                color: ${colors.grey};
                font-size: 1.1rem;
            }
            .language-value{
                color: ${colors.grey};
                font-size: 1.1rem;
            }
        }
    }

`

const CardHeading = styled.h3`
    color: ${colors.grey};
    text-align: center
`

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
`
