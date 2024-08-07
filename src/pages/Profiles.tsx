
import { Link } from "react-router-dom"

const Profiles = () =>{
    const profiles= [1, 2, 3, 4, 5]
    return(
<div>
{
    profiles.map((item )=> (<Link key={item} to={`/profiles/${item}`}>Profile {item}</Link>))
}
</div>
    )
}

export default Profiles