---
title: "COAE를 시작하며"
categories: ["AI Security", "[HTB] COAE"]
permalink: /2026/11/02/coae-start.html
excerpt: "현재의 보안이 어떤 식으로 이루어지는지 넓게 살펴보고자 하는 것이 목표입니다."
aside:
  toc: false
---

<div class="coae-start-note" markdown="1">

## 커다란 목표

요즘 AI가 들어오면서 보안의 트렌드가 크게 변했습니다. AI 서비스를 제공하거나 내부 업무에 도입하는 기업이 많아졌다는 것과, 공격과 방어에 AI 에이전트가 활용되기 시작했다는 게 가장 큰 변화죠. 저는 이 변화의 큰 그림을 보고 싶어서, 공방의 구조를 구축해보고 싶습니다. 커다란 기업 시스템을 하나 만들고 기업 시스템에서 이뤄지는 보안 방법론들과 악성코드 탐지 시스템들을 쌓아나가는 일과, 그 기업을 공격하는 에이전트 레드팀을 만들어보고 싶네요. 현재의 보안이 어떤 식으로 이루어지는지 넓게 살펴보고자 하는 것이 목표입니다. 우선 3개월 동안 전체 구조를 구축하고 공방을 실험해보는 것을 목표로 잡았습니다.

AI 트렌드가 발전할 수록 따라가야 하는 것이 무척 많지만, 저는 그 중에 평가 방식이 중요하다고 생각합니다. 그래서 앞서 만든 레드팀, 블루팀 환경 구축을 이용해서 평가 방법론을 설계하는 것도 목표입니다. 그 방법론을 토대로 기존의 agent들을 평가할 수도 있겠네요.

Redteam Agent와 Blueteam Agent가 서로를 기만하는 것에 대해서도 관심이 있습니다. 이 부분도 나중에 프로젝트로 해볼 생각입니다.

## 중간 목표

바로 서비스를 만들기에는 제가 체계적인 공부 커리큘럼을 좋아해서, 공부 로드맵을 완료한 후에 프로젝트를 본격적으로 시작하고 싶습니다. hackthebox의 cpts와 coae 자격증 공부 로드맵이 저렴하고 가볍게 잘 되어있어서 이걸 따라갈까 합니다. 각 챕터마다 블로그로 남겨서 정리하고 어떤 프로젝트로 나아갈 수 있을지도 계속 고민해보는 시간을 가질 예정입니다. COAE는 최대 2주 정도로 생각하고 있고, cpts는 빠르게 달리면서 프로젝트랑 병행할 듯 합니다.

## 산출물

공부 및 프로젝트를 진행하면서 쓰는 블로그, 돈과 시간이 된다면 COAE & CPTS 자격증, 기업 시스템(내부 AI 서비스 포함) 및 Blue Team & Red Team 프로세스 환경 구축, 평가 방법론 관련 논문 한 편

## 의의

생각의 확장을 위해 현대의 AI Service, Red Team, Blue Team에 대한 전반적인 지식 갖추기.

</div>

<style>
.article--post .article__content .coae-start-note {
  color: #555;
  font-size: 16px;
  line-height: 1.9;
}
.article--post .article__content .coae-start-note > h2 {
  margin: 72px 0 36px;
  padding: 0;
  border: 0;
  color: inherit;
  font-size: 23px;
  font-weight: 700;
  line-height: 1.5;
}
.article--post .article__content .coae-start-note > h2:first-child {
  margin-top: 24px;
}
.article--post .article__content .coae-start-note > p {
  margin: 0 0 28px;
}
@media (max-width: 767px) {
  .article--post .article__content .coae-start-note > h2 {
    margin: 56px 0 28px;
    font-size: 22px;
  }
}
</style>
