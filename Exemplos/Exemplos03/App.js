'use strict';

const e = React.createElement;

class Car extends React.Component {
  render() {
    return e("h2", null, " Hi i am a car");
  }
}

document.querySelectorAll('.carro')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(e(Car, { commentID: commentID }),domContainer);
  });