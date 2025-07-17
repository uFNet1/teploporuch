import candleImg from '/candle.png'
import { useState } from 'react';

export default function ItemCard({name}) {
    const [isFocused, setIsFocused] = useState(false);

    const handleOnFocus = () => {
        setIsFocused(true);
    };
    const handleOnBlur = () => {
        setIsFocused(false);
    };
    const description = <p className='card-description'>"Ванільний гоголь-моголь" — це тепла обійми спогадів у кожному вдиху. М’який аромат домашнього гоголь-моголю, збитого з любов’ю, наповнений вершковими нотами ванілі, щіпкою мускатного горіха та легким карамельним шлейфом. Він нагадує дитинство, коли морозні вечори пахли затишком, а мама в кухні тихо збивала щось солодке.</p>
  return (
  <div onFocus={handleOnFocus} onBlur={handleOnBlur} className='card' tabIndex={0}>
    {isFocused ? (
          <>
          <div className='card-main'>
            <img className='card-img' height='420px' width='auto' src={candleImg} />
          <p className='card-name'>{name}</p>
          </div>
          
          {description}
          </>
          ): (
            <>
            <div className='card-main'>
            <img className='card-img' height='420px' width='auto' src={candleImg} />
            <p className='card-name'>{name}</p>
            </div>
            </>
          )}
          
          
        </div>
        )
}