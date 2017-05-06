

// 评分格式化
function formatAverage(n) {
  n = n.toString()
  return n=="0" || n[1] ? n : n + '.0'
}

module.exports = {
  formatTime: formatTime,
  formatAverage: formatAverage
}
