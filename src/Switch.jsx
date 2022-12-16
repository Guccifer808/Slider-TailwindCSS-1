import React, { useState } from 'react';
import classNames from 'classnames';
export default function Switch() {
  const [isSelected, setSelected] = useState(false);
  return (
    <div
      onClick={() => setSelected(!isSelected)}
      className={classNames(
        'flex w-10 h-5 bg-gray-900 m-5 rounded-full cursor-pointer',
        {
          'bg-yellow-400': isSelected,
        }
      )}
    >
      <span
        className={classNames('h-5 w-5 bg-white rounded-full', {
          'ml-5': isSelected,
        })}
      />
    </div>
  );
}
