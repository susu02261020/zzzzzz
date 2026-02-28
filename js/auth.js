// auth.js - 最终版
(function() {
    // 清除可能存在的旧数据（先清除，避免显示旧界面）
    localStorage.clear();
    sessionStorage.clear();
    console.log('🧹 已清除旧数据');
    
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
    
    // 4. 删除那行显示隐藏元素的代码！不显示任何隐藏内容
    
    console.log('✅ 验证已跳过，已进入全新界面');
})();