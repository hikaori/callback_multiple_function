console.log('読み込み始めた時間');
console.log(new Date());

let test = () => {
  console.log('1つ目が実行された時間');
  console.log(new Date());
  return date => {
    console.log('2つ目が実行された時間');
    console.log(date);
  };
};

const first = test();

setTimeout(() => {
  first(new Date());
}, 3000);

console.log('読み込み終わった時間');
console.log(new Date());

// 読み込み始めた時間/読み込み終わった時間/1つ目が実行された時間 ---> const first = test;
// 読み込み始めた時間/1つ目が実行された時間/読み込み終わった時間/2つ目が実行された時間 ---> const first = test();
