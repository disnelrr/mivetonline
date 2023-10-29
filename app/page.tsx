import Image from 'next/image'

export default function Home() {
  return (

    <header>
      <div>
        <nav className="flex justify-between items-center  bg-primary ">
          <div className="text-white font-bold ml-5">
            <div className="flex items-center ml-2">
              <a href="#" className="mr-4">Horario</a>
              <a href="#" className="mr-4">Zona </a>
              <a href="#" className="">Tarifas</a>
            </div>
          </div>
          <div className="flex items-center bg-white w-8/12 py-3 justify-center" ><p>626 322 230</p>
          </div>
          <div className="flex items-center text-white mr-9">
            <a href="#" className="mr-4"><i className="fab fa-twitter"></i></a>
            <a href="#" className="mr-4"><i className="fab fa-facebook"></i></a>
            <a href="#" className="mr-4"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="mr-4"><i className="fab fa-instagram"></i></a>
            <a href="#" className="mr-4"><i className="fab fa-youtube"></i></a>

          </div>



        </nav>
      </div>
    </header>



  )
}
