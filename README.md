## Description

*Ports and Adapters* architecture를 기반으로 하는 예제 프로젝트입니다.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
$ yarn start
```

## Package structure description

<img src="https://engineering.linecorp.com/wp-content/uploads/2020/11/port3.png">

헥사고날 아키텍처의 추상적인 개념을 그림으로 도식화한 모습입니다. 위 그림의 경계를 프로젝트 패키지 구조로 변경하면 다음과 같습니다.

### Package structure

- project
    - domain (common)
    - aggregate
        - adapter (infrastructure)
            - in
            - out
        - application (application core)
            - port
                - in
                - out
            - service
        - domain (application core)

### application과 domain은 뭔가요?

위 패키지 구조에서 `domain` 레이어와 `application` 레이어를 하나로 묶어 `애플리케이션 코어`로 지칭합니다. 해당 영역은 비즈니스 로직과 도메인 객체가 포함되는 부분으로 가장 엄격하게 보호되어야
하는 영역입니다.

애플리케이션 코어에서는 의존성 탈피를 위한 인바운드, 아웃바운드로 이루어진 추상화가 존재합니다. 이는 `DIP`를 적용 해 차후 구현체가 변경될 때 저수준의 레이어인 `Adapter` 에서만 변경이 이루어지도록 하기
위함입니다.

### in, out은 뭔가요?

인바운드, 아웃바웃드의 개념입니다.

위 그림에서 `RPC`, `HTTP API` 등은 **인바운드 어댑터**입니다. 이는 주도하는 어댑터로 애플리케이션 코어에 있는 **인바운드 포트**를 호출합니다. 위 패키지 구조에서 인바운드
어댑터는 `adapter/in`, 인바운드 포트는 `apllication/port/in`에 해당합니다.

`MYSQL`등은 **아웃바운드 어댑터**입니다. 이는 주도되는 어댑터로 애플리케이션 코어로부터 호출되는 어댑터입니다. 위 패키지 구조에서 `adapter/out`에 해당합니다.

여기서 중요한 점은 애플리케이션 코어가 각 어댑터를 `직접 호출`하지 않고, 항상 추상화되어 있는 인터페이스(port)를 호출한다는 점입니다.

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbfW1EI%2Fbtry8i0JC1E%2FG9SyfZjyhkLxlIHFEEBJqk%2Fimg.png">

위 그림을 보시면 이해가 쉽습니다. 인바운드 어댑터가 인바운드 포트인 유스케이스를 호출하고, 해당 유스케이스를 서비스가 구현합니다. 비즈니스 로직 동작 중 외부 모듈이 필요할 경우 서비스는 아웃바운드 포트를
호출하고, 외부 모듈인 어댑터는 아웃바운드 포트를 구현합니다.

추상화를 바라보고 있음에도 구현체가 실행되는 부분은 `nest`의 도움을 받습니다.

### UseCase 가 왜 바깥으로 노출되어 있나요?

레이어드 아키텍처는 기본적으로 유스케이스를 하나의 서비스에 숨깁니다. 특정 Service 클래스안에 수 많은 유스케이스를 포함하고 있죠. 이렇게 되면 서비스가 방대해 졌을 때 유스케이스를 찾기 힘들게하여, 유지보수를
어렵게합니다. 또한 다른 개발자들과의 동시 작업이 어려워진다는 문제도 있습니다.

하여 헥사고날 아키텍처의 특징 중 하나인 '소리치는 아키텍처'를 도입하였습니다. 각 유스케이스를 하나의 파일로 만들어 외부로 노출 시켰고, 강제는 아니지만 유스케이스 별로 하나의 메서드를 갖게되어 SRP를
지켰습니다.

### 애그리거트에 속해있는 domain은 뭔가요?

여러 도메인 객체에 포함되는 공용 도메인 객체입니다.

### graphql 스키마는 왜 아웃바운드 어댑터에 있나요?

graphql도 차후 `gRPC`, `REST API` 등 으로 변경될 수 있는 저수준의 모듈이라고 판단했습니다.
(확실한건 애플리케이션 코어에 있을법 한 친구는 아닙니다.)

따라서, 아웃바운드 어댑터에 위치시켰습니다.

## License

Nest is [MIT licensed](LICENSE).

<p align="center">
  <a href="http://nestjs.com/" target="blank" style="display:inline-flex; align-items: center;">
    Powered by &nbsp;&nbsp; <img src="https://nestjs.com/img/logo_text.svg" width="120" alt="Nest Logo" />
  </a>
</p>
