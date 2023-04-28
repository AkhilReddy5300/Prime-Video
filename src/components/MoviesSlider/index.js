import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesDetails} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  }

  return (
    <>
      <Slider {...settings}>
        {moviesDetails.map(each => (
          <MovieItem details={each} key={each.id} />
        ))}
      </Slider>
    </>
  )
}
export default MoviesSlider
