
export async function extractUserInformation(profileObject){

    const date = new Date(profileObject.created_at)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'October', 'November', 'December']

    const joiningDate = `Joined ${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`               

    const displayedData = {
        profilePictureUrl: profileObject.avatar_url,
        full_name: profileObject.name,
        username: `@${profileObject.login}`,
        location: profileObject.location,
        joined: joiningDate,
        repositries: profileObject.public_repos,
        followers: profileObject.followers,
        following: profileObject.following
    }
    return displayedData
}