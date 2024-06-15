import { useEffect, useState } from 'react'

import Ad from './components/Ad'
import DailyBlock from './components/DailyBlock'

interface DailyApi {
  fecha:string
  cifrado:string
  '1ra carta del combo':string
  '2da carta del combo':string
  '3ra carta del combo':string
}

function App() {

  const [dailys, setDaylis] = useState<DailyApi[]>([])

  useEffect(()=>{
    fetch(`https://sheetdb.io/api/v1/0slv0y2nrtzm1`).then(res=>res.json()).then((newDailys)=>{
      setDaylis(newDailys)
    })
  },[])

  return (
    <>
      {
        dailys?.map((it)=>{
          return <>
          <DailyBlock date={it.fecha} cypher={it.cifrado} comboCard1={it['1ra carta del combo']} comboCard2={it['2da carta del combo']} comboCard3={it['3ra carta del combo']}/>
          <Ad/>
          </>
        })
      }
    </>
  )
}

export default App
