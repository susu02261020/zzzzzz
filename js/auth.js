// auth.js - 超级简单版
(function() {
    // 1. 直接移除可能存在的遮罩层
    const oldOverlay = document.getElementById('auth-overlay');
    if (oldOverlay) oldOverlay.remove();
    
    // 2. 标记已验证
    localStorage.setItem("is_verified", "true");
    
    // 3. 确保主界面可见
    const mainContent = document.getElementById('screen-container');
    if (mainContent) {
        mainContent.style.filter = 'none';
        mainContent.style.display = 'block';
    }
    
    // 4. 显示所有可能被隐藏的内容
    document.querySelectorAll('.hidden').forEach(el => {
        if (el.id !== 'auth-overlay') {  // 保留其他隐藏元素
            el.classList.remove('hidden');
        }
    });
    
    console.log('✅ 验证已跳过');
})();