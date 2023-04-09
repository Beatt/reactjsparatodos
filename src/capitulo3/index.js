import * as React from 'react'
import imagen from './imagen.png'

const Capitulo3 = () => {
  return (
    <div className='capitulo'>
      <h2>Capitulo 3</h2>
      <p>Formulario de inicio de sesión de Google</p>
      <img src={imagen} alt="" className='capitulo__imagen' />
    </div>
  )
}

export default Capitulo3