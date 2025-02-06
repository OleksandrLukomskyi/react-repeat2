import { useState } from 'react';
import articles from '../../articles.json';
import Controls from '../Controls/Controls';
import Progress from '../Progress/Progress';
import ArticleView from '../ArticleView/ArticleView';

export default function App() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handlePrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };

  const visibleArticle = articles[selectedIdx];
  const isFirst = selectedIdx === 0;
  const isLast = selectedIdx === articles.length - 1;

  return (
    <div>
      <Controls
        onPrev={handlePrev}
        onNext={handleNext}
        isFirst={isFirst}
        isLast={isLast}
      />
      <Progress total={articles.length} current={selectedIdx + 1} />
      <ArticleView article={visibleArticle} />
    </div>
  );
}

// import { useState } from "react";
// import ClickTracker from "../ClickTracker/ClickTracker";

// export default function App() {
//   const [clicks, setClicks] = useState({
//     a: 0,
//     b: 0,
//   });

//   const handleClick = (key) => {
//     console.log(key);
//     setClicks({
//       ...clicks,
//       [key]: clicks[key] + 1,
//     });
//   };

//   return (
//     <div>
//       <ClickTracker value={clicks.a} onTrack={() => handleClick("a")}>
//         Clicks A
//       </ClickTracker>
//       <ClickTracker value={clicks.b} onTrack={() => handleClick("b")}>
//         Clicks B
//       </ClickTracker>
//       <p>Total clicks: {clicks.a + clicks.b}</p>
//     </div>
//   );
// }
