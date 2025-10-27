
const numberButtom = document.querySelector('.number-buttom')
let fuhao
//获取输出框
let topvalue
//建立一个变量储存top值
let arr = []
//新建一个数组用于存放数据
let flag = true
//新增判断变量
let finalnum = 0
//用于输出的最终数据
//小心！没有初始化会导致NaN

const genhaonum = 0
//全局变量用于输入根号后的数字

// 基础版：根据数字长度调整字体大小（类似Windows计算器）
function adjustFontSize() {
  // 获取当前显示的文本
  const text = numberButtom.textContent;
  // 获取文本长度
  const length = text.length;
  
  // 根据文本长度设置不同的字体大小
  let fontSize = 50; // 默认字体大小
  
  // 简单的字体大小调整逻辑
  if (length > 15) {
    fontSize = 20; // 很长的数字使用最小字体
  } else if (length > 12) {
    fontSize = 25; // 较长的数字
  } else if (length > 10) {
    fontSize = 30; // 中等长度
  } else if (length > 8) {
    fontSize = 35; // 稍长
  } else if (length > 6) {
    fontSize = 40; // 略长
  }
  
  // 应用字体大小
  numberButtom.style.fontSize = fontSize + 'px';
}

// 创建一个简单的更新函数，用于在更新数字后调整字体大小
function updateDisplay(value) {
  numberButtom.textContent = value;
  // 更新后立即调整字体大小
  adjustFontSize();
}
// 这个是输入数字模块（已完成
const key = document.querySelector('.key')
//获取键盘
key.addEventListener('click', function (e) {
  //添加点击事件
  console.log(111)
  if (true) {
    //如果是true
    flag = false
    //执行时不能点击
    if (e.target.innerHTML === '1' || e.target.innerHTML === '2' || e.target.innerHTML === '3' || e.target.innerHTML === '4' || e.target.innerHTML === '5' || e.target.innerHTML === '6' || e.target.innerHTML === '7' || e.target.innerHTML === '8' || e.target.innerHTML === '9' || e.target.innerHTML === '0') {
      //如果输入的是任意数字
      finalnum = 0
      //注意：一定要先清除原来的数字
      if (arr) {
        for (let i = arr.length - 1; i >= 0; i--) { finalnum += arr[arr.length - i - 1] * Math.pow(10, i + 1) }
      }
      //这个循环用来加权显示的数值
      finalnum += Number(e.target.innerHTML)
      //最后再加上你输入的值
      updateDisplay(finalnum)
      //渲染最终的finalnum并调整字体大小
      arr.push(e.target.innerHTML)
      //把inner推入数组后面
      console.log(arr)
      // 打印测试
    }
  }
}
)
//添加监听事件

// 接下来这个是删除模块（已完成
const del = document.querySelector(".key .grid-item:nth-child(4)")
del.addEventListener('click', function () {
  console.log('点击了删除')
  finalnum = 0
  //先清除原来的数字
  arr.splice(arr.length - 1, 1)
  //shift删除数组最后面的值
  if (arr) {
    for (let i = arr.length - 1; i >= 0; i--) { finalnum += arr[arr.length - i - 1] * Math.pow(10, i) }
  }
  //循环用来重新显示加权的数值
  updateDisplay(finalnum)
  //渲染最终的finalnum并调整字体大小
  console.log(arr)
  // 打印测试
})
//添加监听

//挑战事件：完成.的输入

//完成加法的模块
const add = document.querySelector('.key .grid-item:nth-child(20)')
//获取add按钮
const topbuttom = document.querySelector('.number-top')
add.addEventListener('click', function () {
  console.log('wodianlejiafaadd')
  //测试点击性成功
  topbuttom.innerHTML = add.innerHTML + numberButtom.innerHTML
  topvalue = numberButtom.innerHTML
  //顶部打印并储存
  arr.length = 0
  //清空数组
  console.log(arr)
  //打印测试
  fuhao = add.innerHTML
})

