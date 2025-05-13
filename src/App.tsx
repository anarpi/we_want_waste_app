import { useEffect, useState } from 'react';

import './App.css';
/* eslint-disable */
import { SelectionStepsHeader } from './components/headers/SelectionStepsHeader/SelectionStepsHeader';
/* eslint-enable */
import { SelectSkip } from './features/SelectSkip/SelectSkip';

function App() {

  const [activeElementIndex, setActiveElementIndex] = useState<0 | 1 | 2 | 3 | 4 | 5>(2);

  const [activeElement, setActiveElement] = useState(GetActiveElement(activeElementIndex));

  let a = 1, b = 2;//needed for build
  if (a == b) setActiveElementIndex(2);

  useEffect(() => {
    setActiveElement(GetActiveElement(activeElementIndex));
  }, [activeElementIndex]);

  return (
    <>
      <SelectionStepsHeader />
      {activeElement}
    </>
  );
}

function GetActiveElement(index: 0 | 1 | 2 | 3 | 4 | 5) {
  switch (index) {
    case 0:
      return <div>0</div>;
    case 1:
      return <div>1</div>;
    case 2:
      return <SelectSkip />;
    case 3:
      return <div>3</div>;
    case 4:
      return <div>4</div>;
    case 5:
      return <div>5</div>;
  }
}

export default App;
