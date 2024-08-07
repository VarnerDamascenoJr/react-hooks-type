
import { useParams } from "react-router-dom"
const Profile = () => {
    const params = useParams<{profileId: string}>()
    console.log(params)
    return(
        <div>this is my page for unique profile {params.profileId}</div>
    )
}

export default Profile