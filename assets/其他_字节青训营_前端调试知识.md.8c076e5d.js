import{_ as l,c as e,o as i,d as o}from"./app.e94b66cf.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"PC端网页调试","slug":"pc端网页调试","link":"#pc端网页调试","children":[]},{"level":2,"title":"Elements","slug":"elements","link":"#elements","children":[]},{"level":2,"title":"Console","slug":"console","link":"#console","children":[]},{"level":2,"title":"Sources","slug":"sources","link":"#sources","children":[]},{"level":2,"title":"Performance","slug":"performance","link":"#performance","children":[]},{"level":2,"title":"Network","slug":"network","link":"#network","children":[]},{"level":2,"title":"Application","slug":"application","link":"#application","children":[]},{"level":2,"title":"移动端H5调试","slug":"移动端h5调试","link":"#移动端h5调试","children":[]},{"level":2,"title":"常用调试技巧","slug":"常用调试技巧","link":"#常用调试技巧","children":[]},{"level":2,"title":"扩展","slug":"扩展","link":"#扩展","children":[]}],"relativePath":"其他/字节青训营/前端调试知识.md"}'),a={name:"其他/字节青训营/前端调试知识.md"},c=o('<h2 id="pc端网页调试" tabindex="-1">PC端网页调试 <a class="header-anchor" href="#pc端网页调试" aria-hidden="true">#</a></h2><h2 id="elements" tabindex="-1">Elements <a class="header-anchor" href="#elements" aria-hidden="true">#</a></h2><ul><li>查看网站的全部元素内容</li><li>动态修改元素和样式 <ul><li><code>.cls</code>动态添加元素class</li></ul></li></ul><h2 id="console" tabindex="-1">Console <a class="header-anchor" href="#console" aria-hidden="true">#</a></h2><ul><li><code>console.log</code>：打印日志</li><li><code>console.warn</code>：打印警告</li><li><code>console.erro</code>r：打印错误</li><li><code>console.debug</code>：打印调试</li><li><code>console.info</code>：打印信息</li><li><code>console.table</code>：具象的展示JSON和数组数据</li><li><code>console.dir</code>：打印目录/树结构</li><li><code>使用占位符打印</code>：<code>%s %c %d %o</code></li></ul><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-hidden="true">#</a></h2><ul><li>页面资源文件目录树</li><li>代码预览</li><li>调试工具栏 <ul><li>设置断点 <ul><li>代码输入<code>debugger</code></li><li>代码预览窗口设置断点</li><li>异步请求断点</li><li><code>dom结点</code>设置断点</li></ul></li><li>scope：作用域列表（包含闭包）</li><li>call stack：调用栈</li></ul></li></ul><blockquote><p>压缩后的代码如何调试？</p><ul><li>生成<code>source map</code>文件 <ul><li>mapping字段存储了源文件和Source Map 的映射。 <ul><li>英文，表示源码及压缩代码的位置关联</li><li>逗号，分割一行代码中的内容</li><li>分号，代表换行。之所以没有分号，是因为压缩后的代码只有一行</li></ul></li></ul></li></ul></blockquote><h2 id="performance" tabindex="-1">Performance <a class="header-anchor" href="#performance" aria-hidden="true">#</a></h2><h2 id="network" tabindex="-1">Network <a class="header-anchor" href="#network" aria-hidden="true">#</a></h2><ul><li>控制面板 <ul><li>网速控制</li></ul></li><li>查看请求详情</li></ul><h2 id="application" tabindex="-1">Application <a class="header-anchor" href="#application" aria-hidden="true">#</a></h2><ul><li>清理缓存</li></ul><h2 id="移动端h5调试" tabindex="-1">移动端H5调试 <a class="header-anchor" href="#移动端h5调试" aria-hidden="true">#</a></h2><ul><li>真机调试</li><li>代理调试 <ul><li>Charles：适合查看、控制网络请求，分析数据</li><li>Fiddler：与Charles类似，适合windows</li><li>spy-debugger：远程调试手机页面，抓包</li><li>whistle：基于Node实现的跨平台Web调试代理工具</li></ul></li></ul><blockquote><p>使用技巧：</p><p>通过代理，调试远程的网站，将远程的文件代理成本地的文件，修复bug，再重新上线。</p></blockquote><h2 id="常用调试技巧" tabindex="-1">常用调试技巧 <a class="header-anchor" href="#常用调试技巧" aria-hidden="true">#</a></h2><ul><li>overrides：保存调试时的代码修改</li><li>利用代理解决开发阶段跨域问题</li><li>启用本地的source map <ul><li>与上面的代理文件同理，<code>source map</code>同样可以代理</li></ul></li><li>小黄鸭调试法</li></ul><h2 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-hidden="true">#</a></h2><ul><li>vscode调试</li><li>前端埋点方案</li></ul>',20),r=[c];function d(n,s,t,h,u,p){return i(),e("div",null,r)}const f=l(a,[["render",d]]);export{m as __pageData,f as default};
