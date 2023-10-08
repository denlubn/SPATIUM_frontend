import { Link } from "react-router-dom";

import './ProductCard.scss';
import { Project } from "../../types/Project";
import classNames from "classnames";

type Props = {
  project: Project,
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
  const {
    id,
    name,
    imageUrl,
    description,
    creator,
    requiredSkills,
    // creationDate,
  } = project;

  return (
    <div className="product-card">
      <div className="product-card__container" data-cy="cardsContainer">
        <Link
          to={`/projects/${id}`}
          className="product-card__link"
        // onClick={() => currentProduct && getCardDetails(currentProduct.id)}
        >
          <img src={`${imageUrl}`} alt={`${name}`} className="product-card__image" />
          <p className="product-card__title">Created by <strong>{creator}</strong></p>
        </Link>

        <div className="product-card__prices">
          <span className="product-card__price">{`${name}`}</span>
          {/* {discount > 0 && <span className="product-card__discount">{`$${discountPrice}`}</span>} */}
        </div>

        <span className="product-card__description">{description}</span>

        <div className="product-card__skills-container">
          {requiredSkills.map(skill => (<button className="product-card__skill">{skill}</button>))}
        </div>

        <div className="product-card__align"></div>

        {/* <div className="product-card__features">
          <ul className="product-card__list">
            {features.keys.map((key) => (
              <li key={key} className="product-card__key">
                {key}
              </li>
            ))}
          </ul>

          <ul className="product-card__list">
            {features.values.map((value) => (
              <li key={value} className="product-card__value">
                {value}
              </li>
            ))}
          </ul>
        </div> */}
        <div className="product-card__buttons">
          <button
            type="button"
            className={classNames(
              'product-card__buttons__to-cart',
            )}
          >
            Join to Project
          </button>
          <button
            data-cy="addToFavorite"
            type="button"
            className={classNames(
              'product-card__buttons__to-favs',
            )}
          >

            <span
              className="product-card__buttons__to-favs--icon"
            />

          </button>
        </div>
      </div>
    </div>
  );
};
