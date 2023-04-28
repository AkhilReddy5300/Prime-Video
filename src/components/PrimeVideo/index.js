import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const filterAction = moviesList.filter(each => each.categoryId === 'ACTION')
  const filterComedy = moviesList.filter(each => each.categoryId === 'COMEDY')
  console.log(filterAction)

  return (
    <div className="prime-cont">
      <div className="prime-img-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-img"
        />
      </div>
      <div className="slider">
        <h1 className="movies-header">Action Movies</h1>
        <MoviesSlider moviesDetails={filterAction} />
      </div>
      <div className="slider">
        <h1 className="movies-header">Comedy Movies</h1>
        <MoviesSlider moviesDetails={filterComedy} />
      </div>
    </div>
  )
}
export default PrimeVideo
