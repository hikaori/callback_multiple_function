console.log('読み込み始めた時間');
console.log(new Date());

let first = () => {
  console.log('1つ目が実行された時間');
  console.log(new Date());
  return date => {
    console.log(date);
  };
};

setTimeout(() => {
  first(new Date());
}, 3000);

console.log('読み込み終わった時間');
console.log(new Date());

// 読み込み始めた時間/ 読み込み終わった時間 /3s後　1つ目が実行された時間
