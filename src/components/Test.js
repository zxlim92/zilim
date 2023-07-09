import React, { useState, useEffect } from 'react';
import anime from 'animejs';

const Test = () => {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    createGrid();
    window.addEventListener('resize', createGrid);
    return () => {
      window.removeEventListener('resize', createGrid);
    };
  }, []);

  const toggle = () => {
    setToggled(!toggled);
    document.body.classList.toggle('toggled');
  };

  const handleOnClick = (index) => {
    toggle();

    anime({
      targets: '.tile',
      opacity: toggled ? 0 : 1,
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index,
      }),
    });
  };

  const createTile = (index) => {
    return (
      <div className="tile" style={{ opacity: toggled ? 0 : 1 }} onClick={() => handleOnClick(index)}></div>
    );
  };

  const createTiles = (quantity) => {
    const tiles = Array.from(Array(quantity)).map((_, index) => createTile(index));
    return tiles;
  };

  const createGrid = () => {
    const size = document.body.clientWidth > 800 ? 100 : 50;
    const calculatedColumns = Math.floor(document.body.clientWidth / size);
    const calculatedRows = Math.floor(document.body.clientHeight / size);

    setColumns(calculatedColumns);
    setRows(calculatedRows);
  };

  return (
    <>
      <div id="tiles">{createTiles(columns * rows)}</div>

      <h1 id="title" className="centered">
        The name of the game is <span className="fancy">Chess</span>.
      </h1>

      <i id="icon" className="fa-solid fa-chess centered"></i>

      <a id="source-link" className="meta-link" href="https://cdpn.io/YzXOGpm" target="_blank" rel="noopener noreferrer">
        <i className="fa-solid fa-link"></i>
        <span>Source</span>
      </a>

      <a id="yt-link" className="meta-link" href="https://youtu.be/bAwEj_mSzOs" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-youtube"></i>
        <span>5 min tutorial</span>
      </a>
    </>
  );
};

export default Test;