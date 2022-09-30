import './App.css'
import { useEffect, useState } from "react"
import DisplayCards from './DisplayCards'

export default function App() {
const [faves, setFaves] = useState ([])
const [search, setSearch] = useState ("")
const [data, setData] = useState ({villagers: []})

  useEffect (()=>{
    fetch ("http://acnhapi.com/v1/villagers/")
      .then(response => response.json())
      .then ((rdata)=>{
        // console.log("villager data:" , rdata) rdata=responseData
        rdata=Object.values(rdata)
        setData({villagers: rdata})
        console.log("villager data:", rdata)
      })
      .catch(err => console.warn(err))
  }, [])

  // const villagerList = data.villagers.map((villager,index)=>{
  //   return <li key={`villager${index}`}>
  //      {villager.name["name-USen"]}</li>
  // })

  const getFilteredVillagers = (e)=>{
    const searchTerm = search.toLowerCase()
    const filteredVillagers =  data.villagers.filter (villager =>{
        const name = villager.name["name-USen"].toLowerCase()
        return name.includes(searchTerm)
      })
      return filteredVillagers
  }


  const handleClick = villager=> {
    // doesn't allow for duplicate faves
    if (faves.indexOf(villager) === -1){
      setFaves ([...faves, villager])
    }
  }
  return (
    <div className="App">
    {/* search input */}
        <div>
          <label htmlFor="villager-search">Search for a Villager:</label>
          <input
            id="villager-search"
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)} />
        </div>

        <div style= {{display: "flex"}}>
          <div>
            <h1> Search Results</h1>
            <DisplayCards
              villagers={getFilteredVillagers()}
              handleClick={handleClick}
            />
          </div>
          <div>
            <h1> Favorite Villagers: </h1>
            <DisplayCards
              villagers={faves}
              handleClick={handleClick} 
              />
          </div>
        </div>
        
    </div>
  );
}


