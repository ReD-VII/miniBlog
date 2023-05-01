import React, { useState } from 'react'

// STYLES
import { FormsConteiner } from '../../styles/stylesForm'


// LOGO
import logo from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom';


const Register = () => {
  const initialStateForm = {
    name: '',
    mail: '',
    passwrd: '',
    confPasswrd: ''
  };

  const [formData, setFormData] = useState(initialStateForm)
  const [error, setError] = useState('')





  const handleSubmit = (event) => {
    event.preventDefault()

    setError('')

    if (formData.passwrd !== formData.confPasswrd) {
      setError('As senhas precisam ser iguais...')
      return
    }

    console.log('SUBMITADO')
    console.log(`
      Nome: ${formData.name}
      Email: ${formData.mail}
      Passwrd: ${formData.passwrd}
      ConfPasswrd: ${formData.confPasswrd}

    `)

    // REZET FORMULARIO
    setFormData(initialStateForm)
  }




  return (
    <>
      <FormsConteiner>
        <Link to='/'>
          <img src={logo} alt="logo" className='form_conteiner_img' />
        </Link>
        <form onSubmit={handleSubmit}>
          <div className='boxes_form'>
            <label>
              <span>Nome</span>
              <input type="text" name="username" autoComplete="username" onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} required />
            </label>
          </div>
          <div className='boxes_form'>
            <label>
              <span>Email</span>
              <input type="email" name="email" id="email" autoComplete="email" onChange={(e) => setFormData({ ...formData, mail: e.target.value })} value={formData.mail} required />
            </label>
          </div>
          <div className='boxes_form'>
            <label>
              <span>Password</span>
              <input type="password" name="password" id="password" autoComplete="current-password" onChange={(e) => setFormData({ ...formData, passwrd: e.target.value })} value={formData.passwrd} required />
            </label>
          </div>
          <div className='boxes_form'>
            <label>
              <span>Password</span>
              <input type="password" name="confirmPassword" id="confirmPassword" autoComplete="current-password" onChange={(e) => setFormData({ ...formData, confPasswrd: e.target.value })} value={formData.confPasswrd} required />
            </label>
          </div>


          <input className='btn_forms' type="submit" value='Enviar' />

        </form>

        <p className='erro_msg'>{error}</p>
      </FormsConteiner>
    </>
  )
}

export default Register