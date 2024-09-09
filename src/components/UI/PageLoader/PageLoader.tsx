import Logo from '../../../assets/icon.svg'
import css from './PageLoader.module.scss'

const PageLoader = () => (
  <div className={css.LoaderBkg}>
    <div className={css.Loader}></div>
    <div className={css.Logo}>
      <img src={Logo} alt='Rott.ai' />
    </div>
  </div>
)

export default PageLoader
