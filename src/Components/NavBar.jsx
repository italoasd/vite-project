import viteLogo from '/vite.svg'

function NavBar(){
  return(
    <header className='navBar'>
      <img src={viteLogo} className='logo' alt="Vite logo" />

      <div className="navLinks">
        <a href="">Link</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </div>
    </header>
  )
}

export default NavBar