"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[8239],{6826:function(e,n,t){t.r(n),t.d(n,{Head:function(){return o.F},default:function(){return p}});var l=t(7294),r=t(1151);function c(e){const n=Object.assign({h1:"h1",pre:"pre",code:"code",p:"p",del:"del",ol:"ol",li:"li",a:"a"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h1,null,"grpc 가 뭐죠? Remote Procedure Call (RPC) framework"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"gRPC is a modern open source high performance Remote Procedure Call (RPC) framework that can run in any environment\r\nhttps://grpc.io/\n")),"\n",l.createElement(n.h1,null,"grpc 특징"),"\n",l.createElement(n.p,null,"원격 프로시저 호출\r\n마이크로서비스\r\n=> 구글에서 rpc 를 잘 쓸 수 있도록 한 것\r\nhttp 가 너무 느려서쓴다\r\nremote 프로시저 콜\r\n서로 인터페이스 규약을 정해놓고\r\n어떤 것이 자신을 불렀는지 남길 수 있음=> grpc 사용"),"\n",l.createElement(n.h1,null,"grpc 와 http API 를 비교"),"\n",l.createElement(n.p,null,"http 프로토콜\r\nrest  api 는"),"\n",l.createElement(n.p,null,"grpc 가 http 2 를써서 1.1 보다 좋아진 점은\r\ngrpc 가 양방향통신이 가능\r\ngrpc 는 byte 기반"),"\n",l.createElement(n.p,null,"postman 의 grpc 요청 기능\r\ngo 버전도 올리자"),"\n",l.createElement(n.p,null,"go 로 원격 메서드 실행을 원한다면 특정 언어에 얽매이지 않도록\r\ngrpc 와 같은 표준 프로토콜을 사용"),"\n",l.createElement(n.p,null,"rest full 하게 쓰고 있는데..."),"\n",l.createElement(n.p,null,"마이크로 서비스간에 통신 퍼포먼스를 생각하면\r\nrpc remote prosiger call\r\n을 쓰다가"),"\n",l.createElement(n.p,null,"http"),"\n",l.createElement(n.h1,null,"tls 프로토콜"),"\n",l.createElement(n.p,null,"protocal 규약"),"\n",l.createElement(n.p,null,"network layor\r\nosi 7 계층"),"\n",l.createElement(n.p,null,"tls 프로토콜\r\ngrpc가 tls 로 통신한다\r\n그래서 눈으로 보이지 않음\r\ntls 방식으로 변환해서 간다\r\ngrpc 저수준의 방식\r\n성능이 보장된 형태"),"\n",l.createElement(n.p,null,"json대신 protocol buffers (Protobuf)\r\nhttp 2 를 쓴다\r\nssl security => tls 기반에서 보안"),"\n",l.createElement(n.p,null,"비동기로 작동?"),"\n",l.createElement(n.p,null,"unary\r\n=> 단방향으로"),"\n",l.createElement(n.p,null,"serverStreaming"),"\n",l.createElement(n.p,null,"여러번 스트리밍으로 보낸다"),"\n",l.createElement(n.p,null,"client 스트리밍"),"\n",l.createElement(n.p,null,"bi-directional Streaming"),"\n",l.createElement(n.p,null,"스트림으로 보내면 스트림으로 받음"),"\n",l.createElement(n.p,null,"protocal buffers"),"\n",l.createElement(n.p,null,"의 장점은 서로 다른 언어끼리 grpc 로 통신하면서 사용할 수 있다"),"\n",l.createElement(n.p,null,"언어 독립적이고 확장성있다"),"\n",l.createElement(n.p,null,"프로토컬퍼퍼의 Message,Service  두가지를 규약해 놓으면 통신할 수 있다"),"\n",l.createElement(n.h1,null,"왜? 쓸까요?"),"\n",l.createElement(n.p,null,"마이크로 서비스 connection\r\n스트리밍할 수 있음\r\n멀티 랭기지 할 수 있다"),"\n",l.createElement(n.p,null,"front 에서 동영상을 주고받을 때 realtime streaming 할 수 있다\r\n",l.createElement(n.code,null,"go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest"),"\r\n",l.createElement(n.code,null,"go install github.com/golang/protobuf/protoc-gen-go@latest"),"\r\n깔고 프로토 버프를 깔아보자"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"go install google.golang.org/protobuf/cmd/protoc-gen-go")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative ./v0/gwiyeomgo/user.proto")),"\n",l.createElement(n.h1,null,"20221216"),"\n",l.createElement(n.p,null,".protoBuf"),"\n",l.createElement(n.p,null,"언어와 상관없이 쓸 수 있는 정의 서\r\ndata 를 message 로 정의\r\n네이밍은 카멜케이스\r\n필드는 스네이크케리스로 쓴다\r\n필드 넘버를 추가 (가능하면 바꾸지 않는다)"),"\n",l.createElement(n.p,null,"정보를 바이트로 바낼때\r\n1",l.createElement(n.del,null,"15 는 1바이트 이고\r\n16")," 이후는 2바이트로 왠만해서 1~15 번호를 써라"),"\n",l.createElement(n.p,null,"프로토3 최신 버전 사용\r\n기본은 프로토2로 사용시 꼭 3 로 쓰기"),"\n",l.createElement(n.p,null,"repeated 를 쓰고 pack-ture\r\n를 써서 배열을 보냏 수 있다"),"\n",l.createElement(n.p,null,"grpc 는 relase 를 해야함\r\nclientService 만들어서"),"\n",l.createElement(n.p,null,"get 이름\r\ngetList"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"protobuf 파일 만들기 (정의서 만듬)"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"protoc로 컴파일 (언어별로 컴파일해서 go에서 쓸 수 있도록 만듬)"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"grpc 로 통신할 수 있도록 서버와 클라이언트 만들어서 통신을 했다."),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"postman 으로 테스트 하기"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"http 로 통신을 할 수 있도록 게이트 웨이를 넣음 (http 통신을 받은 후 => 게이트 웨이 => grpc )"),"\n"),"\n"),"\n",l.createElement(n.p,null,"유너리?\r\n보내면 받는 http 1.0"),"\n",l.createElement(n.p,null,"스트림으로 양쪽 으로 통신하는 것도 가능.."),"\n",l.createElement(n.p,null,"6.grpc 미들웨어를 넣을 수 있다"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://devjin-blog.com/golang-grpc-server-4/"},"https://devjin-blog.com/golang-grpc-server-4/"),"\r\napi 콜할 (request) 때 middleware 에서 grpc"),"\n",l.createElement(n.h1,null,"출처 모음"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://chacha95.github.io/2020-06-15-gRPC1/"},"https://chacha95.github.io/2020-06-15-gRPC1/"),"\r\n",l.createElement(n.a,{href:"https://devjin-blog.com/golang-grpc-server-1/"},"https://devjin-blog.com/golang-grpc-server-1/"),"\r\n",l.createElement(n.a,{href:"https://grpc.io/docs/protoc-installation/"},"https://grpc.io/docs/protoc-installation/"),"\r\n",l.createElement(n.a,{href:"https://medium.com/naver-cloud-platform/nbp-%EA%B8%B0%EC%88%A0-%EA%B2%BD%ED%97%98-%EC%8B%9C%EB%8C%80%EC%9D%98-%ED%9D%90%EB%A6%84-grpc-%EA%B9%8A%EA%B2%8C-%ED%8C%8C%EA%B3%A0%EB%93%A4%EA%B8%B0-1-39e97cb3460"},"https://medium.com/naver-cloud-platform/nbp-%EA%B8%B0%EC%88%A0-%EA%B2%BD%ED%97%98-%EC%8B%9C%EB%8C%80%EC%9D%98-%ED%9D%90%EB%A6%84-grpc-%EA%B9%8A%EA%B2%8C-%ED%8C%8C%EA%B3%A0%EB%93%A4%EA%B8%B0-1-39e97cb3460")))}var a=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(c,e)):c(e)},o=t(8804);function p(e){return l.createElement(o.Z,e,l.createElement(a,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-server-golang-2022-11-02-go-grpc-framework-mdx-13ec10c534c9da7371cb.js.map