//完成减法的模块
const red = document.querySelector('.key .grid-item:nth-child(16)')
//获取add按钮
red.addEventListener('click', function () {
  console.log(red.innerHTML)
  //测试点击性成功
  topbuttom.innerHTML = red.innerHTML + numberButtom.innerHTML
  topvalue = numberButtom.innerHTML
  //顶部打印并储存
  arr.length = 0
  //清空数组
  console.log(arr)
  //打印测试
  fuhao = red.innerHTML
})

//完成乘法的模块
const mul = document.querySelector('.key .grid-item:nth-child(12)')
//获取add按钮
mul.addEventListener('click', function () {
  console.log(mul.innerHTML)
  //测试点击性成功
  topbuttom.innerHTML = mul.innerHTML + numberButtom.innerHTML
  topvalue = numberButtom.innerHTML
  //顶部打印并储存
  arr.length = 0
  //清空数组
  console.log(arr)
  //打印测试
  fuhao = mul.innerHTML
})


//完成除法的模块
const div = document.querySelector('.key .grid-item:nth-child(8)')
//获取add按钮
div.addEventListener('click', function () {
  console.log(div.innerHTML)
  //测试点击性成功
  topbuttom.innerHTML = div.innerHTML + numberButtom.innerHTML
  topvalue = numberButtom.innerHTML
  //顶部打印并储存
  arr.length = 0
  //清空数组
  console.log(arr)
  //打印测试
  fuhao = div.innerHTML
})

//完成倒数模块
const daoshu = document.querySelector('.key .grid-item:nth-child(5)')
daoshu.addEventListener('click', function () {
  console.log(daoshu.innerHTML)
  //测试点击性成功
  topbuttom.innerHTML = ''
  //顶部清空
  arr.length = 0
  //清空数组
  numberButtom.innerHTML = (1 / (numberButtom.innerHTML))
})

//完成平方模块
const pingfang = document.querySelector('.key .grid-item:nth-child(6)')
pingfang.addEventListener('click', function () {
  console.log(daoshu.innerHTML)
  //测试点击性成功
  topbuttom.innerHTML = ''
  //顶部清空
  arr.length = 0
  //清空数组
  updateDisplay(Math.pow(Number(numberButtom.textContent), 2))
})

//完成开方模块
const genhao = document.querySelector('.key .grid-item:nth-child(7)')
genhao.addEventListener('click', function () {
  console.log(genhao.innerHTML)
  //测试点击性成功
  topbuttom.innerHTML = ''
  //顶部清空
  arr.length = 0
  //清空数组
  updateDisplay(Math.sqrt(Number(numberButtom.textContent)).toFixed(4))
})

//完成quyu的模块
const quyu = document.querySelector('.key .grid-item:nth-child(1)')
//获取add按钮
quyu.addEventListener('click', function () {
  console.log(quyu.innerHTML)
  //测试点击性成功
  topbuttom.innerHTML = numberButtom.innerHTML + quyu.innerHTML
  topvalue = numberButtom.innerHTML
  //顶部打印并储存
  arr.length = 0
  //清空数组
  console.log(arr)
  //打印测试
  fuhao = quyu.innerHTML
})

//完成等于和计算模块
const equal = document.querySelector('.key .grid-item:last-child')
equal.addEventListener('click', function () {
  console.log(topvalue)
  console.log(numberButtom.innerHTML)
  //测试
  topbuttom.innerHTML = `${topvalue}${fuhao}${numberButtom.innerHTML}`
  if (fuhao === '+') {
    updateDisplay(Number(topvalue) + Number(numberButtom.textContent))
  }
  if (fuhao === '-') {
    updateDisplay(Number(topvalue) - Number(numberButtom.textContent))
  }
  if (fuhao === '*') {
    updateDisplay(Number(topvalue) * Number(numberButtom.textContent))
  }
  if (fuhao === '/') {
    updateDisplay((Number(topvalue) / Number(numberButtom.textContent)).toFixed(4))
  }
  //完成了四则运算。
  if (fuhao === '%') {
    updateDisplay(Number(topvalue) % Number(numberButtom.textContent))
  }
})


