// ブロックスコープが有効な変数
// これを使えばグローバル汚染が防げるので即時関数は利用しない
if (true) {
    let i = 1;
    console.log(i);
}
//console.log(i); // エラー


// 定数を宣言する
// 定数は再代入できない。ただし変更はできる
const data = 100;
//data = 150; // エラー

const data2 = [1, 2, 3];
data2[0] = 10;
console.log(data2); // [10, 2, 3]



// 2進数/8進数リテラル
// 2進数リテラルは0b, 8進数リテラルは0o(ゼロオー)で始まる
console.log(0o10 === 8); // true
console.log(0b11 === 3); // true


// テンプレート文字列
let name = 'Yamada';
console.log(`Hello, ${name}!!`);
// Hello, Yamada!!


// Symbol型
// ユニークで隠蔽された値が作れる
// 使い方としてはなんでもよい定数
var JAVASCRIPT = Symbol();
var RUBY = Symbol();


// 分割代入
// 使い方としては複数を返す関数
let [hoge, foo] = [15, 21];
console.log(hoge); // 15


let {hoge2, foo2} = {hoge2: 'ほげ', foo2: 'ふー'};
console.log(hoge2); // ほげ



// 名前つき引数を指定
function trapezoid({upper = 1, lower = 1, height = 1}) {
    return (upper + lower) * height / 2
}

console.log(trapezoid({
    upper: 5,
    lower: 10,
    height: 2
}))


// 正規表現でマッチした部分文字列を抽出
let tel = '000-111-2222';
let tel_pattern = /^(0\d{2,3})\-(\d{1,4})\-(\d{2,5})$/;
let [, area, local, privated] = tel_pattern.exec(tel);
console.log(area);  // 000
console.log(local); // 111
console.log(privated); // 2222


// 展開演算子
console.log(Math.max(100, -10, 50, 108)); // 引数で渡した最大を返す 108
console.log(Math.max([100, -10, 50, 108])); // 配列で渡してるのでnullかNanとなる
console.log(Math.max(...[100, -10, 50, 108])); // 配列が展開される 108


// for of命令
let datas = [1, 2, 4];
for (let d of datas) {
    console.log(d) // 1, 2, 4
}

// 従来のlet in命令はプロパティ名(インデックス)を列挙する
for (let d in datas) {
    console.log(d) // 0, 1, 2
    console.log(datas[d]) // 1, 2, 4
}


/**
 * 関数
 */

// 引数にデフォルト値を設定できる
function show(name = '権兵衛') {
    console.log('私の名前は' + name);
}
show(); // 私の名前は権兵衛
show('リオ') // 私の名前はリオ


// デフォルト値に他の引数を指定できる
function add (a, b = a) {
    return a + b;
}
console.log(add(1, 4)); // 5
console.log(add(1)) // 2

// デフォルト値に関数の結果を指定
function dateFormat(date = new Date()) {
    return date.toLocaleString();
}
console.log(dateFormat()); // 現在日時(yyyy-mm-dd hh:ii:ss)


// 必須引数の表現
function required() {
    throw new Error('Arguments is missing');
}
// 引数が入ってないとデフォルト値にrequired()が入るので例外がスローされる
function test(value = required()) {
    return value;
}
//test();


// 可変長引数
function sum(...args) {
    let result = 0;
    for (let arg of args) {
        result += arg;
    }

    return result;
}
console.log(sum(10, 20, 30)); // 60


/**
 * アロー関数
 */
let data3 = [1, 2, 3];

// 従来の関数リテラル表記
let formatted = data3.map(function(value, index) {
    return value * value;
});
console.log(formatted); // 1, 4, 9

// アロー関数表記
let formatted2 = data3.map((value, index) => value * value);
console.log(formatted2); // 1, 4, 9

// 引数がない場合
var func = () => console.log('hoge');

// 複数文の場合は{}で囲む
let formatted3 = data3.map((value, index) => {
    return value * value;
});
console.log(formatted3) // 1, 4, 9


// アロー関数はthisが固定される
// 従来の方法
var Counter = function() {
    // thisを退避(ここのthisはインスタンスを指すが、setIntervalではwindowオブジェクトを指す為)
    var self = this;
    self.count = 0;

    setInterval(function() {
        self.count++;
    }, 1000);
};
//var c = new Counter();

// es2015の方法
let Counter2 = function() {
    this.count = 0;
    setInterval(() => this.count++, 1000);
};
//let c = new Counter2();



/**
 * 組み込みオブジェクト
 */




