import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class PodContent extends Component {

  render() {
    if (!this.props.pod) {
      return (<React.Fragment />)
    }

    const { explanation, title, url, media_type } = this.props.pod;
    return (
      <div className="pod-content">
        <h3 className="pod-title text-center">{title}</h3>
        <div className="pod-video">
          {media_type==="video" && <ReactPlayer url={url} width='100%' />}
          {media_type==="image" && <img src={url} />}
        </div>
        <div className="pod-explanation">
          {explanation}
        </div>
      </div>
    )
  }
}
export default PodContent
