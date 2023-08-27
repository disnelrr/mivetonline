import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className='bg-red-100'>
        <div>
          <h1>Aqui dentro va el header</h1>
        </div>
      </header>
      <main>
        <div>
          <h2>El contenido va aqui </h2>
        </div>
      </main>
      <footer>
        <div>
          <h5> Contenedor Footer</h5>
        </div>
      </footer>
    </>

  )
}
