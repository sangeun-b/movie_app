import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/"); //back home
    }
  }
  render() {
    const { location } = this.props;

    if (location.state) {
      return (
        <section className="detail__container">
          <div className="movie__detail">
            <img
              src={location.state.poster}
              alt={location.state.title}
              title={location.state.title}
            />
            <div className="movie__data">
              <h3 className="movie__title">{location.state.title}</h3>
              <h5 className="movie__year">{location.state.year}</h5>
              <p className="genres">{location.state.genre}</p>
              <p className="movie_summary">{location.state.summary}</p>
            </div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
