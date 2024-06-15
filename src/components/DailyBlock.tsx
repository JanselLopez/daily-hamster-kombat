import ComboCardsBlock from "./ComboCardsBlock"
import MorseCodeBlock from "./MorseCodeBlock"


const DailyBlock = ({date,cypher,comboCard1,comboCard2,comboCard3}:{
    date:string,
    cypher:string,
    comboCard1:string,
    comboCard2:string,
    comboCard3:string,
}) => {
  return (
    <div className='sm:grid sm:grid-cols-2 w-screen relative'>
      <div className="absolute w-full text-center pt-4 text-6xl font-semibold">{date}</div>
      <img src='/icon.webp' className="transition-all absolute w-full h-full object-contain scale-[0.3] sm:scale-[0.1] xl:sm:scale-[0.2]"/>
      <MorseCodeBlock word={cypher}/>
      <ComboCardsBlock cards={[comboCard1, comboCard2, comboCard3]}/>
    </div>
  )
}

export default DailyBlock