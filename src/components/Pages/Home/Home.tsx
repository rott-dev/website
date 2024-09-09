import logo from '../../../assets/logo.svg'

import css from './Home.module.scss'

const Home = () => {
  return (
    <div className={css.App}>
      <div className={css.Main}>
        <img src={logo} className={css.Logo} alt='Rott.dev' />
        This is a tool to improve code quality and repository standards.
        <br />
        <br />
        Find out more on our GitHub organization:
        <a href='https://github.com/rott-dev' className={css.Link}>
          github.com/rott-dev
        </a>
      </div>
    </div>
  )
}

export default Home
