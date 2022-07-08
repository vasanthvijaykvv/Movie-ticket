import React from 'react';
import Errorpage from './errorpage.png';
class Error extends React.Component {
  render() {
    return (
      <div class="shadow-lg p-3 mb-5 bg-white rounded">
        <img src={Errorpage}
          class=" mx-auto d-block img-responsive rounded"
          alt="my photo"
          width="500px"
          height="500px" />
      </div>
    )
  }
}

export default Error