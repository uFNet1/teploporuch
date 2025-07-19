import candleImg from "/candle.png";
import { useState, useRef, type FC } from "react";

interface ItemCardProps {
  name: string;
}

const ItemCard: FC<ItemCardProps> = ({ name }) => {
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
            {description}
            {orderDetails}
          </div>
        ) : null}
      </div>
      <hr className="card-separator" />
    </>
  );
};

export default ItemCard;
