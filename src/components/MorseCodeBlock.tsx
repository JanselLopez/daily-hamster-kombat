import { morseCoder } from "../utils/encoder"

const MorseCodeBlock = ({word}:{word?:string}) => {
    const morse = word?.split('')?.map((it)=>morseCoder(it))
  return (
    <div className='p-4 transition-all bg-gradient-to-b from-rose-800 to-indigo-900 hover:to-indigo-900 hover:from-rose-600 h-screen w-full flex flex-col justify-center items-center gap-4'>
       <h2 className='text-4xl font-bold'>DAILY CIPHER</h2>
        <h3 className='text-4xl font-semibold'>
        {
            word || '???'
        }
        </h3>
        <h4 className='text-4xl'>
        {
            morse?.map((it:string,idx:number)=>{
                if(it === '/'){
                    return <br/>
                }
                return <div key={it} className='grid grid-cols-2 gap-4'>
                    <div>{word?.[idx]}</div> <div>{it}</div>
                </div>
            })
        }
        </h4>
    </div>
  )
}

export default MorseCodeBlock