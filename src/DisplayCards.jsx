
export default function DisplayCards (props){
    const allVillagers= props.villagers.map((villager,index)=>{
        return(
            <li key={`villager${index}`}
                style={{listStyleType:"none"}}>
                <img src={villager.image_uri} alt={villager.name["name-USen"]}
                onClick={()=>props.handleClick(villager)}
                />
                <p> {villager.name["name-USen"]} </p>
            </li>
        )
    })
    return(
        <ul>
            {allVillagers}
        </ul>
    )
    }

    // use villager id from api
    // // const villagers= props.villagers.map(villager =>[
    //     // return(
    //         <li key ={`${villagers.id}`}
    //     )
    // ])