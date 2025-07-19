import type { ItemCardProps } from "../types";
import candleImg from "/candle.png";
import { useState, useRef, type FC, Fragment } from "react";

const ItemCard: FC<ItemCardProps> = ({ name, description, composition }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isAllowedText, setIsAllowedText] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleOnFocus = () => {
    setIsFocused(true);
  };
  const handleOnBlur = (event: React.FocusEvent<HTMLElement>) => {
    if (
      event.relatedTarget === null ||
      event.relatedTarget.className !== "order-link"
    ) {
      setIsFocused(false);
    }
  };
  const handleTransitionEnd = (
    event: React.TransitionEvent<HTMLDivElement>
  ) => {
    if (event.propertyName === "width" && isFocused) {
      setIsAllowedText(true);
      cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (event.propertyName === "width" && !isFocused) {
      setIsAllowedText(false);
    }
  };
  const descriptionComponent = (
    <p className="card-description">
      {description.split("\n").map((line, index) => (
        <Fragment key={index}>
          {line}
          <br />
          <br />
        </Fragment>
      ))}
    </p>
  );
  const compositionComponent = (
    <ul className="card-description composition">
      {composition.split("\n").map((line, index) =>
        index !== 0 ? (
          <li key={index}>
            {line}
            <br />
          </li>
        ) : (
          <b key={index}>{line}</b>
        )
      )}
    </ul>
  );
  const orderDetails = (
    <p className="order-text">
      Замовити на{" "}
      <a
        className="order-link"
        href="https://www.instagram.com/teploporuch/"
        target="_blank"
      >
        @teploporuch
      </a>
    </p>
  );
  return (
    <>
      <div
        onTransitionEnd={handleTransitionEnd}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        className="card"
        tabIndex={0}
        ref={cardRef}
      >
        <div className="card-main">
          <img
            className="card-img"
            height="420px"
            width="auto"
            src={candleImg}
          />
          <p className="card-name">{name}</p>
        </div>
        {isFocused && isAllowedText ? (
          <div className="card-main card-additional">
            {descriptionComponent}
            {compositionComponent}
            {orderDetails}
          </div>
        ) : null}
      </div>
      <hr className="card-separator" />
    </>
  );
};

export default ItemCard;
