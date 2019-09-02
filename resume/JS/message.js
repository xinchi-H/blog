//初始化
var APP_ID = 'rJ2w8Y1EAupdFu8z942XAcT3-gzGzoHsz';
var APP_KEY = 'aWnQJdrolJJ7uM63RvBR4QYi';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

let myForm = document.querySelector('#postMessageForm')
myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    var Message = AV.Object.extend('TestObject');
    var message = new Message();
    message.set('content', content);
    message.save().then(function (message) {
        console.log('保存成功。')
        console.log(message)
    })
})


/*
//创建TestObject表（引号内的是表名）
var TestObject = AV.Object.extend('TestObject');
//在表中创建一行数据
var testObject = new TestObject();
//数据内容是'Hello world'（数据的表头是'words'）
testObject.set('words', 'Hello world!');
// 保存；如果保存成功，则打印'保存成功。'
testObject.save().then(function (testObject) {
    console.log('保存成功。')
})
*/