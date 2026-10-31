<script setup lang="ts">
import { platforms } from '../data/downloads';


const downloadUrl = 'https://github.com/a10044557744998-a11y/Basic-Craft-Launcher/releases';
</script>

<template>
  <section class="download-section section">
    <div class="container">
      <div id="download" class="download-heading">
        <span class="section-kicker">现在开始</span>
        <h2>选择你的平台</h2>
        <p>点击下方按钮前往 GitHub 获取最新版本</p>
      </div>
      
      <div class="platform-grid">
        <article v-for="platform in platforms" :key="platform.id" class="platform-card">
          <div class="platform-head">
            <div class="platform-icon">
              <svg v-if="platform.icon === 'windows'" viewBox="0 0 24 24">
                <path
                  d="M3 5.2 10.5 4v7.2H3V5.2Zm8.5-1.4L21 2.5v8.7h-9.5V3.8ZM3 12.3h7.5v7.2L3 18.4v-6.1Zm8.5 0H21V21l-9.5-1.3v-7.4Z" />
              </svg>
            </div>
            <div>
              <h3>{{ platform.name }}</h3>
              <p>{{ platform.detail }}</p>
            </div>
          </div>
          <a class="platform-primary" :href="downloadUrl" target="_blank" rel="noreferrer">
            {{ platform.primary.label }}
            <span>
              <svg
                style="height: 20px; position: relative; top: 2px; left: 5px"
                fill="white"
                color="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640">
                <path
                  d="M297.4 566.6C309.9 579.1 330.2 579.1 342.7 566.6L502.7 406.6C515.2 394.1 515.2 373.8 502.7 361.3C490.2 348.8 469.9 348.8 457.4 361.3L352 466.7L352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 466.7L182.6 361.3C170.1 348.8 149.8 348.8 137.3 361.3C124.8 373.8 124.8 394.1 137.3 406.6L297.3 566.6z" />
              </svg>
            </span>
          </a>
        </article>
      </div>
    </div>
    
    
  </section>
</template>

<style scoped>
.section {
  padding-top: 100px;
  padding-bottom: 100px;
}
#download {
  scroll-margin-top: 80px;
}
.section-kicker {
  color: var(--blue);
  font-size: 13px;
  letter-spacing: 0.12em;
  font-weight: 700;
  text-transform: uppercase;
}
.download-heading {
  margin-bottom: 45px;
}
.download-heading h2 {
  margin: 10px 0 0;
  font-size: clamp(36px, 4vw, 50px);
  letter-spacing: -0.045em;
  line-height: 1.15;
}
.download-heading > p {
  margin: 14px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.8;
}

/* 卡片居中单列 */
.platform-grid {
  display: grid;
  grid-template-columns: 1fr;
  max-width: 480px; 
  margin: 0 auto; 
  gap: 18px;
}

.platform-card {
  padding: 27px;
  border: 1px solid #dfe5ef;
  border-radius: 17px;
  background: white;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.platform-card:hover {
  border-color: #ccd8ea;
  box-shadow: 0 16px 35px rgba(60, 75, 105, 0.08);
}
.platform-head {
  display: flex;
  align-items: center;
  gap: 15px;
}
.platform-icon {
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: #f2f5fa;
  color: #20283a;
}
.platform-icon svg {
  width: 25px;
  height: 25px;
  fill: currentColor;
  stroke: none;
}
.platform-head h3 {
  margin: 0 0 4px;
  font-size: 20px;
}
.platform-head p {
  margin: 0;
  color: #9097a5;
  font-size: 11px;
}
.platform-primary {
  height: 46px;
  margin-top: 23px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 14px;
  background: var(--blue);
  color: white;
  font-size: 13px;
  font-weight: 700;
  transition: background 0.2s;
}
.platform-primary:hover {
  background: #1f62df;
}
.platform-primary span {
  font-size: 18px;
}

.download-note {
  width: calc(100% - 48px);
  margin: 25px auto 0;
  color: #4e5b70;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.6;
  text-align: center;
}
.download-note a {
  color: var(--blue);
  font-weight: 800;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.download-note a:hover {
  color: #1f62df;
}

@media (max-width: 820px) {
  .section {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .download-note {
    width: calc(100% - 32px);
  }
}
</style>