'use strict';

{
  function setWord(){
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0;
  }
  const words = [
    'peach',
    'love and peace',
    'chocolate',
    'latte',
    'milk',
  ];
  let word;
  let loc = 0;
  let startTime;
  const target = document.getElementById('target');
  let isPlaying = false;

  document.addEventListener('click', () =>{
    if(isPlaying === true){
      return;
    }
    isPlaying = true;
    startTime = Date.now();
    setWord();
  })

  document.addEventListener('keydown', e =>{
    if(e.key !== word[loc]){
      return;
    }
    loc++;
    target.textContent = '_'.repeat(loc) + word.substring(loc);

    if(loc === word.length){
      if(words.length === 0){
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        if(elapsedTime <= 7){
          result.className = 'perfect';
          result.textContent = `Perfect! ${elapsedTime} seconds!`;
        }else{
          result.textContent = `Finished! ${elapsedTime} seconds!`;
        }
        return;
      }
      setWord();
    }
  });
}