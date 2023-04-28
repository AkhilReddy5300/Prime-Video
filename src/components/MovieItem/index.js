import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {details} = props
  const {id, thumbnailUrl, videoUrl, categoryId} = details
  return (
    <div>
      <Popup
        modal
        trigger={
          <div className="thumbnail-cont">
            <button type="button" data-testid="closeButton" className="btn">
              <img src={thumbnailUrl} alt="thumbnail" />
            </button>
          </div>
        }
        className="popup-cont"
      >
        {close => (
          <div className="btn-cont">
            <button
              type="button"
              className="button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose className="end" />
            </button>
          </div>
        )}
        <div className="video-bg">
          <ReactPlayer url={videoUrl} />
        </div>
      </Popup>
    </div>
  )
}

export default MovieItem
