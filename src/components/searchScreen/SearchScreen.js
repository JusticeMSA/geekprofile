import React, {useState} from 'react'
import styled, {keyframes} from 'styled-components'
import {colors} from '../../theme/theme'
import {FaGithub} from 'react-icons/fa'
import Footer from '../footer/Footer'

export default function SearchScreen({processSearch}) {

    const [username, setUsername] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState("")

    const handleInputChange = (e) =>{
        setUsername(previous => e.target.value)
    }

    const handleSearch = (e) =>{

        e.preventDefault();

        if(username === ''){
            setMessage('Please enter username!')
        }else{

            setIsLoading(true)
            processSearch(username)
            

        }
    }

    return (
        <Container>
            <Logo>
                <FaGithub/>
                GEEKED PROFILE
            </Logo>
            <Form onSubmit={handleSearch}>
                <UsernameInput type='' placeholder='Enter Username' onChange={handleInputChange} autoFocus/>
                <SubmitButton type='submit'>{isLoading? (<Loader/>) :'Search'}</SubmitButton>
            </Form>
            <Message>{message}</Message>

            <Footer />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    background-color: ${colors.black};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Logo = styled.div`
    color: ${colors.purple};
    margin: 0;
    font-size: 3em;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap:20px;
`

const UsernameInput = styled.input`
    width: 330px;
    height: 70px;
    background-color: ${colors.darkGrey};
    border: none;
    padding: 0 15px;;
    text-align: center;
    font-size: 25px;
    color: ${colors.blue};
    caret-color: ${colors.purple};

    &:focus{
        outline: none;
    }

    &::placeholder{
        opacity: 0.2;
    }
`

const SubmitButton = styled.button`
    width: 330px;
    height: 70px;
    background-color: ${colors.purple};
    border: none;
    padding: 0 15px;;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    color: ${colors.black};
`
const animate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); } 
`
const Loader = styled.div`
    margin: auto;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top: 5px solid ${colors.black};
    animation: ${animate} 0.5s linear infinite;
`

const Message = styled.div`
    font-size: 1rem;
    color: ${colors.red};
    margin-top: 15px;
`