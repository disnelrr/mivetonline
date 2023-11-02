import MenuMovile from "./MenuMovile";


const HeaderMovile = () => {
    return (
        <div className=' lg:hidden'>
            <div className='relative flex justify-between bg-primary text-white font-bold text-center h-12 '>
                <div className="p-3 ml-3">MIVETONLINE</div>
                <div><MenuMovile/></div>
                </div>




        </div>

    )
}

export default HeaderMovile;