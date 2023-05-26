"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[2835],{731:function(e,n,t){t.r(n),t.d(n,{Head:function(){return o.F},default:function(){return u}});var l=t(7294),r=t(1151);function a(e){const n=Object.assign({h3:"h3",p:"p",pre:"pre",code:"code",ul:"ul",li:"li",h1:"h1",img:"img",a:"a"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h3,null,"배경"),"\n",l.createElement(n.p,null,"최근 관리자가 보는 admin을 개선하기 위해\n오픈 소스로 만든 admin을 checkout 받아서 진행했다.\n그 오픈 소스는 docker를 사용하는데 docker를 어떻게 쓰는건지 하나도 모르겠다.\ndocker에 관해서 조사하고 알게된 사실을 기록하려고 한다."),"\n",l.createElement(n.h3,null,"docker란?"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.\n")),"\n",l.createElement(n.p,null,"도커는 플렛폼의 세트다\n서비스로써\n가상화를 사용하는\n소프트웨어를 제공하기 위해\n컨테이너라고 불리는 패키지로"),"\n",l.createElement(n.h3,null,"Containers?"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"Instead of abstracting the hardware, containers abstract the OS. Each container technology features an explicit purpose, limiting the scope of the technology. Docker’s runs Linux, whereas Citrix’s XenApp runs Windows Server. Every container shares the exact same OS, reducing the overhead to the host system. Recall each VM runs its own copy of the OS, adding overhead for each instance.\n\nContainers exist to run a single application.\n")),"\n",l.createElement(n.h3,null,"docker로 뭐하지?"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"Use containers to Build, Share and Run your applications\n")),"\n",l.createElement(n.p,null,"containers를 사용한다\n당신의 applications를 build,share,run 하기에"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Software build"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"In software development, a build is the process of converting source code files into standalone software artifact(s) that can be run on a computer, or the result of doing so.\n")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Share"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"Run"),"\n"),"\n"),"\n",l.createElement(n.p,null,"필자는 도커에 대해 알지 못했고\n우선 오픈소스를 체크아웃 받아서 실행(run)시키는 것이 목표였다.\n데이터베이스에 연결하지 않은 상황에서도 실행되었다.\n코드를 작성하지 않은 필자에게도 쉽게 공유가 가능하다고 느꼈다."),"\n",l.createElement(n.h3,null,"docker에 db설정은 어떻게 하지?"),"\n",l.createElement(n.h3,null,"왜 docker 써야해? Why use Docker"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"why use Docker rather than VMware or Oracle’s VirtualBox?\n")),"\n",l.createElement(n.p,null,"아 docker가 VMare나 Oracle에 VirualBox랑 비슷한가?"),"\n",l.createElement(n.p,null,"쿠버네티스는 도커를 관리하는"),"\n",l.createElement(n.p,null,"virtual os 까지 가상화 에 대안이 컨테이너 ,같은 os 위에서 여러 컨테이너에서 사용하고 이 서비스가 도커,쿠버네티스는 도커를 관리하는"),"\n",l.createElement(n.p,null,"프로젝트마다 언어 버전 달라도 배포 관리가 줄어든다."),"\n",l.createElement(n.p,null,"도커배포방법\n1.이미지 만듬\n이미지는 도커내에서 받음 ( mysql 등 리소스는 도커가 있음 docker pull 있는지 확인 docker search 이미지)\n도커에서 실행될 수 있는 형태로 이미지로 변경"),"\n",l.createElement(n.p,null,"소스 => 이미지 만듬"),"\n",l.createElement(n.p,null,"이미지를 도커 run 한다"),"\n",l.createElement(n.p,null,"컨테이너를 띄움"),"\n",l.createElement(n.p,null,"AWS ElasticBeanstaclk  올린다 = 서버 1개"),"\n",l.createElement(n.p,null,"virtual os 까지 가상화 에 대안이 컨테이너 ,같은 os 위에서 여러 컨테이너에서 사용하고 이 서비스가 도커"),"\n",l.createElement(n.h1,null,"Window10 도커 설치"),"\n",l.createElement(n.h3,null,"1.가상화 기술인 Hyper-V를 활성화"),"\n",l.createElement(n.p,null,"(작업 관리자에서 가상화를 사용함으로 설정했는지 확인)\n키보드의 'Ctrl + Shift + Esc'를 누르면 작업 관리자"),"\n",l.createElement(n.img,{src:"./docker1.JPG",alt:"image.png"}),"\n",l.createElement(n.p,null,"제어판 > 프로그램 설치 및 제거 > Window 기능 켜기/끄기 클릭 > Hyper-V 체크 확인 후 리부팅"),"\n",l.createElement(n.img,{src:"/content/postsnt/posts/img/docker2.JPG",alt:"image.png"}),"\n",l.createElement(n.h1,null,"2. Docker 설치"),"\n",l.createElement(n.h3,null,l.createElement(n.a,{href:"https://hub.docker.com/editions/community/docker-ce-desktop-windows/"},"설치링크"),"를 클릭> Get Docker 버튼 클릭 >"),"\n",l.createElement(n.img,{src:"./docker3.JPG",alt:"image.png"}),"\n",l.createElement(n.p,null,"WSL은 윈도우에서 경량 가상화 기술을 사용해 리눅스를 구동할 수 있도록 도와주는 기능입니다. ",l.createElement(n.a,{href:"https://www.44bits.io/ko/post/wsl2-install-and-basic-usage"},"WSL2"),"는 WSL을 대폭 개선해 훨씬 더 뛰어난 성능과 통합된 환경을 이용할 수 있습니다"),"\n",l.createElement(n.p,null,"이 항목은 언제든지 설치 후에도 바꿀 수 있으니 그냥 넘어 간다."),"\n",l.createElement(n.p,null,">설치중>Close and restart 클릭 >재부팅 후"),"\n",l.createElement(n.img,{src:"./docker4.JPG",alt:"image.png"}),"\n",l.createElement(n.p,null,"본다면 링크가서 ",l.createElement(n.code,null,"x64 머신용 최신 WSL2 Linux 커널 업데이트 패키지"),"클릭\n",l.createElement(n.a,{href:"https://docs.microsoft.com/ko-kr/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package"},"https://docs.microsoft.com/ko-kr/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package")),"\n",l.createElement(n.h3,null,"3. Docker Sign in or Sign Up"),"\n",l.createElement(n.p,null,"free 로 가입함"),"\n",l.createElement(n.h3,null,"4. CMD에서 설치 확인 ",l.createElement(n.code,null,"docker -v")),"\n",l.createElement(n.img,{src:"./docker5.JPG",alt:"image.png"}))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(a,e)):a(e)},o=t(8804);function u(e){return l.createElement(o.Z,e,l.createElement(c,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-infra-2021-07-29-infra-docker-install-mdx-77fa5a0455fd3d5fd29f.js.map