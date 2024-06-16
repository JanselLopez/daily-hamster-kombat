import ComboCardsBlock from "./ComboCardsBlock"
import MorseCodeBlock from "./MorseCodeBlock"
import ScrollDesktopContainer from "./ScrollDesktopContainer"


const DailyBlock = ({date,cipher,comboCard1,comboCard2,comboCard3}:{
    date:string,
    cipher:string,
    comboCard1:string,
    comboCard2:string,
    comboCard3:string,
}) => {
  return (
    <div className='md:grid md:grid-cols-2 w-screen relative'>
      <div className="absolute w-full text-center pt-4 text-6xl font-semibold">{date}</div>
      <ScrollDesktopContainer/>
      <img onClick={()=>window.open('https://t.me/hamster_kOmbat_bot/start?startapp=kentId1666436655')} src={`${window.location.href}/icon.webp`} className="cursor-pointer hover:brightness-125 transition-all absolute w-full h-full object-contain scale-[0.3] md:scale-[0.15] xl:scale-[0.2]"/>
      <MorseCodeBlock word={cipher}/>
      <ComboCardsBlock cards={[comboCard1, comboCard2, comboCard3]}/>
    </div>
  )
}

export default DailyBlock