import React from "react";
import styles from "./ProductRating.module.css";
import solidStar from "../../icons/star-solid-icon.svg";
import halfStar from "../../icons/star-half-alt-solid-icon.svg";
import regularStar from "../../icons/star-regular-icon.svg";

const ProductRating = ({ rating, numReviews }) => {
  return (
    <div className={styles.container}>
        {
            rating === 0 ?
            <div>
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
            </div>
            : rating < 1 ?
            <div>
                <img className={styles.halfStar} src={halfStar} alt="star-half" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
            </div>
            : rating === 1 ?
            <div>
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
            </div>
            : rating < 2 ?
            <div>
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.halfStar} src={halfStar} alt="star-half" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
            </div>
            : rating === 2 ?
            <div>
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
            </div>
            : rating < 3 ?
            <div>
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.halfStar} src={halfStar} alt="star-half" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
            </div>
            : rating === 3 ?
            <div>
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
            </div>
            : rating < 4 ?
            <div>
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.halfStar} src={halfStar} alt="star-half" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
            </div>
            : rating === 4 ?
            <div>
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.regularStar} src={regularStar} alt="star-regular" />
            </div>
            : rating < 5 ?
            <div>
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.halfStar} src={halfStar} alt="star-half" />
            </div>
            : rating === 5 ?
            <div>
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                <img className={styles.solidStar} src={solidStar} alt="star-solid" />
                </div>
            :<h1>Not Rated</h1>
        }
        <div className={styles.ratingContainer}>
            {rating && numReviews && (
                <>
                    <h4>{rating.toFixed(1)}</h4>
                    <h6>({numReviews})</h6>
                </>)
            }
            
        </div>
    </div>
  );
};

export default ProductRating;
