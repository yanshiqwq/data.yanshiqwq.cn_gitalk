// 更新运行时间
function updateDateTime() {
    // 设置基准时间（网站创建时间）
    const birthDay = new Date("2/7/2021 20:23:02");
    // 更新时间的间隔（1秒）
    const interval = 1000;

    // 更新时间的函数
    function updateTime() {
        const now = new Date();
        const timeDiff = now - birthDay; // 时间差（毫秒）

        // 计算年、天、小时、分钟和秒
        const seconds = Math.floor(timeDiff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const years = Math.floor(days / 365);

        // 计算剩余的天、小时、分钟和秒
        const daysRemainder = days % 365;
        const hoursRemainder = hours % 24;
        const minutesRemainder = minutes % 60;
        const secondsRemainder = seconds % 60;

        // 显示结果
        document.getElementById('span_dt_dt').textContent = 
            years + ' 年 ' + 
            daysRemainder + ' 天 ' + 
            hoursRemainder + ' 时 ' + 
            minutesRemainder + ' 分 ' + 
            secondsRemainder + ' 秒';
    }

    // 初始化时间显示
    updateTime();

    // 使用 setInterval 替代 setTimeout 以避免递归调用
    setInterval(updateTime, interval);
}

// 页面加载完成后执行
document.addEventListener('load', updateDateTime);
document.addEventListener('load', function() {
    // 创建要插入的HTML内容
    var htmlContent = `
        <div style="text-align:center;line-height:30px;height:30px;color:#aaaaaa">
            <span>本站已运行</span> <span id=span_dt_dt></span>
        </div>
    `;

    // 插入HTML内容到body的末尾
    document.body.insertAdjacentHTML('beforeend', htmlContent);
});