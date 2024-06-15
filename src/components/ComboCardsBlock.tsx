const ComboCardsBlock = ({cards}:{cards:string[]}) => {
  return (
    <div className=" p-4 bg-gradient-to-b text-center from-sky-800 to-indigo-900 hover:to-indigo-900 hover:from-sky-600  h-screen w-full flex flex-col gap-2 justify-center items-center text-3xl">
        <h2 className='text-4xl font-bold'>DAILY COMBO</h2>
        <h4>
        {
            cards.map((it,idx)=>{
                return <div key={it}>{idx+1} - {it}</div>
            })
        }
        </h4>
    </div>
  )
}

export default ComboCardsBlock