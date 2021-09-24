import React, {useState} from 'react'

export default function useFetchFromGithub({username}){

    const [requestError, setRequestError] = useState(null)

    //Fetches data from the github api using the entered username
    const fetchUserData = async (username) => {

        const URL = 'https://api.github.com/users/'

        try{

            let response = await fetch(URL+username)

            if(!response.ok){

                setRequestError('Something went wrong')
                return requestError
            }

            let data = response.json()

            return data


        } catch(e){

            console.log(e)
            
        }
    }

}