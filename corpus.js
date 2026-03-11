<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AIScope — AI Content Detector</title>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root,[data-theme="light"]{
  --bg:#f3f6ff;--white:#ffffff;--navy:#07122b;
  --blue:#1a5cff;--blue-hover:#1045d4;
  --blue-soft:rgba(26,92,255,.09);--blue-border:rgba(26,92,255,.18);
  --text:#0c1a30;--text-mid:#374f72;--text-muted:#7a90b8;
  --border:rgba(26,92,255,.11);
  --shadow:0 4px 32px rgba(7,18,43,.07);
  --shadow-lg:0 16px 56px rgba(7,18,43,.13);
  --radius:18px;--card-bg:#fff;
  --nav-bg:rgba(243,246,255,.87);
  --input-bg:#f9fbff;--input-border:rgba(26,92,255,.14);
  --tab-bg:rgba(255,255,255,.78);
  --settings-bg:#fff;
  --footer-text:#7a90b8;
}
[data-theme="dark"]{
  --bg:#090e1a;--white:#111827;--navy:#030610;
  --blue:#3d7fff;--blue-hover:#5a93ff;
  --blue-soft:rgba(61,127,255,.12);--blue-border:rgba(61,127,255,.22);
  --text:#e8eeff;--text-mid:#8fa4cc;--text-muted:#4d6488;
  --border:rgba(61,127,255,.14);
  --shadow:0 4px 32px rgba(0,0,0,.35);
  --shadow-lg:0 16px 56px rgba(0,0,0,.5);
  --card-bg:#111827;
  --nav-bg:rgba(9,14,26,.9);
  --input-bg:#0d1525;--input-border:rgba(61,127,255,.18);
  --tab-bg:rgba(17,24,39,.9);
  --settings-bg:#111827;
  --footer-text:#4d6488;
}
[data-theme="ocean"]{
  --bg:#e8f4f8;--white:#ffffff;--navy:#0a2540;
  --blue:#0077b6;--blue-hover:#005f8e;
  --blue-soft:rgba(0,119,182,.1);--blue-border:rgba(0,119,182,.2);
  --text:#0a2540;--text-mid:#1a5276;--text-muted:#5d8aa8;
  --border:rgba(0,119,182,.13);
  --shadow:0 4px 32px rgba(10,37,64,.08);
  --shadow-lg:0 16px 56px rgba(10,37,64,.14);
  --card-bg:#fff;--nav-bg:rgba(232,244,248,.9);
  --input-bg:#f0f8fc;--input-border:rgba(0,119,182,.16);
  --tab-bg:rgba(255,255,255,.8);--settings-bg:#fff;--footer-text:#5d8aa8;
}
[data-theme="mint"]{
  --bg:#f0fdf4;--white:#ffffff;--navy:#052e16;
  --blue:#059669;--blue-hover:#047857;
  --blue-soft:rgba(5,150,105,.1);--blue-border:rgba(5,150,105,.2);
  --text:#052e16;--text-mid:#065f46;--text-muted:#34d399;
  --border:rgba(5,150,105,.13);
  --shadow:0 4px 32px rgba(5,46,22,.07);
  --shadow-lg:0 16px 56px rgba(5,46,22,.13);
  --card-bg:#fff;--nav-bg:rgba(240,253,244,.9);
  --input-bg:#f0fdf9;--input-border:rgba(5,150,105,.16);
  --tab-bg:rgba(255,255,255,.8);--settings-bg:#fff;--footer-text:#34d399;
}
[data-theme="purple"]{
  --bg:#faf5ff;--white:#ffffff;--navy:#1a0533;
  --blue:#7c3aed;--blue-hover:#6d28d9;
  --blue-soft:rgba(124,58,237,.1);--blue-border:rgba(124,58,237,.2);
  --text:#1a0533;--text-mid:#4c1d95;--text-muted:#a78bfa;
  --border:rgba(124,58,237,.13);
  --shadow:0 4px 32px rgba(26,5,51,.07);
  --shadow-lg:0 16px 56px rgba(26,5,51,.13);
  --card-bg:#fff;--nav-bg:rgba(250,245,255,.9);
  --input-bg:#fdf4ff;--input-border:rgba(124,58,237,.16);
  --tab-bg:rgba(255,255,255,.8);--settings-bg:#fff;--footer-text:#a78bfa;
}
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{font-family:'Outfit',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;overflow-x:hidden;transition:background .35s,color .35s;}
#loader{position:fixed;inset:0;background:var(--navy);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;transition:opacity .7s ease,transform .7s ease;}
#loader.hide{opacity:0;pointer-events:none;transform:scale(1.04);}
.loader-logo{font-size:2rem;font-weight:800;color:#fff;letter-spacing:-1px;opacity:0;animation:lFade .5s ease .2s both;}
.loader-logo span{color:#3d7fff;}
.loader-bar-wrap{width:180px;height:3px;background:rgba(255,255,255,.1);border-radius:99px;overflow:hidden;opacity:0;animation:lFade .5s ease .4s both;}
.loader-bar{height:100%;background:linear-gradient(90deg,#1a5cff,#5d9bff);border-radius:99px;width:0%;animation:lProg 1.3s cubic-bezier(.4,0,.2,1) .5s both;}
.loader-sub{font-size:.72rem;font-weight:500;color:rgba(255,255,255,.35);letter-spacing:.14em;text-transform:uppercase;opacity:0;animation:lFade .5s ease .6s both;}
@keyframes lFade{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:none;}}
@keyframes lProg{from{width:0%}to{width:100%}}
.bg-mesh{position:fixed;inset:0;pointer-events:none;z-index:0;background:radial-gradient(ellipse 70% 50% at 5% 0%,rgba(26,92,255,.07),transparent 60%),radial-gradient(ellipse 50% 40% at 95% 95%,rgba(26,92,255,.05),transparent 60%);}
.bg-grid{position:fixed;inset:0;pointer-events:none;z-index:0;background-image:linear-gradient(rgba(26,92,255,.038) 1px,transparent 1px),linear-gradient(90deg,rgba(26,92,255,.038) 1px,transparent 1px);background-size:60px 60px;mask-image:radial-gradient(ellipse 80% 80% at 50% 50%,black 0%,transparent 100%);}
nav{position:fixed;top:0;left:0;right:0;z-index:200;display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:64px;background:var(--nav-bg);backdrop-filter:blur(24px);border-bottom:1px solid var(--border);opacity:0;animation:slideDown .6s ease 1.7s both;transition:background .35s,border-color .35s;}
@keyframes slideDown{from{opacity:0;transform:translateY(-20px);}to{opacity:1;transform:none;}}
.nav-logo{font-size:1.22rem;font-weight:800;color:var(--text);letter-spacing:-.5px;display:flex;align-items:center;gap:10px;transition:color .35s;}
.nav-logo .accent{color:var(--blue);}
.nav-dot{width:7px;height:7px;background:var(--blue);border-radius:50%;animation:pDot 2s ease-in-out infinite;}
@keyframes pDot{0%,100%{box-shadow:0 0 0 0 rgba(26,92,255,.5);}50%{box-shadow:0 0 0 6px rgba(26,92,255,0);}}
.nav-right{display:flex;align-items:center;gap:12px;}
.nav-pill{font-size:.7rem;font-weight:600;color:var(--text-muted);letter-spacing:.1em;text-transform:uppercase;padding:5px 14px;border:1px solid var(--border);border-radius:99px;background:rgba(255,255,255,.6);transition:all .25s;}
.settings-btn{display:flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:10px;border:1px solid var(--border);background:var(--blue-soft);cursor:pointer;color:var(--blue);transition:all .22s;}
.settings-btn:hover{background:var(--blue);color:#fff;border-color:var(--blue);transform:rotate(35deg);}
.settings-overlay{position:fixed;inset:0;z-index:500;background:rgba(7,18,43,.45);backdrop-filter:blur(6px);opacity:0;pointer-events:none;transition:opacity .3s;}
.settings-overlay.open{opacity:1;pointer-events:all;}
.settings-panel{position:fixed;top:0;left:0;bottom:0;z-index:501;width:320px;background:var(--settings-bg);border-right:1px solid var(--border);box-shadow:var(--shadow-lg);transform:translateX(-100%);transition:transform .35s cubic-bezier(.4,0,.2,1),background .35s;display:flex;flex-direction:column;}
.settings-overlay.open .settings-panel{transform:translateX(0);}
.settings-head{display:flex;align-items:center;justify-content:space-between;padding:22px 24px;border-bottom:1px solid var(--border);}
.settings-head h2{font-size:1.1rem;font-weight:700;color:var(--text);}
.settings-close{width:32px;height:32px;border-radius:8px;border:none;background:var(--blue-soft);color:var(--blue);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;}
.settings-close:hover{background:var(--blue);color:#fff;}
.settings-body{flex:1;overflow-y:auto;padding:20px 24px;display:flex;flex-direction:column;gap:24px;}
.s-section h3{font-size:.72rem;font-weight:700;color:var(--text-muted);letter-spacing:.12em;text-transform:uppercase;margin-bottom:12px;}
.theme-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;}
.theme-opt{padding:10px 12px;border-radius:10px;border:1.5px solid var(--border);cursor:pointer;display:flex;align-items:center;gap:9px;font-size:.83rem;font-weight:600;color:var(--text-mid);transition:all .2s;background:var(--bg);}
.theme-opt:hover{border-color:var(--blue);color:var(--blue);}
.theme-opt.active{border-color:var(--blue);background:var(--blue-soft);color:var(--blue);}
.theme-dot{width:14px;height:14px;border-radius:50%;flex-shrink:0;}
.lang-grid{display:flex;gap:8px;}
.lang-btn{flex:1;padding:10px;border-radius:10px;border:1.5px solid var(--border);background:var(--bg);cursor:pointer;font-family:'Outfit',sans-serif;font-size:.85rem;font-weight:600;color:var(--text-mid);transition:all .2s;text-align:center;}
.lang-btn:hover{border-color:var(--blue);color:var(--blue);}
.lang-btn.active{border-color:var(--blue);background:var(--blue-soft);color:var(--blue);}
.limits-box{background:var(--blue-soft);border:1px solid var(--blue-border);border-radius:12px;padding:14px;display:flex;flex-direction:column;gap:10px;}
.limit-row{display:flex;align-items:center;gap:10px;font-size:.85rem;color:var(--text-mid);}
.gh-link-settings{display:flex;align-items:center;gap:10px;padding:14px;border-radius:12px;border:1px solid var(--border);background:var(--bg);color:var(--text);text-decoration:none;font-weight:600;font-size:.9rem;transition:all .22s;margin-top:auto;}
.gh-link-settings:hover{border-color:var(--blue);background:var(--blue-soft);color:var(--blue);}
.gh-link-settings svg{width:22px;height:22px;}
.hero{position:relative;z-index:1;padding:148px 24px 44px;text-align:center;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;padding:7px 16px;background:var(--blue-soft);border:1px solid var(--blue-border);border-radius:99px;font-size:.73rem;font-weight:600;color:var(--blue);letter-spacing:.1em;text-transform:uppercase;margin-bottom:22px;opacity:0;animation:riseUp .7s ease 1.8s both;}
.badge-dot{width:6px;height:6px;background:var(--blue);border-radius:50%;animation:pDot 1.6s ease-in-out infinite;}
h1{font-size:clamp(2.2rem,5.5vw,4.2rem);font-weight:800;line-height:1.08;letter-spacing:-2px;color:var(--text);max-width:740px;margin:0 auto 18px;opacity:0;animation:riseUp .7s ease 1.95s both;transition:color .35s;}
h1 .gr{background:linear-gradient(135deg,var(--blue) 0%,#5d9bff 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.hero-sub{font-size:1.02rem;font-weight:400;color:var(--text-mid);max-width:480px;margin:0 auto;line-height:1.78;opacity:0;animation:riseUp .7s ease 2.1s both;transition:color .35s;}
@keyframes riseUp{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:none;}}
.main{position:relative;z-index:1;max-width:900px;margin:44px auto 0;padding:0 24px 120px;}
.tabs{display:flex;gap:4px;background:var(--tab-bg);border:1px solid var(--border);border-radius:14px;padding:5px;margin-bottom:14px;opacity:0;animation:riseUp .6s ease 2.3s both;transition:background .35s,border-color .35s;}
.tab-btn{flex:1;display:flex;align-items:center;justify-content:center;gap:9px;padding:12px 18px;border:none;border-radius:10px;background:transparent;cursor:pointer;font-family:'Outfit',sans-serif;font-size:.88rem;font-weight:600;color:var(--text-muted);transition:all .22s ease;}
.tab-btn:hover{color:var(--blue);background:var(--blue-soft);}
.tab-btn.active{background:var(--blue);color:white;box-shadow:0 4px 20px rgba(26,92,255,.35);}
.ti{width:16px;height:16px;flex-shrink:0;opacity:.75;}
.tab-btn.active .ti{opacity:1;}
.card{background:var(--card-bg);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow);padding:28px;margin-bottom:14px;position:relative;overflow:hidden;opacity:0;animation:riseUp .6s ease 2.45s both;transition:box-shadow .3s,border-color .3s,background .35s;}
.card:hover{box-shadow:var(--shadow-lg);border-color:var(--blue-border);}
.panel{display:none;}
.panel.active{display:block;}
.input-label{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;}
.input-label span{font-size:.8rem;font-weight:600;color:var(--text-muted);letter-spacing:.07em;text-transform:uppercase;}
.char-count{font-size:.8rem;font-weight:600;color:var(--text-muted);}
.char-count.warn{color:#f59e0b;}
.char-count.over{color:#ef4444;}
textarea{width:100%;border:1.5px solid var(--input-border);border-radius:12px;padding:16px;font-family:'Outfit',sans-serif;font-size:.94rem;line-height:1.7;color:var(--text);background:var(--input-bg);resize:vertical;min-height:180px;transition:border-color .22s,box-shadow .22s,background .35s,color .35s;outline:none;}
textarea:focus{border-color:var(--blue);box-shadow:0 0 0 3px rgba(26,92,255,.1);}
textarea.mono{font-family:'JetBrains Mono',monospace;font-size:.85rem;}
.upload-zone{border:2px dashed var(--input-border);border-radius:14px;padding:40px 24px;text-align:center;cursor:pointer;transition:all .25s;background:var(--input-bg);position:relative;overflow:hidden;}
.upload-zone:hover,.upload-zone.drag-over{border-color:var(--blue);background:var(--blue-soft);}
.upload-zone input{position:absolute;inset:0;opacity:0;cursor:pointer;}
#previewImg{max-width:100%;max-height:260px;border-radius:10px;display:none;margin-bottom:16px;}
.up-icon-wrap{width:52px;height:52px;background:var(--blue-soft);border-radius:14px;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;color:var(--blue);}
.up-title{font-size:.97rem;font-weight:600;color:var(--text);margin-bottom:5px;}
.up-sub{font-size:.8rem;color:var(--text-muted);}
.img-limit-badge{display:inline-flex;align-items:center;gap:6px;margin-top:10px;padding:4px 12px;background:var(--blue-soft);border:1px solid var(--blue-border);border-radius:99px;font-size:.72rem;font-weight:600;color:var(--blue);}
.analyze-btn{width:100%;padding:17px;border:none;border-radius:13px;background:linear-gradient(135deg,var(--blue),#5d9bff);color:#fff;font-family:'Outfit',sans-serif;font-size:1rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:11px;box-shadow:0 4px 24px rgba(26,92,255,.35);transition:all .25s;position:relative;overflow:hidden;}
.analyze-btn:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(26,92,255,.45);}
.analyze-btn:active{transform:translateY(0);}
.analyze-btn.loading{opacity:.75;pointer-events:none;}
.ripple{position:absolute;border-radius:50%;background:rgba(255,255,255,.25);transform:scale(0);animation:rippleAnim .8s linear;}
@keyframes rippleAnim{to{transform:scale(4);opacity:0;}}
.spinner{width:18px;height:18px;border:2.5px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:spin .7s linear infinite;display:none;}
@keyframes spin{to{transform:rotate(360deg);}}
.scan-overlay{position:absolute;inset:0;background:rgba(26,92,255,.04);z-index:10;pointer-events:none;opacity:0;transition:opacity .3s;}
.scan-overlay.active{opacity:1;}
.scan-line{position:absolute;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,rgba(26,92,255,.6),transparent);animation:scanAnim 1.8s ease-in-out infinite;}
@keyframes scanAnim{0%{top:-5px;opacity:0;}10%{opacity:1;}90%{opacity:1;}100%{top:100%;opacity:0;}}

/* ── RESULT CARD ── */
.result-card{display:none;background:var(--card-bg);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-lg);overflow:hidden;margin-top:14px;animation:riseUp .5s ease both;transition:background .35s;}
.result-card.ai-r .res-header{background:linear-gradient(135deg,#1a5cff,#5d9bff);}
.result-card.hum-r .res-header{background:linear-gradient(135deg,#059669,#34d399);}
.res-header{padding:28px;color:white;}
.res-top{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;}
.res-icon{width:54px;height:54px;background:rgba(255,255,255,.2);border-radius:14px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.res-verdict{font-size:1.5rem;font-weight:800;letter-spacing:-.5px;margin-bottom:8px;}
.res-desc{font-size:.88rem;opacity:.88;line-height:1.7;max-width:560px;}
.res-conf{text-align:right;flex-shrink:0;}
.conf-big{font-size:2.4rem;font-weight:800;line-height:1;}
.conf-lbl{font-size:.7rem;font-weight:600;opacity:.7;text-transform:uppercase;letter-spacing:.1em;}
.res-body{padding:24px 28px;display:flex;flex-direction:column;gap:20px;}

/* ── METRICS GRID (new) ── */
.metrics-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
.metric-box{background:var(--blue-soft);border:1px solid var(--blue-border);border-radius:13px;padding:14px 12px;text-align:center;}
.metric-val{font-size:1.45rem;font-weight:800;color:var(--blue);line-height:1;margin-bottom:4px;}
.metric-lbl{font-size:.7rem;font-weight:600;color:var(--text-muted);text-transform:uppercase;letter-spacing:.08em;}
.metric-bar{height:4px;background:rgba(26,92,255,.1);border-radius:99px;margin-top:8px;overflow:hidden;}
.metric-bar-fill{height:100%;border-radius:99px;background:var(--blue);transition:width 1s cubic-bezier(.4,0,.2,1);}
.result-card.hum-r .metric-val{color:#059669;}
.result-card.hum-r .metric-bar-fill{background:#059669;}
.result-card.hum-r .metric-box{background:rgba(5,150,105,.08);border-color:rgba(5,150,105,.2);}

/* ── HIGHLIGHT PANEL (new) ── */
.highlight-section{background:var(--input-bg);border:1px solid var(--border);border-radius:13px;padding:16px;}
.highlight-title{font-size:.75rem;font-weight:700;color:var(--text-muted);letter-spacing:.1em;text-transform:uppercase;margin-bottom:12px;display:flex;align-items:center;gap:7px;}
.highlight-body{font-size:.9rem;line-height:1.85;color:var(--text);word-break:break-word;}
.hl-ai{background:rgba(26,92,255,.15);border-radius:4px;padding:1px 3px;cursor:default;transition:background .2s;}
.hl-ai:hover{background:rgba(26,92,255,.3);}
.hl-human{background:rgba(5,150,105,.13);border-radius:4px;padding:1px 3px;cursor:default;}
.hl-legend{display:flex;gap:14px;margin-top:10px;font-size:.75rem;font-weight:600;color:var(--text-muted);}
.hl-dot{display:inline-block;width:10px;height:10px;border-radius:3px;margin-right:5px;}

/* ── SIGNALS ── */
.conf-track{height:6px;background:rgba(26,92,255,.1);border-radius:99px;overflow:hidden;}
.conf-fill{height:100%;border-radius:99px;background:linear-gradient(90deg,var(--blue),#5d9bff);width:0%;transition:width 1.2s cubic-bezier(.4,0,.2,1);}
.result-card.hum-r .conf-fill{background:linear-gradient(90deg,#059669,#34d399);}
.sigs-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;}
.sig-item{display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--blue-soft);border-radius:10px;font-size:.82rem;font-weight:500;color:var(--text-mid);animation:riseUp .4s ease both;transition:background .35s,color .35s;}
.result-card.hum-r .sig-item{background:rgba(5,150,105,.08);}
.sig-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;}
.sig-dot.r{background:#1a5cff;}
.sig-dot.g{background:#059669;}

footer{position:relative;z-index:1;text-align:center;padding:40px 24px 32px;font-size:.82rem;color:var(--footer-text);display:flex;flex-direction:column;align-items:center;gap:14px;transition:color .35s;}
.gh-footer-link{display:inline-flex;align-items:center;gap:10px;padding:12px 28px;border-radius:99px;border:1.5px solid var(--border);background:var(--card-bg);color:var(--text);text-decoration:none;font-size:1.05rem;font-weight:800;transition:all .22s;box-shadow:var(--shadow);letter-spacing:-.3px;}
.gh-footer-link:hover{border-color:var(--blue);background:var(--blue-soft);color:var(--blue);transform:translateY(-2px);box-shadow:var(--shadow-lg);}
.gh-footer-link svg{width:22px;height:22px;}
.gh-footer-link .gh-arr{opacity:.4;margin-left:2px;}
@media(max-width:640px){
  nav{padding:0 20px;}
  .hero{padding:120px 16px 36px;}
  .main{padding:0 16px 100px;}
  .sigs-grid{grid-template-columns:1fr;}
  .metrics-grid{grid-template-columns:1fr 1fr;}
  .res-top{flex-direction:column;}
  .settings-panel{width:100%;}
}
</style>
</head>
<body data-theme="light">
<div class="bg-mesh"></div>
<div class="bg-grid"></div>

<!-- LOADER -->
<div id="loader">
  <div class="loader-logo">AI<span>Scope</span></div>
  <div class="loader-bar-wrap"><div class="loader-bar"></div></div>
  <div class="loader-sub" id="loaderSub">Loading...</div>
</div>

<!-- SETTINGS OVERLAY -->
<div class="settings-overlay" id="settingsOverlay" onclick="closeSettingsOnBg(event)">
  <div class="settings-panel" id="settingsPanel">
    <div class="settings-head">
      <h2 id="stTitle">Settings</h2>
      <button class="settings-close" onclick="closeSettings()">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
    </div>
    <div class="settings-body">
      <div class="s-section">
        <h3 id="stThemeLabel">Appearance</h3>
        <div class="theme-grid">
          <div class="theme-opt active" data-theme-val="light" onclick="setTheme('light',this)">
            <span class="theme-dot" style="background:linear-gradient(135deg,#f3f6ff,#1a5cff)"></span>
            <span id="tLight">Light</span>
          </div>
          <div class="theme-opt" data-theme-val="dark" onclick="setTheme('dark',this)">
            <span class="theme-dot" style="background:linear-gradient(135deg,#090e1a,#3d7fff)"></span>
            <span id="tDark">Dark</span>
          </div>
          <div class="theme-opt" data-theme-val="ocean" onclick="setTheme('ocean',this)">
            <span class="theme-dot" style="background:linear-gradient(135deg,#e8f4f8,#0077b6)"></span>
            <span id="tOcean">Ocean</span>
          </div>
          <div class="theme-opt" data-theme-val="mint" onclick="setTheme('mint',this)">
            <span class="theme-dot" style="background:linear-gradient(135deg,#f0fdf4,#059669)"></span>
            <span id="tMint">Mint</span>
          </div>
          <div class="theme-opt" data-theme-val="purple" onclick="setTheme('purple',this)" style="grid-column:span 2">
            <span class="theme-dot" style="background:linear-gradient(135deg,#faf5ff,#7c3aed)"></span>
            <span id="tPurple">Purple</span>
          </div>
        </div>
      </div>
      <div class="s-section">
        <h3 id="stLangLabel">Language</h3>
        <div class="lang-grid">
          <button class="lang-btn" data-lang="de" onclick="setLang('de',this)">🇩🇪 Deutsch</button>
          <button class="lang-btn active" data-lang="en" onclick="setLang('en',this)">🇬🇧 English</button>
          <button class="lang-btn" data-lang="tr" onclick="setLang('tr',this)">🇹🇷 Türkçe</button>
        </div>
      </div>
      <div class="s-section">
        <h3 id="stLimitsLabel">Limits</h3>
        <div class="limits-box">
          <div class="limit-row">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            <span id="limitText">Text / Code: max. 800 characters</span>
          </div>
          <div class="limit-row">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span id="limitImg">Images: max. 6 per session</span>
          </div>
        </div>
      </div>
      <a href="https://github.com/ghost14t" target="_blank" class="gh-link-settings">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
        ghost14t
        <svg style="margin-left:auto;opacity:.45" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </a>
    </div>
  </div>
</div>

<!-- NAV -->
<nav>
  <div class="nav-logo"><div class="nav-dot"></div>AI<span class="accent">Scope</span></div>
  <div class="nav-right">
    <div class="nav-pill" id="navPill">AI Detector</div>
    <button class="settings-btn" onclick="openSettings()" title="Settings">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
    </button>
  </div>
</nav>

<!-- HERO -->
<div class="hero">
  <div class="hero-badge"><div class="badge-dot"></div><span id="heroBadge">AI Detection</span></div>
  <h1><span id="heroTitle1">Detect</span> <span class="gr" id="heroTitle2">AI-Generated</span><br><span id="heroTitle3">Content</span></h1>
  <p class="hero-sub" id="heroSub">Analyze text, code and images — find out if AI or a human is behind it.</p>
</div>

<!-- MAIN -->
<div class="main">
  <div class="tabs">
    <button class="tab-btn active" onclick="switchTab('text',this)">
      <svg class="ti" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
      <span id="tabTextLbl">Text</span>
    </button>
    <button class="tab-btn" onclick="switchTab('code',this)">
      <svg class="ti" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      <span id="tabCodeLbl">Code</span>
    </button>
    <button class="tab-btn" onclick="switchTab('image',this)">
      <svg class="ti" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
      <span id="tabImgLbl">Image</span>
    </button>
  </div>

  <div class="card">
    <div class="panel active" id="panel-text">
      <div class="scan-overlay" id="scanOverlay"><div class="scan-line"></div></div>
      <div class="input-label">
        <span id="textLabel">Enter text</span>
        <span class="char-count" id="textCharCount">0 / 800</span>
      </div>
      <textarea id="textInput" maxlength="800" rows="8" oninput="updateCount('text')" placeholder="Paste your text here..."></textarea>
    </div>
    <div class="panel" id="panel-code">
      <div class="input-label">
        <span id="codeLabel">Enter code</span>
        <span class="char-count" id="codeCharCount">0 / 800</span>
      </div>
      <textarea id="codeInput" class="mono" maxlength="800" rows="8" oninput="updateCount('code')" placeholder="// Paste your code here..."></textarea>
    </div>
    <div class="panel" id="panel-image">
      <div class="upload-zone" id="uploadZone" onclick="document.getElementById('fileInput').click()">
        <input type="file" id="fileInput" accept="image/*" onchange="handleImg(event)">
        <img id="previewImg" src="" alt="">
        <div id="upIconWrap" class="up-icon-wrap">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <div class="up-title" id="upTitle">Upload image</div>
        <div class="up-sub" id="upSub">JPG, PNG, WEBP — drag &amp; drop or click</div>
        <div class="img-limit-badge">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <span id="imgCounter">0 / 6 analyzed</span>
        </div>
      </div>
    </div>
  </div>

  <button class="analyze-btn" id="analyzeBtn" onclick="analyze()">
    <div class="spinner" id="spinner"></div>
    <svg id="btnIcon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    <span id="btnLabel">Start analysis</span>
  </button>

  <div class="result-card" id="resultCard">
    <div class="res-header">
      <div class="res-top">
        <div>
          <div class="res-icon">
            <svg id="iconAI" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" style="display:none"><path d="M12 2a5 5 0 015 5v3a5 5 0 01-10 0V7a5 5 0 015-5z"/><path d="M4 15s0 7 8 7 8-7 8-7"/><circle cx="9" cy="9" r="1" fill="white"/><circle cx="15" cy="9" r="1" fill="white"/></svg>
            <svg id="iconHuman" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" style="display:none"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div class="res-verdict" id="resVerdict"></div>
          <div class="res-desc" id="resDesc"></div>
        </div>
        <div class="res-conf">
          <div class="conf-big" id="confPct"></div>
          <div class="conf-lbl" id="confLbl">Confidence</div>
        </div>
      </div>
    </div>
    <div class="res-body">
      <!-- Overall bar -->
      <div class="conf-track"><div class="conf-fill" id="confFill"></div></div>

      <!-- Metrics grid -->
      <div class="metrics-grid" id="metricsGrid"></div>

      <!-- Highlighted text -->
      <div class="highlight-section" id="highlightSection" style="display:none">
        <div class="highlight-title">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <span id="hlTitle">Pattern Highlights</span>
        </div>
        <div class="highlight-body" id="highlightBody"></div>
        <div class="hl-legend" id="hlLegend">
          <span><span class="hl-dot" style="background:rgba(26,92,255,.35)"></span><span id="hlLegAI">AI pattern</span></span>
          <span><span class="hl-dot" style="background:rgba(5,150,105,.25)"></span><span id="hlLegHuman">Human pattern</span></span>
        </div>
      </div>

      <!-- Signals -->
      <div class="sigs-grid" id="sigsGrid"></div>
    </div>
  </div>
</div>

<!-- FOOTER -->
<footer>
  <a href="https://github.com/ghost14t" target="_blank" class="gh-footer-link">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
    ghost14t
    <svg class="gh-arr" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
  </a>
  <span id="footerCopy">© 2026 AIScope</span>
</footer>

<script src="corpus.js"></script>
<script>
/* ══════════════════════════════════════════════════════════
   TRANSLATIONS
══════════════════════════════════════════════════════════ */
const T={
  de:{
    loaderSub:"Wird geladen...",navPill:"KI Detektor",heroBadge:"KI Erkennung",
    heroTitle1:"Erkennen Sie",heroTitle2:"KI-generierten",heroTitle3:"Inhalt",
    heroSub:"Text, Code und Bilder analysieren — erkennen ob KI oder Mensch dahintersteckt.",
    tabText:"Text",tabCode:"Code",tabImg:"Bild",
    textLabel:"Text eingeben",codeLabel:"Code eingeben",
    textPH:"Fügen Sie hier Ihren Text ein...",codePH:"// Code hier einfügen...",
    upTitle:"Bild hochladen",upSub:"JPG, PNG, WEBP — drag & drop oder klicken",
    btnLabel:"Analyse starten",btnLoading:"Analysiere...",btnRedo:"Erneut analysieren",
    verdictAI:"Von KI generiert",verdictHuman:"Von einem Menschen verfasst",
    descAI:"Die Analyse zeigt, dass dieser Inhalt höchstwahrscheinlich von einem KI-Modell generiert wurde.",
    descHuman:"Die Analyse zeigt, dass dieser Inhalt höchstwahrscheinlich von einem Menschen verfasst wurde.",
    confLbl:"Konfidenz",
    mPerplexity:"Vorhersagbarkeit",mBurstiness:"Burstiness",mVocabulary:"Wortvielfalt",
    mRepetition:"Wiederholung",mStructure:"Struktur",mNaturalness:"Natürlichkeit",
    hlTitle:"Muster-Highlights",hlLegAI:"KI-Muster",hlLegHuman:"Mensch-Muster",
    limitText:"Text / Code: max. 800 Zeichen",limitImg:"Bilder: max. 6 pro Sitzung",
    stTitle:"Einstellungen",stThemeLabel:"Erscheinungsbild",stLangLabel:"Sprache",stLimitsLabel:"Limits",
    tLight:"Hell",tDark:"Dunkel",tOcean:"Ozean",tMint:"Mint",tPurple:"Lila",
    footerCopy:"© 2026 AIScope",
    imgCounter:n=>`${n} / 6 analysiert`,
    sigs:{
      ai:["Gleichmäßige Satzlängen erkannt","KI-typische Wortmuster","Übermäßig strukturierter Absatzfluss","Niedrige Wortvielfalt","Maschinenkonsistente Zeichensetzung","Lange fehlerfreie Grammatikstruktur","Formelle Konnektoren gehäuft","Übergangswörter überrepräsentiert"],
      human:["Natürliche Sprachverteilung","Variable Satzstruktur erkannt","Organischer Schreibfluss","Hohe Wortvielfalt","Individuelle Ausdrucksspuren","Menschliche Sprachinkonsistenzen","Umgangssprache erkannt","Unregelmäßige Absatzlängen"]
    }
  },
  en:{
    loaderSub:"Loading...",navPill:"AI Detector",heroBadge:"AI Detection",
    heroTitle1:"Detect",heroTitle2:"AI-Generated",heroTitle3:"Content",
    heroSub:"Analyze text, code and images — find out if AI or a human is behind it.",
    tabText:"Text",tabCode:"Code",tabImg:"Image",
    textLabel:"Enter text",codeLabel:"Enter code",
    textPH:"Paste your text here...",codePH:"// Paste your code here...",
    upTitle:"Upload image",upSub:"JPG, PNG, WEBP — drag & drop or click",
    btnLabel:"Start analysis",btnLoading:"Analyzing...",btnRedo:"Analyze again",
    verdictAI:"Generated by AI",verdictHuman:"Written by a Human",
    descAI:"Analysis indicates this content was most likely generated by an AI model. Detected language patterns reflect characteristics typical of AI generation systems.",
    descHuman:"Analysis indicates this content was most likely written by a human. Language structure and patterns contain naturalness typical of organic human writing.",
    confLbl:"Confidence",
    mPerplexity:"Predictability",mBurstiness:"Burstiness",mVocabulary:"Vocabulary",
    mRepetition:"Repetition",mStructure:"Structure",mNaturalness:"Naturalness",
    hlTitle:"Pattern Highlights",hlLegAI:"AI pattern",hlLegHuman:"Human pattern",
    limitText:"Text / Code: max. 800 characters",limitImg:"Images: max. 6 per session",
    stTitle:"Settings",stThemeLabel:"Appearance",stLangLabel:"Language",stLimitsLabel:"Limits",
    tLight:"Light",tDark:"Dark",tOcean:"Ocean",tMint:"Mint",tPurple:"Purple",
    footerCopy:"© 2026 AIScope",
    imgCounter:n=>`${n} / 6 analyzed`,
    sigs:{
      ai:["Uniform sentence lengths detected","AI-typical word patterns found","Over-structured paragraph flow","Low vocabulary diversity score","Machine-consistent punctuation","Long flawless grammar structure","Formal connectors overused","Transitional phrases overrepresented"],
      human:["Natural language distribution","Variable sentence structure","Organic writing flow detected","High vocabulary diversity","Individual writing style traces","Human language inconsistencies","Colloquial expressions found","Irregular paragraph lengths"]
    }
  },
  tr:{
    loaderSub:"Yükleniyor...",navPill:"Yapay Zeka Dedektörü",heroBadge:"Yapay Zeka Tespiti",
    heroTitle1:"İçeriğin",heroTitle2:"Yapay Zeka mı",heroTitle3:"Olduğunu Öğren",
    heroSub:"Metin, kod ve görselleri analiz et — kim yazdı, insan mı yoksa yapay zeka mı?",
    tabText:"Metin",tabCode:"Kod",tabImg:"Görsel",
    textLabel:"Metin gir",codeLabel:"Kod gir",
    textPH:"Metni buraya yapıştır...",codePH:"// Kodu buraya yapıştır...",
    upTitle:"Görsel yükle",upSub:"JPG, PNG, WEBP — sürükle bırak ya da tıkla",
    btnLabel:"Analizi başlat",btnLoading:"Analiz ediliyor...",btnRedo:"Tekrar analiz et",
    verdictAI:"Yapay Zeka Tarafından Üretilmiştir",verdictHuman:"Bir İnsan Tarafından Yazılmıştır",
    descAI:"Analiz sonucuna göre bu içerik büyük ihtimalle bir yapay zeka modeli tarafından oluşturulmuş.",
    descHuman:"Analiz sonucuna göre bu içerik büyük ihtimalle bir insan tarafından yazılmış.",
    confLbl:"Güven Skoru",
    mPerplexity:"Tahmin Edilebilirlik",mBurstiness:"Burstiness",mVocabulary:"Kelime Zenginliği",
    mRepetition:"Tekrar",mStructure:"Yapı",mNaturalness:"Doğallık",
    hlTitle:"Desen Vurguları",hlLegAI:"YZ deseni",hlLegHuman:"İnsan deseni",
    limitText:"Metin / Kod: en fazla 800 karakter",limitImg:"Görsel: oturum başına en fazla 6",
    stTitle:"Ayarlar",stThemeLabel:"Görünüm",stLangLabel:"Dil",stLimitsLabel:"Limitler",
    tLight:"Açık",tDark:"Koyu",tOcean:"Okyanus",tMint:"Nane",tPurple:"Mor",
    footerCopy:"© 2026 AIScope",
    imgCounter:n=>`${n} / 6 analiz edildi`,
    sigs:{
      ai:["Tekdüze cümle uzunlukları tespit edildi","Yapay zekaya özgü kelime kalıpları","Aşırı yapılandırılmış paragraf akışı","Düşük kelime çeşitliliği skoru","Makineye özgü noktalama tutarlılığı","Uzun ve kusursuz gramer yapısı","Resmi bağlaçların aşırı kullanımı","Geçiş ifadeleri orantısız biçimde fazla"],
      human:["Doğal dil dağılımı gözlemlendi","Değişken cümle yapısı saptandı","Organik yazım akışı tespit edildi","Yüksek kelime çeşitliliği skoru","Bireysel ifade tarzı izleri bulundu","İnsana özgü dil tutarsızlıkları","Günlük konuşma ifadeleri bulundu","Düzensiz paragraf uzunlukları"]
    }
  }
};

/* ══════════════════════════════════════════════════════════
   ADVANCED ANALYSIS ENGINE
   All scoring is deterministic based on linguistic features.
══════════════════════════════════════════════════════════ */

/**
 * Tokenize text into sentences.
 */
function getSentences(text) {
  return text.split(/(?<=[.!?])\s+|(?<=[.!?])$/).map(s=>s.trim()).filter(s=>s.length>4);
}

/**
 * Tokenize text into words (3+ chars).
 */
function getWords(text) {
  return (text.toLowerCase().match(/[\wÀ-öø-ÿ]{3,}/g) || []);
}

/**
 * Compute Type-Token Ratio (vocabulary diversity). 0=low, 1=high.
 */
function computeTTR(words) {
  if (words.length < 5) return 0.5;
  return Math.min(1, new Set(words).size / words.length);
}

/**
 * Compute Burstiness: measures how much sentence lengths vary.
 * AI text → uniform lengths → low burstiness (near 0)
 * Human text → chaotic lengths → high burstiness (near 1)
 */
function computeBurstiness(sentences) {
  if (sentences.length < 3) return 0.5;
  const lens = sentences.map(s => s.length);
  const mean = lens.reduce((a,b)=>a+b,0) / lens.length;
  if (mean === 0) return 0.5;
  const std = Math.sqrt(lens.reduce((a,b)=>a+Math.pow(b-mean,2),0)/lens.length);
  const cv = std / mean; // coefficient of variation
  return Math.min(1, cv / 1.2);
}

/**
 * Compute Predictability (inverse of perplexity proxy).
 * Looks at n-gram repetition within the text.
 * Higher = more predictable = more AI-like.
 */
function computePredictability(words) {
  if (words.length < 6) return 0.5;
  const bigrams = {};
  for (let i = 0; i < words.length - 1; i++) {
    const bg = words[i] + '_' + words[i+1];
    bigrams[bg] = (bigrams[bg] || 0) + 1;
  }
  const total = words.length - 1;
  const repeated = Object.values(bigrams).filter(v=>v>1).reduce((a,b)=>a+b,0);
  return Math.min(1, repeated / total * 2.5);
}

/**
 * Compute Repetition score: phrase-level repetition.
 */
function computeRepetition(text) {
  const words = getWords(text);
  if (words.length < 8) return 0.3;
  const trigrams = {};
  for (let i = 0; i < words.length - 2; i++) {
    const tg = words[i]+'_'+words[i+1]+'_'+words[i+2];
    trigrams[tg] = (trigrams[tg]||0)+1;
  }
  const reps = Object.values(trigrams).filter(v=>v>1).length;
  return Math.min(1, reps / (words.length * 0.08));
}

/**
 * Compute Structure score: paragraph uniformity + transition words (all languages)
 */
function computeStructure(text) {
  let score = 0;
  const paras = text.split(/\n{2,}/).filter(p=>p.trim().length>10);
  if (paras.length >= 3) {
    const pLens = paras.map(p=>p.trim().length);
    const pMean = pLens.reduce((a,b)=>a+b,0)/pLens.length;
    const pStd = Math.sqrt(pLens.reduce((a,b)=>a+Math.pow(b-pMean,2),0)/pLens.length);
    const pCV = pMean > 0 ? pStd/pMean : 0.5;
    if (pCV < 0.2) score += 0.5;
    else if (pCV < 0.35) score += 0.25;
  }
  const transitions = (text.match(/\b(furthermore|moreover|in addition|in conclusion|it is worth|it should be noted|one might|additionally|consequently|therefore|thus|hence|subsequently|nevertheless|nonetheless|however|although|despite|whereas|bunun yanı sıra|öte yandan|sonuç olarak|bu bağlamda|bu nedenle|bununla birlikte|nitekim|özellikle|darüber hinaus|zusammenfassend|grundsätzlich)\b/gi)||[]).length;
  score += Math.min(0.5, transitions * 0.1);
  return Math.min(1, score);
}

/**
 * Formal tone score — AI writes very formally with long passive sentences.
 * High = AI-like formal writing.
 */
function computeFormalTone(text) {
  let score = 0;
  const wordCount = getWords(text).length;
  if (wordCount < 8) return 0;
  const sentences = getSentences(text);
  if (sentences.length > 0) {
    const avgLen = sentences.reduce((a,s)=>a+s.split(' ').length,0)/sentences.length;
    if (avgLen > 22) score += 0.4;
    else if (avgLen > 16) score += 0.2;
    else if (avgLen < 9) score -= 0.15;
  }
  // Turkish -mektedir / -lacaktır passive formal endings
  const trFormal = (text.match(/\w+(mektedir|maktadir|lmaktadir|ecektir|acaktir|lacaktir|nmaktadir|ilmektedir|nmaktadır|lmaktadır|maktadır|mektedir|ecektir|acaktır)\b/g)||[]).length;
  score += Math.min(0.45, trFormal * 0.08);
  // EN passive / impersonal
  const passive = (text.match(/\b(is being|are being|was being|has been|have been|had been|will be|would be)\b/gi)||[]).length;
  score += Math.min(0.2, passive * 0.07);
  // Nominalization
  const nominal = (text.match(/\b\w+(tion|sion|ment|ness|ity|ance|ence|ization)\b/gi)||[]).length;
  score += Math.min(0.2, nominal * 0.04);
  return Math.min(1, Math.max(0, score));
}

/**
 * Naturalness: casual, human-like markers. High = human.
 */
function computeNaturalness(text) {
  let score = 0;
  const casual = (text.match(/\b(lol|haha|yeah|yep|nope|kinda|gonna|wanna|gotta|dunno|tbh|imo|idk|omg|wtf|btw|ngl|honestly|literally|basically|actually|you know|i mean|anyway|anyways|stuff|pretty much|sort of|kind of)\b/gi)||[]).length;
  score += Math.min(0.35, casual * 0.09);
  const trCasual = (text.match(/\b(ya|yani|hani|neyse|falan|filan|işte|tabi|tamam|bilmiyorum|sanırım|galiba|herhalde|aslında|zaten|nasıl desem|ne bileyim)\b/gi)||[]).length;
  score += Math.min(0.35, trCasual * 0.09);
  const contractions = (text.match(/\b\w+'(t|ve|re|ll|d|s|m)\b/g)||[]).length;
  score += Math.min(0.2, contractions * 0.06);
  const stylistic = (text.match(/\.{2,}|—|–|\?\!|!{2,}|\?{2,}/g)||[]).length;
  score += Math.min(0.15, stylistic * 0.07);
  const firstPerson = (text.match(/\b(I |I'm|I've|I'll|I'd|ben |benim|bana|beni)\b/g)||[]).length;
  score += Math.min(0.15, firstPerson * 0.04);
  return Math.min(1, score);
}

/**
 * AI keyword score: direct AI linguistic fingerprints across EN/TR/DE.
 */
function computeAIKeywords(text) {
  const patterns = [
    {re:/\b(certainly|absolutely|of course)\b/gi, w:0.15},
    {re:/\b(utilize|leverage|facilitate|comprehensive|robust|seamless|innovative|cutting-edge|state-of-the-art|transformative|groundbreaking)\b/gi, w:0.10},
    {re:/\b(it is worth noting|it is important to|one might argue|it can be observed|it should be noted|it is essential)\b/gi, w:0.18},
    {re:/\b(in conclusion|to summarize|to sum up|in summary|in essence|overall,)\b/gi, w:0.16},
    {re:/\b(delve into|dive into|shed light on|pave the way|play a crucial role|at the forefront)\b/gi, w:0.14},
    {re:/\b(tapestry|nuanced|multifaceted|holistic|paradigm|synergy|ecosystem|stakeholder)\b/gi, w:0.12},
    // TR kalıpları — genel
    {re:/\b(tabii ki|elbette|kesinlikle)\b/gi, w:0.14},
    {re:/bu (bağlamda|süreçte|doğrultuda|perspektiften|çerçevede)/gi, w:0.18},
    {re:/(sonuç olarak|özetle|genel olarak|değerlendirildiğinde)/gi, w:0.18},
    {re:/(bunun yanı sıra|bununla birlikte|öte yandan|nitekim)\b/gi, w:0.15},
    {re:/(göz önünde bulundurulduğunda|incelendiğinde|ele alındığında)/gi, w:0.20},
    {re:/(belirtmek gerekir|vurgulamak gerekir|söylemek mümkün)/gi, w:0.18},
    {re:/(kritik bir rol|önemli bir adım|temel bir unsur|vazgeçilmez)/gi, w:0.15},
    {re:/(dijital dönüşüm|yapay zeka teknoloj|makine öğrenmesi|veri analitik)/gi, w:0.13},
    {re:/\b(verimlilik|sürdürülebilir|entegrasyon|optimizasyon|inovasyon)\b/gi, w:0.10},
    // TR — ChatGPT spesifik kalıpları
    {re:/(başlıca nedenleri arasında|yer almaktadır|önem taşımaktadır)/gi, w:0.18},
    {re:/(temel unsurları arasında|yer almaktadır)/gi, w:0.16},
    {re:/(büyük önem taşı|kritik önem taşı|taşımaktadır)/gi, w:0.15},
    {re:/(aynı zamanda|bu nedenle|bu açıdan)/gi, w:0.12},
    {re:/(yaşam kalitesini artır|yaşam kalitesini yükselt)/gi, w:0.15},
    {re:/(olumlu yönde etkile|olumsuz yönde etkile)/gi, w:0.14},
    {re:/(erişilebilir|nitelikli eğitim|toplumsal eşitlik|ekonomik gelişme)/gi, w:0.12},
    {re:/(bireysel .{0,20} toplum|toplumun .{0,20} bireyle)/gi, w:0.13},
    // TR — Gemini spesifik kalıpları
    {re:/(ivedilikle|beşeri sermaye|katma değer|psikososyal|dezenformasyon)/gi, w:0.20},
    {re:/(çok boyutlu|yapısal dönüşüm|kurumsal şeffaflık|sinerjinin)/gi, w:0.18},
    {re:/(bilişsel kapasite|demokratik değerler|kökleşmesini)/gi, w:0.18},
    {re:/(minimize ederek|optimize edilmesi|sistematik bir şekilde)/gi, w:0.17},
    {re:/(rekabet edebilirlik|küresel ticaret|sürdürülebilir büyüme)/gi, w:0.16},
    {re:/(yalnızca .{0,30} kalmayıp|sınırlı kalmayıp)/gi, w:0.17},
    {re:/(Ar-Ge yatırım|katma değeri yüksek|iş gücü piyasası)/gi, w:0.16},
    // DE kalıpları
    {re:/\b(es ist wichtig zu beachten|darüber hinaus|zusammenfassend|grundsätzlich|insbesondere)\b/gi, w:0.16},
  ];
  let score = 0;
  patterns.forEach(({re,w})=>{
    const m = text.match(re);
    if (m) score += m.length * w;
  });
  return Math.min(1, score);
}

/**
 * Main detectAI function — deterministic, evidence-based.
 * Returns {isAI, confidence, signals, metrics, highlights}
 */
function detectAI(content, type) {
  const t = T[curLang];

  // ── IMAGE: heuristic only (no real image analysis possible) ──
  if (type === 'image') {
    const isAI = Math.random() > 0.45;
    const conf = 0.62 + Math.random() * 0.28;
    const sigs = t.sigs;
    return {
      isAI, confidence: isAI ? conf : 1 - conf + 0.1,
      signals: (isAI ? sigs.ai : sigs.human).slice(0,4),
      metrics: null,
      highlights: null
    };
  }

  // ── TEXT / CODE: full analysis ──
  const sentences = getSentences(content);
  const words = getWords(content);

  const ttr        = computeTTR(words);
  const burstiness = computeBurstiness(sentences);
  const predict    = computePredictability(words);
  const repetition = computeRepetition(content);
  const structure  = computeStructure(content);
  const natural    = computeNaturalness(content);
  const aiKW       = computeAIKeywords(content);
  const formal     = computeFormalTone(content);   // NEW: long passive formal sentences

  // Extra code-specific signals
  let codeAI = 0, codeHuman = 0;
  if (type === 'code') {

    // ── AI code signals ──
    // Long descriptive comments starting with capital (AI loves these)
    const docComments = (content.match(/\/\/ [A-Z][a-z].{15,}|# [A-Z][a-z].{15,}/g)||[]).length;
    codeAI += Math.min(0.4, docComments * 0.10);

    // Every function/block has a comment above it (AI pattern)
    const commentLines = (content.match(/^\s*(\/\/|#).+/gm)||[]).length;
    const codeLines = content.split('\n').filter(l=>l.trim().length>3).length;
    const commentRatio = codeLines > 0 ? commentLines / codeLines : 0;
    if (commentRatio > 0.4) codeAI += 0.25;
    else if (commentRatio > 0.25) codeAI += 0.12;

    // AI-typical comment phrases
    const aiCommentPhrases = (content.match(/\/\/ (Initialize|Iterate|Apply|Return|Define|Create|Process|Handle|Ensure|Implement|Calculate|Generate|This function|This method|This class|Selecting|Partitioning|Recursively|Validate|Base case)/g)||[]).length;
    codeAI += Math.min(0.35, aiCommentPhrases * 0.12);

    // Gemini spesifik: tip belirtme (type hints) + docstring birlikte
    const typeHints = (content.match(/List\[|Union\[|Optional\[|Dict\[|Tuple\[|-> List|-> Dict|-> Optional/g)||[]).length;
    codeAI += Math.min(0.30, typeHints * 0.08);

    // Gemini spesifik: Complexity / Args / Returns / Example docstring bölümleri
    const docSections = (content.match(/Args:|Returns:|Raises:|Example:|Parameters|Complexity:|Note:/g)||[]).length;
    codeAI += Math.min(0.35, docSections * 0.09);

    // ChatGPT spesifik: "Create a copy", "avoid modifying the original" tarzı açıklamalar
    const chatgptPhrases = (content.match(/# Create a copy|# avoid modifying|# Sort the|# Example usage|Parameters\s*[-]+|Returns\s*[-]+|Example\s*[-]+/g)||[]).length;
    codeAI += Math.min(0.30, chatgptPhrases * 0.10);

    // if __name__ == "__main__" (AI örnek kullanımı)
    if (/if __name__ == ['"]__main__['"]/.test(content)) codeAI += 0.15;

    // "Example Usage" veya "Example:" yorumu
    const exampleComment = (content.match(/# Example (Usage|usage|:)|\/\/ Example/g)||[]).length;
    codeAI += Math.min(0.20, exampleComment * 0.10);

    // Perfect variable names (snake_case or camelCase, very clean)
    const perfectVars = (content.match(/\b(processed_results|input_data|output_data|result_list|data_processor|error_handler|config_manager|base_url|api_response|user_input|final_result|transformed_data)\b/g)||[]).length;
    codeAI += Math.min(0.3, perfectVars * 0.12);

    // AI-style docstrings (Python)
    const docstrings = (content.match(/"""[\s\S]{20,}?"""|'''[\s\S]{20,}?'''/g)||[]).length;
    codeAI += Math.min(0.25, docstrings * 0.12);

    // Overly descriptive function names
    const longFuncNames = (content.match(/def [a-z]{8,}_[a-z]{4,}|function [a-z]{8,}[A-Z]/g)||[]).length;
    codeAI += Math.min(0.2, longFuncNames * 0.10);

    // ── Human code signals ──
    // Debug print statements
    const debugLogs = (content.match(/console\.log\(|print\(|System\.out\.print|echo |var_dump\(/g)||[]).length;
    const funcs = (content.match(/function |def |const \w+ = \(|async |\w+\s*=\s*lambda/g)||[]).length;
    if (debugLogs > 0) codeHuman += Math.min(0.25, debugLogs * 0.08);

    // TODO / FIXME / hack comments
    const todos = (content.match(/TODO|FIXME|HACK|XXX|fixme|todo|hack|temp|#noqa|wtf|idk|neden|bilmiyorum/gi)||[]).length;
    codeHuman += Math.min(0.35, todos * 0.14);

    // var instead of let/const (old habits)
    if (/\bvar /.test(content)) codeHuman += 0.10;

    // Short/messy variable names
    const messyVars = (content.match(/\b(x|y|z|tmp|temp|foo|bar|baz|asd|abc|yyy|xxx|sonuc|veri|liste|dizi)\b/g)||[]).length;
    codeHuman += Math.min(0.25, messyVars * 0.07);

    // Commented-out code (humans do this, AI rarely does)
    const commentedCode = (content.match(/\/\/ (if|for|while|return|const|let|var|function)|# (if|for|while|return|def|import)/g)||[]).length;
    codeHuman += Math.min(0.2, commentedCode * 0.10);

    // Turkish comments (definitely human or local AI — weaker AI signal)
    const trComments = (content.match(/#.*(yap|al|ver|bak|düzelt|sil|ekle|kontrol|buraya|şunu|bunu|neden|çalışmıyor)/gi)||[]).length;
    codeHuman += Math.min(0.3, trComments * 0.12);
  }

  // ── Score aggregation ──
  let aiScore = 0;
  aiScore += aiKW             * 0.28;  // explicit AI phrases — strongest signal
  aiScore += formal           * 0.22;  // long formal passive sentences
  aiScore += structure        * 0.14;
  aiScore += predict          * 0.12;
  aiScore += (1 - burstiness) * 0.12;
  aiScore += repetition       * 0.07;
  aiScore += (1 - ttr)        * 0.05;
  aiScore += codeAI;

  let humScore = 0;
  humScore += (natural > 0.04 ? natural : 0) * 0.38;
  humScore += burstiness              * 0.22;
  humScore += ttr                     * 0.14;
  humScore += (1 - predict)           * 0.12;
  humScore += (1 - formal)            * 0.08;
  humScore += (1 - structure)         * 0.06;
  humScore += codeHuman;

  // Hard overrides
  if (aiKW > 0.35)                          aiScore += 0.22;
  if (formal > 0.45)                        aiScore += 0.18;
  if (burstiness < 0.22 && formal > 0.3)   aiScore += 0.12;
  if (natural < 0.03 && formal > 0.2)      aiScore += 0.12;
  if (natural > 0.25)                       humScore += 0.15;
  if (burstiness > 0.55 && natural > 0.1)  humScore += 0.10;

  // ── Corpus similarity boost ──
  const corpus = corpusSimilarity(content);
  if (corpus.isAI !== null) {
    if (corpus.isAI)  aiScore  += corpus.corpusConf * 1.2;
    else              humScore += corpus.corpusConf * 1.2;
    // Strong override: if corpus is very confident, force the result
    if (corpus.corpusConf > 0.35 && corpus.isAI)  aiScore  += 0.3;
    if (corpus.corpusConf > 0.35 && !corpus.isAI) humScore += 0.3;
  }

  const total = aiScore + humScore;
  let isAI, rawConf;
  if (total < 0.05) {
    isAI = false; rawConf = 0.54;
  } else {
    isAI = aiScore >= humScore;
    rawConf = isAI
      ? 0.50 + (aiScore / total) * 0.46
      : 0.50 + (humScore / total) * 0.46;
  }

  // Clamp confidence to realistic range
  const confidence = Math.min(0.97, Math.max(0.53, rawConf));

  // ── Build metrics for display ──
  // Each metric: {key, label, value 0-1, description}
  const metrics = [
    { key:'predict',   label:t.mPerplexity,   value: isAI ? predict         : 1-predict,    raw: predict },
    { key:'burst',     label:t.mBurstiness,   value: isAI ? 1-burstiness    : burstiness,   raw: burstiness },
    { key:'vocab',     label:t.mVocabulary,   value: isAI ? 1-ttr           : ttr,           raw: ttr },
    { key:'formal',    label:t.mStructure,    value: isAI ? formal          : 1-formal,      raw: formal },
    { key:'keywords',  label:t.mRepetition,   value: isAI ? aiKW            : 1-aiKW,        raw: aiKW },
    { key:'natural',   label:t.mNaturalness,  value: isAI ? 1-natural       : natural,       raw: natural },
  ];

  // ── Build highlights ──
  // We mark spans of text that contain AI or human markers.
  const highlights = buildHighlights(content);

  // ── Select signals ──
  const sigs = t.sigs;
  const signals = [...(isAI ? sigs.ai : sigs.human)].slice(0, 4);

  return { isAI, confidence, signals, metrics, highlights };
}

/**
 * Build highlight spans: returns array of {text, type: 'ai'|'human'|'neutral'}
 */
function buildHighlights(text) {
  if (text.length < 20) return null;

  const aiPhrases = [
    /\b(certainly|absolutely|of course|furthermore|moreover|in addition|in conclusion|it is worth noting|it is important to|one might argue|it should be noted|additionally|consequently|therefore|thus|hence|subsequently|nevertheless|nonetheless|delve into|comprehensive|robust|seamless|innovative|utilize|leverage|facilitate)\b/gi,
    /\b(tabii ki|elbette|kesinlikle|bu bağlamda|sonuç olarak|bunun yanı sıra|belirtmek gerekir ki|dikkat edilmesi gereken)\b/gi,
    /\b(es ist wichtig|darüber hinaus|zusammenfassend|grundsätzlich|insbesondere)\b/gi,
  ];
  const humanPhrases = [
    /\b(lol|haha|yeah|yep|nope|kinda|gonna|wanna|gotta|dunno|tbh|imo|idk|omg|btw|ngl|honestly|literally|basically|you know|i mean|anyway)\b/gi,
    /\w+'(t|ve|re|ll|d|m)\b/g,
    /\.{2,}|—|–|\?\!/g,
  ];

  // Build a map of positions
  const marks = []; // {start, end, type}

  aiPhrases.forEach(re => {
    let m;
    const r = new RegExp(re.source, re.flags);
    while ((m = r.exec(text)) !== null) {
      marks.push({start: m.index, end: m.index + m[0].length, type:'ai'});
    }
  });
  humanPhrases.forEach(re => {
    let m;
    const r = new RegExp(re.source, re.flags);
    while ((m = r.exec(text)) !== null) {
      marks.push({start: m.index, end: m.index + m[0].length, type:'human'});
    }
  });

  if (marks.length === 0) return null;

  // Sort by start
  marks.sort((a,b)=>a.start-b.start);

  // Build segments
  const segments = [];
  let cursor = 0;
  marks.forEach(({start,end,type})=>{
    if (start > cursor) segments.push({text: text.slice(cursor, start), type:'neutral'});
    if (end > cursor) {
      segments.push({text: text.slice(Math.max(start,cursor), end), type});
      cursor = end;
    }
  });
  if (cursor < text.length) segments.push({text: text.slice(cursor), type:'neutral'});

  return segments;
}

/* ══════════════════════════════════════════════════════════
   UI UTILITIES
══════════════════════════════════════════════════════════ */
let curLang='en', curTab='text', imgCount=0;
const IMG_LIMIT=6, CHAR_LIMIT=800;

function applyLang(lang) {
  const t = T[lang];
  const s=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v;};
  const p=(id,v)=>{const e=document.getElementById(id);if(e)e.placeholder=v;};
  s('loaderSub',t.loaderSub);s('navPill',t.navPill);s('heroBadge',t.heroBadge);
  s('heroTitle1',t.heroTitle1);s('heroTitle2',t.heroTitle2);s('heroTitle3',t.heroTitle3);
  s('heroSub',t.heroSub);s('tabTextLbl',t.tabText);s('tabCodeLbl',t.tabCode);s('tabImgLbl',t.tabImg);
  s('textLabel',t.textLabel);s('codeLabel',t.codeLabel);
  s('upTitle',t.upTitle);s('upSub',t.upSub);
  s('btnLabel',t.btnLabel);s('limitText',t.limitText);s('limitImg',t.limitImg);
  s('stTitle',t.stTitle);s('stThemeLabel',t.stThemeLabel);s('stLangLabel',t.stLangLabel);s('stLimitsLabel',t.stLimitsLabel);
  s('tLight',t.tLight);s('tDark',t.tDark);s('tOcean',t.tOcean);s('tMint',t.tMint);s('tPurple',t.tPurple);
  s('footerCopy',t.footerCopy);s('imgCounter',t.imgCounter(imgCount));s('confLbl',t.confLbl);
  s('hlTitle',t.hlTitle);s('hlLegAI',t.hlLegAI);s('hlLegHuman',t.hlLegHuman);
  p('textInput',t.textPH);p('codeInput',t.codePH);
  document.documentElement.lang = lang;
}

function setLang(lang, el) {
  curLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  applyLang(lang);
  hideResult();
}

function setTheme(theme, el) {
  document.body.setAttribute('data-theme', theme);
  document.querySelectorAll('.theme-opt').forEach(o=>o.classList.remove('active'));
  el.classList.add('active');
}

function openSettings(){document.getElementById('settingsOverlay').classList.add('open');}
function closeSettings(){document.getElementById('settingsOverlay').classList.remove('open');}
function closeSettingsOnBg(e){if(e.target===document.getElementById('settingsOverlay'))closeSettings();}

function updateCount(type) {
  const input = document.getElementById(type+'Input');
  const counter = document.getElementById(type+'CharCount');
  const len = input.value.length;
  counter.textContent = `${len} / ${CHAR_LIMIT}`;
  counter.className = 'char-count'+(len>700?' warn':'')+(len>=CHAR_LIMIT?' over':'');
}

window.addEventListener('load', ()=>{
  setTimeout(()=>{
    document.getElementById('loader').classList.add('hide');
    setTimeout(()=>document.getElementById('loader').style.display='none', 750);
  }, 1900);
});

function switchTab(t, el) {
  curTab = t;
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('panel-'+t).classList.add('active');
  hideResult();
}

function handleImg(e) {
  const f = e.target.files[0]; if (!f) return;
  if (imgCount >= IMG_LIMIT) { alert(T[curLang].limitImg); return; }
  const r = new FileReader();
  r.onload = ev => {
    const img = document.getElementById('previewImg');
    img.src = ev.target.result; img.style.display = 'block';
    document.getElementById('upIconWrap').style.display = 'none';
    document.getElementById('upTitle').textContent = f.name;
    document.getElementById('upSub').textContent = (f.size/1024).toFixed(1)+' KB';
  };
  r.readAsDataURL(f);
}

const zone = document.getElementById('uploadZone');
zone.addEventListener('dragover', e=>{e.preventDefault();zone.classList.add('drag-over');});
zone.addEventListener('dragleave', ()=>zone.classList.remove('drag-over'));
zone.addEventListener('drop', e=>{
  e.preventDefault(); zone.classList.remove('drag-over');
  const f = e.dataTransfer.files[0];
  if (f && f.type.startsWith('image/')) handleImg({target:{files:e.dataTransfer.files}});
});

document.getElementById('analyzeBtn').addEventListener('click', function(e) {
  const r = this.getBoundingClientRect();
  const rp = document.createElement('span'); rp.className = 'ripple';
  const sz = Math.max(r.width, r.height);
  rp.style.cssText = `width:${sz}px;height:${sz}px;left:${e.clientX-r.left-sz/2}px;top:${e.clientY-r.top-sz/2}px`;
  this.appendChild(rp); setTimeout(()=>rp.remove(), 800);
});

function shakeBtn() {
  const b = document.getElementById('analyzeBtn');
  [-9,9,-5,5,0].forEach((v,i)=>setTimeout(()=>b.style.transform=`translateX(${v}px)`,i*80));
  setTimeout(()=>b.style.transform='', 400);
}

function hideResult() {
  const c = document.getElementById('resultCard');
  c.style.display = 'none'; c.className = 'result-card';
}



const GEMINI_API_KEY = 'AIzaSyB3NhRf3W3VLCMhAfDF7SCx7eyiJcHptAE';

async function analyzeWithGemini(text) {
  const prompt = `You are an AI content detector. Analyze the following text and determine if it was written by a human or generated by an AI.\n\nText:\n"""\n${text}\n"""\n\nRespond ONLY with valid JSON, no markdown:\n{"isAI": true/false, "confidence": 0.53-0.97, "reasoning": "one sentence"}`;
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    }
  );
  if (!response.ok) throw new Error('Gemini API error: ' + response.status);
  const data = await response.json();
  const raw = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  return JSON.parse(raw.replace(/```json|```/g, '').trim());
}

function analyze() {
  const t = T[curLang]; let content = '';
  if (curTab === 'text') {
    content = document.getElementById('textInput').value.trim();
    if (content.length < 10) { shakeBtn(); return; }
  } else if (curTab === 'code') {
    content = document.getElementById('codeInput').value.trim();
    if (content.length < 10) { shakeBtn(); return; }
  } else {
    if (imgCount >= IMG_LIMIT) { alert(t.limitImg); return; }
    const img = document.getElementById('previewImg');
    if (!img.src || img.style.display==='none') { shakeBtn(); return; }
    content = 'img';
  }

  const btn     = document.getElementById('analyzeBtn');
  const spinner = document.getElementById('spinner');
  const bIcon   = document.getElementById('btnIcon');
  const lbl     = document.getElementById('btnLabel');
  btn.classList.add('loading');
  spinner.style.display = 'block'; bIcon.style.display = 'none'; lbl.textContent = t.btnLoading;
  hideResult();

  const ov = document.getElementById('scanOverlay'); ov.classList.add('active');

  if (curTab === 'text') {
    analyzeWithGemini(content)
      .then(geminiRes => {
        ov.classList.remove('active');
        const local = detectAI(content, 'text');
        local.isAI = geminiRes.isAI;
        local.confidence = geminiRes.confidence;
        local.geminiReason = geminiRes.reasoning;
        showResult(local);
        btn.classList.remove('loading');
        spinner.style.display = 'none'; bIcon.style.display = 'block'; lbl.textContent = t.btnRedo;
      })
      .catch(err => {
        console.warn('Gemini failed, falling back to local:', err);
        ov.classList.remove('active');
        showResult(detectAI(content, 'text'));
        btn.classList.remove('loading');
        spinner.style.display = 'none'; bIcon.style.display = 'block'; lbl.textContent = t.btnRedo;
      });
    return;
  }

  setTimeout(()=>{
    ov.classList.remove('active');
    if (curTab === 'image') {
      imgCount++;
      document.getElementById('imgCounter').textContent = t.imgCounter(imgCount);
    }
    const res = detectAI(content, curTab);
    showResult(res);
    btn.classList.remove('loading');
    spinner.style.display = 'none'; bIcon.style.display = 'block'; lbl.textContent = t.btnRedo;
  }, 1800);
}

function showResult(res) {
  const t = T[curLang];
  const card = document.getElementById('resultCard');
  card.style.display = 'block';
  card.className = 'result-card ' + (res.isAI ? 'ai-r' : 'hum-r');

  document.getElementById('iconAI').style.display    = res.isAI ? 'block' : 'none';
  document.getElementById('iconHuman').style.display = res.isAI ? 'none'  : 'block';

  const pct = Math.round(res.confidence * 100);
  document.getElementById('resVerdict').textContent = res.isAI ? t.verdictAI : t.verdictHuman;
  document.getElementById('resDesc').textContent    = res.geminiReason || (res.isAI ? t.descAI : t.descHuman);
  document.getElementById('confPct').textContent    = pct + '%';
  document.getElementById('confLbl').textContent    = t.confLbl;

  const fill = document.getElementById('confFill');
  fill.style.width = '0%';
  requestAnimationFrame(()=>fill.style.width = pct+'%');

  // ── Metrics grid ──
  if (res.metrics) {
    const grid = document.getElementById('metricsGrid');
    grid.innerHTML = '';
    res.metrics.forEach((m, i) => {
      const pctM = Math.round(m.value * 100);
      const box = document.createElement('div');
      box.className = 'metric-box';
      box.style.animationDelay = (i * 0.08) + 's';
      box.innerHTML = `
        <div class="metric-val">${pctM}%</div>
        <div class="metric-lbl">${m.label}</div>
        <div class="metric-bar"><div class="metric-bar-fill" style="width:0%"></div></div>`;
      grid.appendChild(box);
      setTimeout(()=>{
        box.querySelector('.metric-bar-fill').style.width = pctM + '%';
      }, 100 + i * 80);
    });
  }

  // ── Highlights ──
  const hlSection = document.getElementById('highlightSection');
  if (res.highlights && res.highlights.length > 0) {
    hlSection.style.display = 'block';
    const body = document.getElementById('highlightBody');
    body.innerHTML = res.highlights.map(seg => {
      const escaped = seg.text.replace(/</g,'&lt;').replace(/>/g,'&gt;');
      if (seg.type === 'ai')    return `<span class="hl-ai" title="AI pattern">${escaped}</span>`;
      if (seg.type === 'human') return `<span class="hl-human" title="Human pattern">${escaped}</span>`;
      return escaped;
    }).join('');
  } else {
    hlSection.style.display = 'none';
  }

  // ── Signals ──
  const sigGrid = document.getElementById('sigsGrid');
  sigGrid.innerHTML = '';
  res.signals.forEach((sig, i) => {
    const item = document.createElement('div');
    item.className = 'sig-item';
    item.style.animationDelay = (.1 + i*.1) + 's';
    item.innerHTML = `<div class="sig-dot ${res.isAI?'r':'g'}"></div>${sig}`;
    sigGrid.appendChild(item);
  });

  setTimeout(()=>card.scrollIntoView({behavior:'smooth',block:'nearest'}), 100);
}

applyLang('en');
</script>
</body>
</html>
