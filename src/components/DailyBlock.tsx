import ComboCardsBlock from "./ComboCardsBlock"
import MorseCodeBlock from "./MorseCodeBlock"
import ScrollDesktopContainer from "./ScrollDesktopContainer"


const DailyBlock = ({date,cypher,comboCard1,comboCard2,comboCard3}:{
    date:string,
    cypher:string,
    comboCard1:string,
    comboCard2:string,
    comboCard3:string,
}) => {
  return (
    <div className='md:grid md:grid-cols-2 w-screen relative'>
      <div className="absolute w-full text-center pt-4 text-6xl font-semibold">{date}</div>
      <ScrollDesktopContainer/>
      <img src={`${window.location.href}/icon.webp`} className="transition-all absolute w-full h-full object-contain scale-[0.3] md:scale-[0.15] xl:scale-[0.2]"/>
      <MorseCodeBlock word={cypher}/>
      <ComboCardsBlock cards={[comboCard1, comboCard2, comboCard3]}/>
    </div>
  )
}

export default DailyBlock