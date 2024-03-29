import{_ as l,c as i,o as t,e}from"./app.58766e8b.js";const p="/assets/image-20230324101147377.0c7c495a.png",a="/assets/image-20230324100113702.792d54dc.png",T=JSON.parse('{"title":"http","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.HTTP over TCP/IP","slug":"_1-http-over-tcp-ip","link":"#_1-http-over-tcp-ip","children":[{"level":3,"title":"网络模型","slug":"网络模型","link":"#网络模型","children":[]}]},{"level":2,"title":"2.http的各个版本","slug":"_2-http的各个版本","link":"#_2-http的各个版本","children":[{"level":3,"title":"1.HTTP/0.9","slug":"_1-http-0-9","link":"#_1-http-0-9","children":[]},{"level":3,"title":"2.HTTP/1.0","slug":"_2-http-1-0","link":"#_2-http-1-0","children":[]},{"level":3,"title":"3.http/1.1","slug":"_3-http-1-1","link":"#_3-http-1-1","children":[]},{"level":3,"title":"4.http/2.0","slug":"_4-http-2-0","link":"#_4-http-2-0","children":[]},{"level":3,"title":"5.http/3.0","slug":"_5-http-3-0","link":"#_5-http-3-0","children":[]}]}],"relativePath":"网络/http.md"}'),n={name:"网络/http.md"},o=e(`<h1 id="http" tabindex="-1">http <a class="header-anchor" href="#http" aria-hidden="true">#</a></h1><h2 id="_1-http-over-tcp-ip" tabindex="-1">1.HTTP over TCP/IP <a class="header-anchor" href="#_1-http-over-tcp-ip" aria-hidden="true">#</a></h2><h3 id="网络模型" tabindex="-1">网络模型 <a class="header-anchor" href="#网络模型" aria-hidden="true">#</a></h3><ul><li><h4 id="五层网络协议-物链网传应" tabindex="-1">五层网络协议（物链网传应） <a class="header-anchor" href="#五层网络协议-物链网传应" aria-hidden="true">#</a></h4><blockquote><ul><li><p>application layer应用层 HTTP/TPC/SSH/SMTP/Telnet message(报文)</p><ul><li>百花齐放 DNS都处于该层</li></ul></li><li><p>transport layer传输层 TCP/UDP segment(段)</p><ul><li>保证数据在标记的两个IP之间传输</li></ul></li><li><p>internet layer 网际层 IP package(包)</p><ul><li>IP协议处于这个层，将MAC地址换成IP地址，形成一个巨大的IP网络</li></ul></li><li><p>linked layer 链路层 MAC frame(帧)</p><ul><li><pre><code>负责以太网、WiFi等原始数据的发送，用MAC地址来标记网络设备
</code></pre></li></ul></li><li><p>physical layer 物理层 电缆 光纤</p></li></ul></blockquote></li><li><h4 id="七层网络协议osi-物链网传会表应" tabindex="-1">七层网络协议OSI（物链网传会表应） <a class="header-anchor" href="#七层网络协议osi-物链网传会表应" aria-hidden="true">#</a></h4><blockquote><ul><li><p>application layer 应用层 HTTP</p><ul><li>七层负载均衡，就是指工作在应用层上，看到的是 HTTP 协议，解析 HTTP 报文里的 URI、主机名、资源类型等数据，再用适当的策略转发给后端服务器</li></ul></li><li><p>presentation layer 表示层 将数据展示合法可理解的语义与语法</p></li><li><p>session layer 会话层 保持回话与同步</p></li><li><p>transport layer 传输层 TCP/UDP</p><ul><li>四层负载均衡，基于 TCP/IP 协议的特性，例如 IP 地址、端口号等实现对后端服务器的负载均衡。</li></ul></li><li><p>internet layer 网际层 IP协议</p><ul><li>三层路由，工作在网际层的设备（路由器）利用ip地址和port，根据路由表选择最佳路径来转发包</li></ul></li><li><p>data linked layer 链路层 MAC</p><ul><li>二层转发，工作在连接层的设备（交换机）只认识MAC地址，所以建立MAC地址和端口的映射关系，来决定往哪个端口转发。</li></ul></li><li><p>physical layer 物理层 电缆 光纤</p></li></ul></blockquote></li></ul><blockquote><p>OSI是Open System Interconnection的缩写，意为开放式系统互联。国际标准化组织（ISO）制定了OSI模型，该模型定义了不同计算机互联的标准，是设计和描述计算机网络通信的基本框架。OSI模型把网络通信的工作分为7层，分别是物理层、数据链路层、网络层、传输层、会话层、表示层和应用层。 首先来看看OSI的七层模型:</p></blockquote><img src="`+p+'" alt="image-20230324101147377" style="zoom:50%;"><ul><li><strong>tcp/ip协议</strong></li></ul><img src="'+a+`" alt="image-20230324100113702" style="zoom:67%;"><h2 id="_2-http的各个版本" tabindex="-1">2.http的各个版本 <a class="header-anchor" href="#_2-http的各个版本" aria-hidden="true">#</a></h2><h3 id="_1-http-0-9" tabindex="-1">1.HTTP/0.9 <a class="header-anchor" href="#_1-http-0-9" aria-hidden="true">#</a></h3><ul><li><p><strong>超文本传输协议</strong></p><ul><li>主要传输文本信息</li></ul></li><li><p><strong>特点</strong></p><ul><li>1.只有请求行</li><li>2.服务器没有返回响应头信息</li><li>3.ASIIC码形式传输</li></ul></li></ul><h3 id="_2-http-1-0" tabindex="-1">2.HTTP/1.0 <a class="header-anchor" href="#_2-http-1-0" aria-hidden="true">#</a></h3><ul><li><p><strong>解决问题</strong></p><ul><li>实现多类型文件的下载，音视频，css,js图片等等</li></ul></li><li><p><strong>改进</strong></p><ul><li><p>增加请求头字段</p><div class="language-http"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">content-charset content-type content-encoding coentent-language</span></span>
<span class="line"></span></code></pre></div></li><li><p>增加响应行</p><blockquote><p>响应行状态码 200 201 301 302 304 400</p></blockquote></li><li><p>实现请求缓存机制，强缓存字段 <code>expire</code></p></li><li><p>识别服务器信息,用户代理字段,<code>proxy</code></p></li></ul></li><li><p><strong>问题</strong></p><ul><li><p>短连接,每个http请求都要建立一次tcp链接</p></li><li><p>队头阻塞</p></li><li><p>不支持虚拟主机,每个域名绑定了一个唯一的 IP 地址，因此一个服务器只能支持一个域名</p></li><li><p>动态内容支撑,content-length长度是固定的</p></li><li><p>安全方面不支持,cookie等安全</p></li></ul></li></ul><h3 id="_3-http-1-1" tabindex="-1">3.http/1.1 <a class="header-anchor" href="#_3-http-1-1" aria-hidden="true">#</a></h3><ul><li><p><strong>改进</strong></p><ul><li><p>长连接</p><blockquote><p>Connect:Keep-alive 默认是开启的；Connection: close来关闭</p></blockquote></li><li><p>加强了缓存处理</p><blockquote><p>增加了强缓存<code>cache-control</code>字段，协商缓存<code>etag，If-Unmodified-Since, If-Match, If-None-Match</code>等字段</p></blockquote></li><li><p>对头阻塞优化，管线化技术</p></li><li><p>曾加了范围请求,<code>Range</code>字段</p></li><li><p>增加了Host字段,虚拟主机</p></li><li><p>Chunk transfer 机制</p></li><li><p>增加了错误 status code</p></li></ul></li><li><p><strong>效率提升</strong></p><blockquote><p>览器为每个域名最多同时维护 6 个 TCP 持久连接</p><p>使用 CDN 的实现域名分片机制</p></blockquote></li><li><p><strong>问题</strong></p><ul><li>1.TCP 的慢启动</li><li>2.多个并发的tcp链接的宽带竞争</li><li>3.对头阻塞问题</li></ul></li></ul><h3 id="_4-http-2-0" tabindex="-1">4.http/2.0 <a class="header-anchor" href="#_4-http-2-0" aria-hidden="true">#</a></h3><ul><li><p><strong>协议栈</strong></p><blockquote><ul><li>HTTP</li><li>HPack /Stream</li><li>TLS 1.2+</li><li>TCP</li><li>IP</li><li>MAC</li></ul></blockquote></li><li><p><strong>特点</strong></p><ul><li><p>头部压缩</p><ul><li>HPack对头部字段进行压缩</li><li>没有了起始行，改用伪字段，:status</li><li>客户端与服务器都维护了一张静态表与动态表，发送与响应数据时只要发送或者响应key就行</li></ul></li><li><p>二进制帧形式传输</p><ul><li>headers frame + data frame</li></ul></li><li><p>虚拟流</p><ul><li>stream ID 客户端ID为奇数，服务器端为偶数</li><li>双向传输序列，</li><li>服务器能自己建流，向客户端推送消息</li><li>并发多个流,多路复用，解决了队头阻塞问题</li></ul></li><li><p>一个域名共用一个TCP链接</p></li></ul></li><li><p><strong>改进</strong></p><ul><li>多路复用</li><li>头部压缩</li><li>设置请求的优先级</li><li>服务器推送</li></ul></li><li><p><strong>问题</strong></p><ul><li>TCP还是会有对头阻塞问题</li></ul></li></ul><h3 id="_5-http-3-0" tabindex="-1">5.http/3.0 <a class="header-anchor" href="#_5-http-3-0" aria-hidden="true">#</a></h3><blockquote><p>QUIC 协议代替TCP协议，解决了TCP队头阻塞</p></blockquote>`,19),r=[o];function s(h,c,u,d,_,g){return t(),i("div",null,r)}const k=l(n,[["render",s]]);export{T as __pageData,k as default};
