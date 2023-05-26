"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[3387],{8607:function(e,n,t){t.r(n),t.d(n,{Head:function(){return s.F},default:function(){return o}});var l=t(7294),a=t(1151);function c(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",a:"a",ol:"ol",li:"li",ul:"ul"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h1,null,"aws sqs"),"\n",l.createElement(n.h2,null,"배경"),"\n",l.createElement(n.p,null,"기부가 완료되었지만 카카오알림톡 메세지 전송실패로 전체가 rollback 되었다]()"),"\n",l.createElement(n.h2,null,"조치"),"\n",l.createElement(n.p,null,"카카오 알림톡 전송 없체와 강하게 결합되어 있으니 느슨하게 분리한다"),"\n",l.createElement(n.p,null,"1.알림톡에 발생시 queue 에 메세지를 쌓아은것을 ",l.createElement(n.code,null,"알림톡전송서비스")," 이 조회해온다\n2.",l.createElement(n.code,null,"알림톡전송서비스"),"에서 카카오알림톡과 통신이 실패했을 때 queue 에서 다시 호출해서 재발송\n3.",l.createElement(n.code,null,"알림톡전송서비스"),"에서 카카오알림톡과 통신해서 회원에게 알림톡 발송요청"),"\n",l.createElement(n.p,null,"적용기술\nsqs vs sns"),"\n",l.createElement(n.h1,null,"sqs"),"\n",l.createElement(n.p,null,"http 로 메세지 시스템 대기열에 추가\n",l.createElement(n.code,null,"https://sqs.us-east-2.amazonaws.com/{aws 계정번호}/{메세지 대기열 이름}")),"\n",l.createElement(n.h3,null,"sqs 관련 정보"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"https://docs.aws.amazon.com/ko_kr/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-making-api-requests.html\nhttps://docs.aws.amazon.com/ko_kr/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html#queue-name-url\nhttps://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html\n[SNS vs SQS](https://seohyun0120.tistory.com/entry/AWS-SNS-vs-SQS-%EC%B0%A8%EC%9D%B4%EC%A0%90)\nhttps://velog.io/@zionedoha/SES-SQS-SNS-%EC%B0%A8%EC%9D%B4\nhttps://madosa79.tistory.com/4\n")),"\n",l.createElement(n.h1,null,"aws 문서를 읽으면서 계속 등장하는 용어"),"\n",l.createElement(n.p,null,"EndPoint :  API가 서버에서 리소스에 접근할 수 있도록 가능하게 하는 URL\n",l.createElement(n.a,{href:"https://blog.naver.com/PostView.naver?blogId=ghdalswl77&logNo=222401162545&parentCategoryNo=&categoryNo=90&viewDate=&isShowPopularPosts=true&from=search"},"출처"),"\n",l.createElement(n.code,null,"API Gateway : https://docs.aws.amazon.com/ko_kr/apigateway/latest/developerguide/welcome.html")),"\n",l.createElement(n.h1,null,"REST API에 대한 IAM 인증"),"\n",l.createElement(n.p,null,"AWS에는 두 가지 유형의 사용자\n",l.createElement(n.code,null,"계정 소유자(루트 사용자)이거나"),"\nAWS Identity and Access Management(IAM) 사용자\n1-1 token 을 획득하기 위해서 IAM 계정을 만들고 임시 자격증명이 필요해 보임 (추측)\n",l.createElement(n.a,{href:"https://inpa.tistory.com/entry/AWS-%F0%9F%93%9A-%EC%9E%A5%EA%B8%B0-%EC%9E%90%EA%B2%A9-%EC%A6%9D%EB%AA%85-%EC%9E%84%EC%8B%9C-%EC%9E%90%EA%B2%A9-%EC%A6%9D%EB%AA%85-Access-Key-Secret-Access-Key#AWS_%EC%9E%90%EA%B2%A9_%EC%A6%9D%EB%AA%85"},"https://inpa.tistory.com/entry/AWS-%F0%9F%93%9A-%EC%9E%A5%EA%B8%B0-%EC%9E%90%EA%B2%A9-%EC%A6%9D%EB%AA%85-%EC%9E%84%EC%8B%9C-%EC%9E%90%EA%B2%A9-%EC%A6%9D%EB%AA%85-Access-Key-Secret-Access-Key#AWS_%EC%9E%90%EA%B2%A9_%EC%A6%9D%EB%AA%85")),"\n",l.createElement(n.p,null,"목표\nSQS 에 API 를 호출해서 데이터를 등록한다"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"post API 를 호출","\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"authorization 을 생성해서 HTTP Authorization헤더에 추가"),"\n",l.createElement(n.li,null,"http 로 API 호출 postman"),"\n"),"\n"),"\n"),"\n",l.createElement(n.p,null,"postman 에서 테스트를 진행했을 때"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"https://sqs.eu-west-2.amazonaws.com/123456789012\n?Action=SendMessage\n&MessageBody=Your+Message+Text\n&Expires=2020-10-15T12%3A00%3A00Z\n&Version=2012-11-05\n&AUTHPARAMS\n")),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Content-Type 은 application/x-www-form-urlencoded"),"\n",l.createElement(n.li,null,"AUTHPARAMS ?"),"\n"),"\n",l.createElement(n.h1,null,"20220907"),"\n",l.createElement(n.p,null,"aws 의 sqs 를 사용해서 요청을 보내고 싶었다."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"sqs 생성 :메세지 대기열 서비스\n*",l.createElement(n.code,null," https://ap-northeast-2.console.aws.amazon.com/sqs/v2/home?region=ap-northeast-2#/")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"대기열 생성\n*FLFO\n메시지 그룹 ID가 동일한 메시지를 FIFO 대기열에 전송하는 경우, Amazon SQS 도착하는 순서대로 메시지를 저장한 후 처리합니다","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.code,null,"https://docs.aws.amazon.com/ko_kr/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues-understanding-logic.html")),"\n",l.createElement(n.li,null,"생성자는 고유한 메시지 그룹 ID를 사용하여 모든 메시지를 전송\n*이름 MessageQueue.fifo"),"\n",l.createElement(n.li,null,"메서드 기본","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.code,null,"지정된 AWS 계정, IAM 사용자 및 역할만"),"\n*대기열생성"),"\n"),"\n"),"\n"),"\n"),"\n"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"용어정리"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.code,null,"regin :aws 는 지역별로 리소스를 제공,한국은 ap-northeast-2")),"\n",l.createElement(n.li,null,"assume-role"),"\n",l.createElement(n.li,null,"ARN"),"\n"),"\n"),"\n"),"\n",l.createElement(n.h3),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://devocean.sk.com/blog/techBoardDetail.do?ID=163290"},"https://devocean.sk.com/blog/techBoardDetail.do?ID=163290")))}var r=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(c,e)):c(e)},s=t(8804);function o(e){return l.createElement(s.Z,e,l.createElement(r,e))}s.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-infra-aws-2022-09-06-aws-sqs-mdx-6241cc2b56ffddf31bed.js.map