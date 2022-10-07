/* eslint-disable @next/next/no-img-element */
import styles from "../styles/App.module.css";
import Link from "next/link";

export default function MovieRow({ movie }) {
  return (
    <div className={styles.moviesComponent}>
      <div className="row mb-4">
        <div className="col-12">
          <div className="card h-100" style={{ width: "320px", margin: 5 }}>
            <img
              className="card-img-top"
              src={movie.image_url}
              alt="Movie picture"
              width={250}
              height={320}
            />
            <div className="card-body">
              <Link href={`movies/${movie.id}`}>Movie title:</Link>
              <p className="card-title"> {movie.title}</p>
              <p className="card-text">Description:{movie.description}</p>

              <p>
                Genre:
                {movie.genres.map((genre, index, genres) =>
                  index + 1 === genres.length
                    ? " " + genre.type
                    : ` ${genre.type}, `
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
