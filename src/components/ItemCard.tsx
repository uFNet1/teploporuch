import candleImg from "/candle.png";
import { useState, type BaseSyntheticEvent, type SyntheticEvent } from "react";

export default function ItemCard({ name }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isAllowedText, setIsAllowedText] = useState(false);

  const handleOnFocus = () => {
    setIsFocused(true);
  };
  const handleOnBlur = (event) => {
    console.log(event.relatedTarget);
    if (event.relatedTarget === null) setIsFocused(false);
  };
  const handleTransitionEnd = (event) => {
    if (event.propertyName === "width" && isFocused) {
      setIsAllowedText(true);
    } else if (event.propertyName === "width" && !isFocused) {
      setIsAllowedText(false);
    }
  };
  const description = (
    <p className="card-description">
      "Ванільний гоголь-моголь" — це тепла обійми спогадів у кожному вдиху.
      М’який аромат домашнього гоголь-моголю, збитого з любов’ю, наповнений
      вершковими нотами ванілі, щіпкою мускатного горіха та легким карамельним
      шлейфом. Він нагадує дитинство, коли морозні вечори пахли затишком, а мама
      в кухні тихо збивала щось солодке.
    </p>
  );
  const orderDetails = (
    <p className="order-text">
      Замовити на{" "}
      <a href="https://www.instagram.com/teploporuch/">@teploporuch</a>
    </p>
  );
  return (
    <div
      onTransitionEnd={handleTransitionEnd}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      className="card"
      tabIndex={0}
    >
      <div className="card-main">
        <img className="card-img" height="420px" width="auto" src={candleImg} />
        <p className="card-name">{name}</p>
      </div>
      {isFocused && isAllowedText ? (
        <div className="card-main">
          {description}
          {orderDetails}
        </div>
      ) : null}
    </div>
  );
}
