import React, { useState } from "react";
import { movieData as sliderData } from "../../mockData/movieData";
import MovieSlider from "../MovieSlider/MovieSlider";
import { Link } from "react-router-dom";
import { Trailer, GetMore } from "../Svg/Svg";

import "../NextMovies/NextMovies.scss";

let count = 1;
export default function NextMovies(props) {
    const [movieId, setMovieId] = useState(props.filteredData[0].id);

    function getTags(tags) {
        return tags.map((tag, index) => (
            tag === "PRESALE"
                ? <span className="tags__item tags__item--presale" key={index}>{tag}</span>
                : <span className="tags__item" key={index}>{tag}</span>
        ));
    }

    function getAboutMovie(idMovie) {
        !idMovie ? movieId : setMovieId(idMovie);
        const { src, tags, title, genre, previews, urlTrailer, getDetail, datesShow } = sliderData[movieId - 1];

        return (
            <div className="slider" style={{ backgroundImage: `url('${src}')` }}>
                <div className="slider__content slider-content">
                    <div className="slider-content__tags tags">{getTags(tags)} </div>
                    <div className="slider-content__movie-title">{title}</div>
                    <div className="slider-content__genre"><span className="genre-title">Жанр: </span>{genre}</div>
                    <div className="slider-content__previews previews">
                        {getSubTitle(datesShow)}
                        <div className="previews__items">{getPreviews(previews)}</div>
                    </div>
                    {getMore(urlTrailer, getDetail)}
                </div>
            </div>
        );
    }

    function getPreviews(previews) {
        return [...previews].map(({ href, time, tooltip: { price, hall } }, index) => (
            <div key={index} className="previews__item preview" >
                <Link to={href} className="preview__link">{time}</Link>
                <div className="preview__tooltip">
                    <span className="preview__price">{price}</span>
                    <span className="preview__hall">{hall}</span>
                </div>
            </div>));
    }

    function showSlide(flagButton) {
        let id = props.filteredData[count - 1].id;
        if (flagButton && id !== props.filteredData[props.filteredData.length - 1].id) {
            id++;
            count++;
            getAboutMovie(id);
        }
        else if (!flagButton && id !== props.filteredData[0].id) {
            id--;
            count--;
            getAboutMovie(id);
        }
    }

    function getSubTitle(datesShow) {
        const month = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
        return <div className="previews__title">В кіно з {datesShow[0][0] + " " + month[datesShow[0][1] - 1]}:</div>;
    }

    function getMore(urlTrailer, getDetail) {
        return (
            <div className="slider-content__more get-more">
                <Link to={urlTrailer} className="get-more__item" target="__blank">
                    <Trailer className={"get-more__svg"} />
                    <span className="get-more__title">Трейлер</span>
                </Link>
                <Link to={`/details/${getDetail}`} className="get-more__item">
                    <GetMore className={"get-more__svg"} />
                    <span className="get-more__title">Детальніше</span>
                </Link>
            </div>
        );
    }


    return (
        <section className="main__ next-movies next-movies">
            {getAboutMovie()}
            <MovieSlider getAboutMovie={getAboutMovie} filterData={props.filteredData} />
            <button className="slick-arrow slick-prev arrow-mobile" onClick={() => showSlide(false)}></button>
            <button className="slick-arrow slick-next arrow-mobile" onClick={() => showSlide(true)}></button>
        </section >
    );
}
