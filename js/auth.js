// auth.js - 去掉了验证，直接进入
(function() {
    // 直接显示主界面
    function showMainContent() {
        const overlay = document.getElementById('auth-overlay');
        if (overlay) overlay.remove();
        
        const mainContent = document.getElementById('screen-container');
        if (mainContent) {
            mainContent.style.filter = 'none';
        }
    }

    // 直接标记为已验证
    localStorage.setItem("is_verified", "true");
    
    // 如果已经有遮罩层就移除
    const existingOverlay = document.getElementById('auth-overlay');
    if (existingOverlay) {
        existingOverlay.remove();
    }
    
    // 显示主界面
    showMainContent();
})();