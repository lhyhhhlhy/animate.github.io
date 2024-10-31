const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

// 定义动画参数
// 动画持续时间为2秒，只播放一次，填充模式为 forwards，即动画结束后保持最后一帧的状态。

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

// 获取需要动画的元素

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// 执行动画
alice1.animate(aliceTumbling, aliceTiming).finished
  .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
  .then(() => alice3.animate(aliceTumbling, aliceTiming).finished)
  .catch(error => console.error(`Error animating Alices: ${error}`));