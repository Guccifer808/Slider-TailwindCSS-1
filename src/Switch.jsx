import React, { useState } from 'react';
import classNames from 'classnames';
export default function Switch() {
  const [isSelected, setSelected] = useState(false);
  return (
    <div
      onClick={() => setSelected(!isSelected)}
      className={classNames(
        'flex w-10 h-3 md:h-5 bg-gray-900 m-5 rounded-full cursor-pointer',
        {
          'bg-yellow-400': isSelected,
        }
      )}
    >
      <span
        className={classNames('md:h-5 md:w-5 h-3 w-3 bg-white rounded-full ', {
          'ml-7': isSelected,
        })}
      />
    </div>
  );
}
