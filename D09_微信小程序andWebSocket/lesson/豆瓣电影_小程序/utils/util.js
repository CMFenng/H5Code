function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 评分格式化..
function formatAverage(n) {
  n = n.toString()
  return n=="0" || n[1] ? n : n + '.0'
}

module.exports = {
  formatTime: formatTime,
  formatAverage: formatAverage
}
