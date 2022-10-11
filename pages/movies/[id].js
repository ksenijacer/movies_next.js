/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovie } from "../../store/movies/selectors";
import { getMovie } from "../../store/movies/slice";
import { useRouter } from "next/router";
import Comment from "../../components/Comment";

function SingleMoviePage() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const movie = useSelector(selectMovie);

  useEffect(() => {
    if (id) {
      dispatch(getMovie(id));
    }
  }, [id, dispatch]);

  return (
    <>
      {movie && (
        <div className="row mb-4">
          <div className="col-12">
            <div className="card h-30" style={{ width: "500px", margin: 5 }}>
              <p>Movie title: {movie.title}</p>
              <p>Description: {movie.description}</p>
              <p>
                Genre:
                {movie.genres?.map((genre, index, genres) =>
                  index + 1 === genres.length
                    ? " " + genre.type
                    : ` ${genre.type}, `
                )}
              </p>
              <img
                className="card-img-top"
                src={movie.image_url}
                alt="Movie picture"
                width={250}
                height={250}
              />
            </div>
            <div>
              <Comment movie={movie} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleMoviePage;
