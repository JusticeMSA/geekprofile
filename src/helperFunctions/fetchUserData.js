


//Fetches data from the github api using the entered username
export const fetchUserData = async (username) => {

    const URL = 'https://api.github.com/users/'

    try{

        const response = await fetch(URL+username)
        return await response.json()


    } catch(e){

        console.log(e)
        
    }
}