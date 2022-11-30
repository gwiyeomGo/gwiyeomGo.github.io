"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[3655],{8195:function(n,e,r){r.r(e),r.d(e,{Head:function(){return i.F},default:function(){return o}});var t=r(7294),a=r(1151);function l(n){const e=Object.assign({h3:"h3",p:"p",code:"code",pre:"pre",a:"a"},(0,a.ah)(),n.components);return t.createElement(t.Fragment,null,t.createElement(e.h3,null,"Call by value"),"\n",t.createElement(e.p,null,"값 복사되어 값 보존된다\r\n복사가 되기 때문에 메모리량이 늘어난다"),"\n",t.createElement(e.h3,null,"Call by reference"),"\n",t.createElement(e.p,null,"복사하지 않고 직접 참조\r\n직접 참조를 해서 원래 값이 영향을 받음\r\nNo newline at end of file"),"\n",t.createElement(e.p,null,"메모리 주소를 표현하는 포인터\r\n",t.createElement(e.code,null,"&")," goes in front of a variable when you want to get that variable's memory address."),"\n",t.createElement(e.h3,null,"call by value 값에 의한 호출"),"\n",t.createElement(e.pre,null,t.createElement(e.code,null,'package main\r\n \r\nimport "fmt"\r\n \r\nfunc inc(i int) {\r\n    i = i + 1\r\n}\r\n \r\nfunc main() {\r\n    i := 10\r\n    inc(i)\r\n    fmt.Println(i)\r\n}\r\n\n')),"\n",t.createElement(e.p,null,"실행하면 10"),"\n",t.createElement(e.h3,null,"call by reference"),"\n",t.createElement(e.pre,null,t.createElement(e.code,null,'package main\r\n \r\nimport "fmt"\r\n \r\nfunc inc(i *int) {\r\n    *i = *i + 1\r\n}\r\n \r\nfunc main() {\r\n    i := 10\r\n    inc(&i)\r\n    fmt.Println(i)\r\n}\r\n\n')),"\n",t.createElement(e.p,null,"실행하면 11"),"\n",t.createElement(e.h3,null,"포인터 리시버"),"\n",t.createElement(e.pre,null,t.createElement(e.code,null,"func (w *Wallet) DepositWithValueReceiver(amount int) {\r\n    w.balance += amount\r\n}\r\n\r\n// Production add: 0xc000016378, value: 0\r\n// Test add: 0xc000016378, value: 10\r\nstruct 타입만! 포인터 리시버가 자동 역참조해준다.\r\n\n")),"\n",t.createElement(e.p,null,t.createElement(e.a,{href:"https://thebook.io/006806/ch02/04/02/"},"https://thebook.io/006806/ch02/04/02/"),"\r\n",t.createElement(e.a,{href:"https://programmers.co.kr/learn/courses/13"},"https://programmers.co.kr/learn/courses/13")),"\n",t.createElement(e.p,null,t.createElement(e.a,{href:"https://ponyozzang.tistory.com/162"},"https://ponyozzang.tistory.com/162"),"\r\n",t.createElement(e.a,{href:"https://www.npmjs.com/package/react-router-ga"},"https://www.npmjs.com/package/react-router-ga")),"\n",t.createElement(e.p,null,"예시"),"\n",t.createElement(e.pre,null,t.createElement(e.code,null,'package example\r\n\r\ntype Person struct {\r\n    Age  uint\r\n    Name string\r\n    BirthDay string\r\n}\r\n\r\nfunc (p *Person) ChangeAge (newAge uint) {\r\n    p.Age = newAge\r\n    /*if p.Age != nil {\r\n    }*/\r\n}\r\n\r\nfunc (p *Person) SetBirthDay(birthday *BirthDay) {\r\n    p.BirthDay = birthday.Day\r\n    birthday.Year = "2002"\r\n}\r\n\r\ntype BirthDay struct {\r\n    Year string\r\n    Month string\r\n    Day string\r\n}\r\n\r\n\n')),"\n",t.createElement(e.pre,null,t.createElement(e.code,null,'package example\r\n\r\nimport (\r\n    "github.com/stretchr/testify/assert"\r\n    "testing"\r\n)\r\n\r\nfunc TestPerson_ChangeAge(t *testing.T) {\r\n    //given\r\n    person := Person{\r\n        Age:  29,\r\n        Name: "철수",\r\n    }\r\n\r\n    //when\r\n    person.ChangeAge(2)\r\n\r\n    //then\r\n    actual := person.Age\r\n    expected := uint(2)\r\n\r\n    assert.Equal(t, expected, actual)\r\n}\r\n\r\nfunc TestPerson_SetBirthDay(t *testing.T) {\r\n    //given\r\n    person := Person{\r\n        Age:  29,\r\n        Name: "철수",\r\n    }\r\n    /*\r\n    person := Person{\r\n        Age:  29,\r\n        Name: "바보",\r\n    }*/\r\n    //2개의  인스턴스 생성=> 메모리2개\r\n    //when\r\n    birthDay := BirthDay{\r\n        Year:  "1998",\r\n        Month: "06",\r\n        Day:   "04",\r\n    }\r\n\r\n    person.SetBirthDay(&birthDay)\r\n\r\n    //then\r\n    actual := person.BirthDay\r\n    expected := "04"\r\n\r\n    assert.Equal(t, expected, actual)\r\n    assert.Equal(t, birthDay.Year, "2002")\r\n}\r\n\n')))}var c=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?t.createElement(e,n,t.createElement(l,n)):l(n)},i=r(8804);function o(n){return t.createElement(i.Z,n,t.createElement(c,n))}i.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-server-golang-2021-08-22-go-function-call-mdx-04ba46062dbe782a9734.js.map