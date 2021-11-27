import LogoImage from '../../assets/logo.svg'
import './header.styles.css'

const Header = () => {
  return (
    <header className="header">
      <div>
        <img 
          src={LogoImage} 
          alt='logotipo com ilustração de avião de papel' 
        />
      </div>
    </header>
  )
}

export default Header