'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
      const results = ['凶', '小吉', '末吉', '吉', '中吉', '大吉'];
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];

    const n = Math.random();
    if(n < 0.1){
      btn.textContent = results[0];
    }else if(n < 0.3){
      btn.textContent = results[1];
    }else if(n < 0.4){
        btn.textContent = results[2];
    }else if(n < 0.6){
        btn.textContent = results[3];
    }else if(n < 0.9){
        btn.textContent = results[4];
    }else{
      btn.textContent = results[5];
    }
  });
}