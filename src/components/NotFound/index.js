import './index.css'

const NotFound = props => {
  const redirectToHomepage = () => {
    const {history} = props
    history.push('/')
  }

  return (
    <div className="not-found-container">
      <img
        className="not-found-image"
        src="https://res.cloudinary.com/pavankalyanbandaru/image/upload/v1651083038/tasty-kitchens/page-not-found.png"
        alt="not found"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-description">
        We are sorry, the page you requested could not be found.
        <br /> Please go back to the homepage
      </p>
      <button
        className="homepage-button"
        type="button"
        onClick={redirectToHomepage}
      >
        Homepage
      </button>
    </div>
  )
}

export default NotFound
