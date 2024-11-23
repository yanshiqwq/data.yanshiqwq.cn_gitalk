// Gitalk 初始化
function initializeGitalk() {
    const gitalkContainer = document.getElementById('gitalk-container') || document.createElement('div');
    gitalkContainer.id = 'gitalk-container';
    gitalkContainer.className = 'hope-c-PJLV hope-c-PJLV-igScBhH-css hope-c-PJLV-ikSuVsl-css';
    document.getElementsByClassName("body hope-stack")[0].appendChild(gitalkContainer);

    const pathid = 'path_' + md5(location.pathname);
    const pathname = location.pathname + (location.pathname.endsWith('/') ? '' : '/');

    const gitalk = new Gitalk({
        // proxy: 'https://github.com/login/oauth/access_token',
        clientID: 'ceb8e5d433404111ffdf',
        clientSecret: '9ca9663c63888c8484f5988c5b0dee35683be5be',
        repo: 'data.yanshiqwq.cn_gitalk',
        owner: 'yanshiqwq',
        admin: ['yanshiqwq'],
        id: pathid,
        title: pathname,
        createIssueManually: false,
        distractionFreeMode: true
    });

    gitalk.render('gitalk-container');
}

// 监听页面变化并初始化 Gitalk
function setupGitalkObserver() {
    const observer = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                initializeGitalk();
                observer.disconnect(); // 断开观察者，避免重复初始化
                break;
            }
        }
    });

    observer.observe(document.getElementsByClassName('hope-breadcrumb__list')[0], { childList: true });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    setupGitalkObserver();
});
