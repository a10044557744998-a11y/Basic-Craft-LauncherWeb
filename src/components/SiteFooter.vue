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
    <p class="disclaimer container">

    </p>
    <p class="disclaimer-text container">
      Basic Craft Launcher 是独立开源项目。
    </p>
    <!-- 新增的原作者信息 -->
    <p class="disclaimer-text container" style="padding-top: 4px;">
      网站原作者：<a href="https://github.com/tiouoo" target="_blank" rel="noreferrer" style="color: var(--blue); text-decoration: underline;">https://github.com/tiouoo</a>
    </p>
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
  color: #a0a6b1;
  font-size: 12px;
  text-align: center;
}
.disclaimer-text {
  padding-top: 10px;
  color: #a0a6b1;
  font-size: 12px;
  text-align: center;
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