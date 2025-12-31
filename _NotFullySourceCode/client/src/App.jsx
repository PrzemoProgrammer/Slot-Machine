import "./App.css";
import PixiGame from './game/PixiGame';
import { useRef, useState, useEffect } from 'react';
import { StartGame } from './game/StartGame';
import ScreenUtils from './utility/screen/ScreenUtils';
import UIManager from './UI/manager/UIManager.js';
import Pages from './pages/Pages'; 
import PagesManager from './pages/manager/PagesManager.js'; 
import UI from './UI/UI'; 

function App() { 
  const pixiRef = useRef();
  const UIRef = useRef(null);
  const pagesRef = useRef(null);

  useEffect(() => {
    const game = pixiRef.current;
    const UI = UIRef.current
    const pages = pagesRef.current

    StartGame(game);
    UIManager.create(UI)
    PagesManager.create(pages)
    ScreenUtils.resizeScreen(UI, game, pages) 
    window.addEventListener("resize", () => ScreenUtils.resizeScreen(UI, game, pages));
  }, []); 

  return (
    <div id="app">
        <PixiGame ref={pixiRef}/>
        <UI ref={UIRef} />
        <Pages ref={pagesRef}/>
    </div>
  );
}

export default App;
