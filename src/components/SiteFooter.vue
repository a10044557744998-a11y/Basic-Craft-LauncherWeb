<script setup lang="ts">
import logoUrl from '../assets/Basic Craft Launcher-logo.svg';
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer>
    <div class="container footer-inner">
      <RouterLink class="brand" to="/"
        ><img :src="logoUrl" alt="" width="23" height="23" /><span
          style="line-height: 1; margin-top: 4px"
          >Basic Craft Launcher</span
        ></RouterLink
      >
      <div class="footer-links">
        <a href="https://github.com/a10044557744998-a11y/Basic-Craft-Launcher" target="_blank" rel="noreferrer">GitHub</a>
        <RouterLink to="/policy">隐私协议与使用条款</RouterLink>
        <a href="mailto:a10044557744998@163.com">联系</a>
      </div>
    </div>
    
    <p class="disclaimer container"></p>
    
    <!-- 严谨的版权与开源声明区 -->
    <div class="disclaimer-text container" style="line-height: 1.8;">
      <p style="margin: 0 0 6px;">
        Basic Craft Launcher 官方网站前端基于 
        <a href="https://github.com/tiouoo/Portal/tree/main" target="_blank" rel="noreferrer" class="link">Portal</a> 
        开源项目二次修改。
      </p>
      <p style="margin: 0 0 6px;">
        Copyright © Portal 2026. 基于 AGPL-3.0-or-later 开源许可发布。原作者版权归 
        <a href="https://github.com/tiouoo" target="_blank" rel="noreferrer" class="link">tiouoo</a> 
        所有。
      </p>
      <p style="margin: 0; font-weight: 500; color: #70798a;">
        Basic Craft Launcher 启动器核心为独立开发的原创软件。
      </p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 32px 0 22px;
}
.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  letter-spacing: -0.5px;
}
.footer-inner .brand {
  font-size: 17px;
}
.footer-inner .brand img {
  width: 23px;
  height: 23px;
}
.footer-inner p {
  color: #8b92a0;
  font-size: 12px;
}
.footer-links {
  display: flex;
  gap: 24px;
  color: #70798a;
  font-size: 14px;
}
.footer-links a:hover {
  color: var(--blue);
}
.disclaimer {
  margin-top: 22px;
  padding-top: 18px;
  border-top: 1px solid #e0e4ea;
}
.disclaimer-text {
  color: #a0a6b1;
  font-size: 12px;
  text-align: center;
}
.link {
  color: var(--blue);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.link:hover {
  color: #1f62df;
}

@media (max-width: 820px) {
  .footer-inner {
    flex-direction: column;
    gap: 18px;
  }
  .footer-inner p {
    text-align: center;
  }
}

@media (max-width: 520px) {
  .footer-links {
    gap: 18px;
  }
}
</style>