
function assert(value, desc) {
  var resultsList = document.getElementById("results");
  // 如果不存在，就创建
  if (!resultsList) {
    // 创建ul标签
    resultsList = document.createElement('ul');
    // 将ul标签添加到body起始标签的后面
    document.getElementsByTagName('body')[0].appendChild(resultsList);
    // ul标签添加属性 id= results
    resultsList.setAttribute('id','results');
  }
  // 创建li标签
  var li = document.createElement("li");
  // 如果断言通过添加pass样式，否则添加fail样式
  li.className = value ? "pass" : "fail";
  // li标签添加文本
  li.appendChild(document.createTextNode(desc));
  // 将li标签添加到ul标签下
  resultsList.appendChild(li);
}
