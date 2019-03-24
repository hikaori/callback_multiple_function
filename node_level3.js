console.log('読み込み始めた時間');
console.log(new Date());

let test = () => {
  console.log('1つ目が実行された時間');
  console.log(new Date());
  return () => {
    console.log('2つ目が実行された時間');
    console.log(new Date());
    return date => {
      console.log('3つ目が実行された時間');
      console.log(date);
    };
  };
};

const first = test();

setTimeout(() => {
  first(new Date());
}, 3000);

console.log('読み込み終わった時間');
console.log(new Date());

// 1,2,23,24,5,6 --const first = test
// 1,2,5,6,23,24,8,9 --const first = test();
