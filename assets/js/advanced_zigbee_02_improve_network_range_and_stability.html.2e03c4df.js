"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[81678],{66742:(e,t,r)=>{r.r(t),r.d(t,{comp:()=>o,data:()=>n});var a=r(24691);const i={},o=(0,r(89260).A)(i,[["render",function(e,t){const r=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[16]||(t[16]=(0,a.Lk)("h1",{id:"improve-network-range-and-stability",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#improve-network-range-and-stability"},[(0,a.Lk)("span",null,"Improve network range and stability")])],-1)),t[17]||(t[17]=(0,a.Lk)("p",null,"In case you are experiencing an unstable or bad network range you can do the following things to improve your network.",-1)),t[18]||(t[18]=(0,a.Lk)("h2",{id:"adapter",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#adapter"},[(0,a.Lk)("span",null,"Adapter")])],-1)),(0,a.Lk)("p",null,[t[1]||(t[1]=(0,a.eW)("Use a ")),(0,a.bF)(r,{to:"/guide/adapters/"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("recommended")]))),_:1}),t[2]||(t[2]=(0,a.eW)(" adapter, especially the CC2530 and CC2531 are known to perform poorly."))]),t[19]||(t[19]=(0,a.Fv)('<h2 id="avoid-devices-from-awox" tabindex="-1"><a class="header-anchor" href="#avoid-devices-from-awox"><span>Avoid devices from AwoX</span></a></h2><p>It is known that AwoX devices cause network issues. In case you are having issues, remove them from your network. It <a href="https://github.com/Koenkk/zigbee2mqtt/discussions/18366" target="_blank" rel="noopener noreferrer">may help</a> to OTA update your device via the &quot;AwoX HomeControl&quot; app over Bluetooth.</p><h2 id="usb-based-adapter" tabindex="-1"><a class="header-anchor" href="#usb-based-adapter"><span>USB based adapter</span></a></h2><p>The range of these adapters can greatly be improved when connecting them with an USB extension cable instead of directly plugging it into the computer (e.g. Raspberry Pi). When plugged directly into the computer, the antenna suffers from interference of radio signals and electrical components of the computer. Also be sure not to position the adapter too close to any other radio transmitting devices (e.g. a Wi-Fi router) or an SSD.</p><p>A <strong>USB extension cable</strong> of 50 cm is already enough to reduce the interference. Preferably get one with shielding as this may give better results (<a href="https://www.reddit.com/r/homeassistant/comments/10ebkis/psareminder_about_zigbee_interference/" target="_blank" rel="noopener noreferrer">source</a>).</p><p><strong>Do not underestimate this!</strong> Placing your adapter close to an USB port can kill the radio signal entirely as demonstrated in <a href="https://www.unit3compliance.co.uk/2-4ghz-intra-system-or-self-platform-interference-demonstration/" target="_blank" rel="noopener noreferrer">this article</a>.</p><p>Additionally, it may help to plug the adapter to a USB 2 instead of USB 3 port.</p><h3 id="try-different-orientations-of-the-adapter" tabindex="-1"><a class="header-anchor" href="#try-different-orientations-of-the-adapter"><span>Try different orientations of the adapter</span></a></h3><p>RF connection between the adapter and other devices also depends on the way it is oriented in space. You might be having very poor <code>linkquality</code> reports and intermittent ping failures but once the adapter is rotated a little it all can change greatly without re-locating the coordinator far away. Try to experiment with positioning and orienting the adapter in space while monitoring the <code>linkquality</code> values reported. You might find it useful to buy a small rotating USB connector like this:</p><p><img src="https://i.imgur.com/AI41Oxz.png" alt="rotating USB connector"></p><h2 id="reduce-wi-fi-interference-by-changing-the-zigbee-channel" tabindex="-1"><a class="header-anchor" href="#reduce-wi-fi-interference-by-changing-the-zigbee-channel"><span>Reduce Wi-Fi interference by changing the Zigbee channel</span></a></h2>',11)),(0,a.Lk)("p",null,[(0,a.Lk)("strong",null,[t[4]||(t[4]=(0,a.eW)("Changing the Zigbee channel might require re-pairing some of your devices, read the ")),(0,a.bF)(r,{to:"/guide/configuration/zigbee-network.html#changing-the-zigbee-channel"},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.eW)("documentation for more info")]))),_:1})])]),t[20]||(t[20]=(0,a.Lk)("p",null,[(0,a.eW)("As Wi-Fi and Zigbee both operate on the same frequency space (2.4 GHz), they can interfere with each other. By using the correct Zigbee channel, interference with Wi-Fi can (partly) be avoided. A good article explaining this is "),(0,a.Lk)("a",{href:"https://www.metageek.com/training/resources/zigbee-wifi-coexistence/",target:"_blank",rel:"noopener noreferrer"},"Zigbee and Wi-Fi Coexistence"),(0,a.eW)(".")],-1)),(0,a.Lk)("p",null,[t[6]||(t[6]=(0,a.eW)("To change the Zigbee channel Zigbee2MQTT uses you have to set the ")),(0,a.bF)(r,{to:"/guide/configuration/zigbee-network.html"},{default:(0,a.k6)((()=>t[5]||(t[5]=[(0,a.Lk)("code",null,"channel",-1),(0,a.eW)(" in "),(0,a.Lk)("code",null,"configuration.yaml",-1)]))),_:1}),t[7]||(t[7]=(0,a.eW)("."))]),t[21]||(t[21]=(0,a.Fv)('<h2 id="interference-from-other-2-4-ghz-devices" tabindex="-1"><a class="header-anchor" href="#interference-from-other-2-4-ghz-devices"><span>Interference from other 2.4 GHz devices</span></a></h2><p>Any device using the open 2.4 GHz spectrum could interfere with Zigbee such as Bluetooth or gaming devices like Logitech “Unifying” or “Lightspeed” or Razer “Hyperspeed Wireless”.</p><p>This includes devices that you may not realize <em>are</em> 2.4 GHz. Check anything that is wireless including wireless audio transmitters such as:</p><ul><li><a href="https://www.crutchfield.com/S-kjc9jL5lfL6/p_136TRX/JL-Audio-JLINK-TRX-High-Fidelity-Audio-Transmitter-Receiver-Kit.html" target="_blank" rel="noopener noreferrer">JL Audio JL Link TRX</a></li><li><a href="https://www.svsound.com/products/soundpath-wireless-audio-adapter" target="_blank" rel="noopener noreferrer">SVS Soundpath (gen 1)</a></li></ul><p>Utility companies are known to use Zigbee with their &quot;smart meters&quot; but may not advertise them as Zigbee. Other devices that broadcast Zigbee, or modified versions of Zigbee are known to cause issues. For example If you are still using a Philips Hue Hub it is suggested to add the bulbs to your Zigbee2MQTT network or make sure they are on different channels.</p><h2 id="adding-routers-to-your-network" tabindex="-1"><a class="header-anchor" href="#adding-routers-to-your-network"><span>Adding routers to your network</span></a></h2><p>&quot;Zigbee is a low-power wireless mesh network standard targeted at battery-powered devices&quot; (see <a href="https://en.wikipedia.org/wiki/Zigbee" target="_blank" rel="noopener noreferrer">Wikipedia</a>). Yet, low transmission power can be the cause of an unstable or unreliable network:</p><p><img src="https://www.zigbee2mqtt.io/images/routing1.jpg" alt="The signal could be too weak for the message to reach its target."></p><p>Zigbee2MQTT enables the user to <a href="https://www.zigbee2mqtt.io/guide/configuration/adapter-settings.html" target="_blank" rel="noopener noreferrer">increase the transmission power</a> for some coordinator models. However, this simple measure might yield to a network with weird behavior, if messages to an end device reach their target, but responses (or messages) from that end device do not reliably reach the coordinator:</p><p><img src="https://www.zigbee2mqtt.io/images/routing2.jpg" alt="More transmission power on the sender side might not be sufficient for a complete message roundtrip."></p>',10)),(0,a.Lk)("p",null,[t[9]||(t[9]=(0,a.eW)("Introducing a router (")),(0,a.bF)(r,{to:"/advanced/zigbee/01_zigbee_network.html"},{default:(0,a.k6)((()=>t[8]||(t[8]=[(0,a.eW)("read more about this")]))),_:1}),t[10]||(t[10]=(0,a.eW)(") can improve the forward path as well as the return path:"))]),t[22]||(t[22]=(0,a.Fv)('<p><img src="https://www.zigbee2mqtt.io/images/routing3.jpg" alt="Routers can stabilize the complete message roundtrip."></p><p>You might choose a dedicated router (for example, a <a href="https://www.zigbee2mqtt.io/devices/ZBDongle-E.html" target="_blank" rel="noopener noreferrer">SONOFF ZBDongle-E based router</a>) or a mains-powered Zigbee device (for example, a <a href="https://www.zigbee2mqtt.io/devices/8719514301481.html#philips-8719514301481" target="_blank" rel="noopener noreferrer">Hue lamp</a>) to stabilize your network. Almost all AC powered devices will serve as a router (exceptions are most AC powered relays that do not require a neutral wire).</p><p>Please note that there are routers of mediocre quality that might not harmonize well with your network (for example, some versions of the <a href="https://www.zigbee2mqtt.io/devices/S26R2ZB.html" target="_blank" rel="noopener noreferrer">SONOFF Smart Plug S26R2ZB</a> are <a href="https://github.com/Koenkk/zigbee2mqtt/issues/10282" target="_blank" rel="noopener noreferrer">known to be limited</a>). This may yield in message routing errors. In case you have such devices in your network, it might help to add additional routers of better quality and bind your devices to these routers (re-pairing devices with “Permit join” restricted to the new/better router) to improve the overall network performance.</p><p>If you assume to have routing problems, try <a href="https://www.zigbee2mqtt.io/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request" target="_blank" rel="noopener noreferrer">sending an MQTT request to the bridge</a> to the topic <code>zigbee2mqtt/bridge/request/networkmap</code> to retrieve a map of your Zigbee network including routes.</p><p>For more technical details on Zigbee routing, see the <a href="https://software-dl.ti.com/simplelink/esd/plugins/simplelink_zigbee_sdk_plugin/1.60.01.09/exports/docs/zigbee_user_guide/html/zigbee/developing_zigbee_applications/z_stack_developers_guide/z-stack-overview.html#routing" target="_blank" rel="noopener noreferrer">&quot;5. Routing&quot; in the TI Z-Stack User Guide</a>, for example.</p><h2 id="hardware" tabindex="-1"><a class="header-anchor" href="#hardware"><span>Hardware</span></a></h2><p>Although Zigbee2MQTT does not require many resources, the hardware you are running Zigbee2MQTT on can impact the performance. This is especially true when using low-power hardware like the Raspberry Pi 3. Make sure that enough resources (CPU/memory) is free. For example, running Home Assistant + Zigbee2MQTT Home Assistant addon on the Raspberry Pi 3 may give bad performance.</p><h2 id="broadcasts" tabindex="-1"><a class="header-anchor" href="#broadcasts"><span>Broadcasts</span></a></h2><p>Zigbee traffic can be categorized as either <em>Unicast</em> or <em>Broadcast</em>:</p><ul><li><em>Unicast</em> is an addressed message, usually between a Zigbee device and the coordinator, possibly through some intermediate devices</li><li><em>Broadcast</em> is a special type of message that is designed to reach <strong>all</strong> devices in the network</li></ul><p>When a device receives a broadcast message for the first time, it will re-transmit it at least once. The device keeps track of broadcasts that have recently been re-transmitted to prevent repeating messages forever. For large networks, broadcasts can generate a lot of traffic, and it takes time for the message to propagate to all devices.</p><p>Zigbee can only sustain an average rate of 1 broadcast per second, and multiple broadcasts within a short timespan increases latency. For more information, <a href="https://www.silabs.com/documents/login/application-notes/an1138-zigbee-mesh-network-performance.pdf" target="_blank" rel="noopener noreferrer">see this application note by Silicon Labs</a>.</p>',12)),(0,a.Lk)("p",null,[t[13]||(t[13]=(0,a.eW)("Broadcasts are mostly used for network management tasks such as finding routes to devices, but also by ")),(0,a.bF)(r,{to:"/guide/usage/groups.html"},{default:(0,a.k6)((()=>t[11]||(t[11]=[(0,a.eW)("Zigbee Groups")]))),_:1}),t[14]||(t[14]=(0,a.eW)(" and ")),(0,a.bF)(r,{to:"/advanced/zigbee/01_zigbee_network.html"},{default:(0,a.k6)((()=>t[12]||(t[12]=[(0,a.eW)("Green Power devices")]))),_:1}),t[15]||(t[15]=(0,a.eW)(". It is generally recommended to use broadcasts sparingly."))])])}]]),n=JSON.parse('{"path":"/advanced/zigbee/02_improve_network_range_and_stability.html","title":"Improve network range and stability","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"Adapter","slug":"adapter","link":"#adapter","children":[]},{"level":2,"title":"Avoid devices from AwoX","slug":"avoid-devices-from-awox","link":"#avoid-devices-from-awox","children":[]},{"level":2,"title":"USB based adapter","slug":"usb-based-adapter","link":"#usb-based-adapter","children":[{"level":3,"title":"Try different orientations of the adapter","slug":"try-different-orientations-of-the-adapter","link":"#try-different-orientations-of-the-adapter","children":[]}]},{"level":2,"title":"Reduce Wi-Fi interference by changing the Zigbee channel","slug":"reduce-wi-fi-interference-by-changing-the-zigbee-channel","link":"#reduce-wi-fi-interference-by-changing-the-zigbee-channel","children":[]},{"level":2,"title":"Interference from other 2.4 GHz devices","slug":"interference-from-other-2-4-ghz-devices","link":"#interference-from-other-2-4-ghz-devices","children":[]},{"level":2,"title":"Adding routers to your network","slug":"adding-routers-to-your-network","link":"#adding-routers-to-your-network","children":[]},{"level":2,"title":"Hardware","slug":"hardware","link":"#hardware","children":[]},{"level":2,"title":"Broadcasts","slug":"broadcasts","link":"#broadcasts","children":[]}],"git":{"updatedTime":1729278659000},"filePathRelative":"advanced/zigbee/02_improve_network_range_and_stability.md"}')}}]);