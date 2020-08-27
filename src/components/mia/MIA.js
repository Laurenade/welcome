import React from "react";
import fourOhFour from "../../assets/images/404cat.jpg";

class MIA extends React.Component {
  render() {
    return (
      <div className="MIA">
        <img src={fourOhFour} alt="Page NOT Found!" />
        <br />
        M.I.A. - Page NOT Found!
      </div>
    );
  }
}

export default MIA;
