export default function About() {
  const H2 = ({ ...props }) => (
    <h2
      className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
      {...props}
    />
  );
  const P = ({ ...props }) => (
    <p
      className="leading-7 [&:not(:first-child)]:mt-6 [&(:last-child)]:mb-6"
      {...props}
    />
  );

  const InlineCode = ({ ...props }) => (
    <code
      className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
      {...props}
    ></code>
  );

  const Blockquote = ({ ...props }) => (
    <blockquote className="my-6 border-l-2 pl-6 italic" {...props}></blockquote>
  );

  return (
    <section className="pb-4">
      <h1 className="my-4 text-5xl font-bold tracking-tight">About</h1>
      <article className="my-6 prose lg:prose-xl">
        <H2>코드 재사용성</H2>
        <P>
          프론트엔드 개발을 하다보면 매번 비슷한 UI 컴포넌트를 만들게 됩니다.
          모달이나 드롭다운, 아코디언 같은 컴포넌트가 그렇습니다. 새로 만들기엔
          시간이 아깝고 라이브러리를 쓰기엔 CSS 커스터마이징이 어려웠습니다.
        </P>
        <P>
          특히 개인 프로젝트는 속도가 중요한데 반복되는 개발을 하다보면 텐션이
          떨어지기 쉽습니다. 포트폴리오나 기술 과제 또는 개인 프로젝트를 시작할
          때 잘 만들어둔 프로젝트가 있다면 많은 시간을 절약할 수 있습니다. 특히
          빠르게 앱을 런칭해야 되는 상황에서 더 중요하게 느껴졌습니다.
        </P>
        <P>
          그렇다고 <InlineCode>Bootstrap</InlineCode> 같은 라이브러리를 쓰기엔
          커스터마이징이 어려워 쉽게 선택하기 어려웠습니다. 실무 환경에서 쓰기엔
          커스터마이징이 불편한 점이 쉽게 도입하기 어려웠습니다.
        </P>
        <H2>Radix UI + shadcn/ui</H2>
        <P>
          그러던 중 <InlineCode>Radix UI</InlineCode>를 알게 됐습니다. 스타일이
          아예 없는 컴포넌트를 제공합니다. 그만큼 높은 CSS 자유도를 제공합니다.
          <InlineCode>Radix UI</InlineCode> 문서는 이렇게 소개하고 있습니다.
        </P>
        <Blockquote>
          <InlineCode>Radix Primitives</InlineCode>는 접근성, 사용자 정의 및
          개발자 경험에 중점을 둔 하위 수준 UI 구성 요소 라이브러리입니다.
          이러한 구성 요소를 디자인 시스템의 기본 레이어로 사용하거나 점진적으로
          채택할 수 있습니다.
          <br />
          우리의 목표는 커뮤니티가 접근 가능한 디자인 시스템을 구축하는 데
          사용할 수 있는 자금이 넉넉한 오픈 소스 구성 요소 라이브러리를 만드는
          것입니다.
        </Blockquote>
        <P>
          하지만 개인 프로젝트에 지나치게 자유로운 CSS 커스터마이징은
          부담스러웠습니다. 이어서 <InlineCode>Shadcn UI</InlineCode>를 알게
          되었습니다. <InlineCode>Shadcn UI</InlineCode>는
          <InlineCode>Radix UI</InlineCode>를 기반으로 만들어진 UI 라이브러리로
          <InlineCode>Radix UI</InlineCode> 기반으로{" "}
          <InlineCode>TailwindCSS</InlineCode>로 미리 스타일링된 컴포넌트를 소스
          디렉토리에 직접 포함합니다. 미리 만들어져 있는 스타일 코드를 그대로
          편집할 수 있습니다. 이 라이브러리를 메인으로 프로젝트를 만들기
          시작했습니다. 문서에선 이렇게 소개되어 있습니다.
        </P>
        <Blockquote>
          복사하여 앱에 붙여넣을 수 있는 아름답게 디자인된 구성 요소입니다.
          접근성, 커스터마이징, 오픈 소스. <br />
          이것은 컴포넌트 엘리먼트 라이브러리가 아닙니다. 앱에 복사하여 붙여넣을
          수 있는 재사용 가능한 구성 요소 모음입니다. <br />
          종속성으로 설치하지 않는다는 의미입니다. <InlineCode>npm</InlineCode>
          을 통해 사용할 수 없거나 배포되지 않습니다. 필요한 구성요소를
          선택하세요. 코드를 복사하여 프로젝트에 붙여넣고 필요에 맞게 사용자
          정의하세요. 코드는 귀하의 것입니다. 이를 참조하여 자신만의 구성 요소
          라이브러리를 구축하세요.
        </Blockquote>
        <H2>TailwindCSS + Tailwind Merge</H2>
        <P>
          이전부터 <InlineCode>TailwindCSS</InlineCode>를 사용해보고 싶었습니다.
          빠르게 개발할 수 있다는 장점이 있지만 실무에서 도입하기엔 어렵고
          기술적으로 여러 한계점이 있다고 생각했습니다. 특히{" "}
          <InlineCode>class</InlineCode> 상속이 힘들다고 생각했습니다. class
          상속을 받더라도 문자열이 나열되어 있을 때 어떤 class가 우선으로
          적용되고 어떤 class를 덮어씌워야 하는지 알 수가 없었습니다. <br />
          하지만 요즘은 <InlineCode>tailwind-merge</InlineCode> 같은
          라이브러리로 해결되고 있었습니다. <InlineCode>Shadcn UI</InlineCode>이
          제공하는 라이브러리에 있는 컴포넌트를 보면 <InlineCode>cn</InlineCode>
          이라는 함수로 사용되고 있습니다. 프로젝트 중에서 일부 컴포넌트는
          이러한 기능을 활용해서 직접 만든 컴포넌트도 있습니다.
        </P>
        <H2>Tanstack Table</H2>
        <P>
          마지막으로 <InlineCode>Tanstack Table</InlineCode>입니다. 이
          라이브러리는 <InlineCode>Radix UI</InlineCode>와 무관하게{" "}
          <InlineCode>Shadcn UI</InlineCode>에 포함된
          <InlineCode>DataTable</InlineCode> 컴포넌트에 포함되어 있었습니다.
          실무에서 표를 만드는 상황이 많습니다. 하지만 표는 만들 때마다 다른
          포맷과 기능을 가지고 있습니다. 이 라이브러리는 이러한 상황을 고려해서
          여러 컴포넌트와 커스터마이징을 제공합니다. 아직 잘 알려지지 않았지만
          실무에서 바로 사용해도 될 만큼 좋은 라이브러리라고 생각합니다.
          스타일은 물론 없습니다. 직접 만들거나
          <InlineCode>Shadcn UI</InlineCode>를 사용하면 됩니다.
        </P>
        <Blockquote>
          강력한 테이블 및 데이터 그리드 구축을 위한 헤드리스 UI <br />
          마크업과 스타일을 100% 제어하면서 TS/JS, React, Vue, Solid 및 Svelte용
          테이블을 강화하거나 처음부터 데이터그리드를 구축하세요.
        </Blockquote>
        <H2>Headless UI</H2>
        <P>
          마지막으로 <InlineCode>Headless UI</InlineCode>를 소개하고 싶습니다.
          마침 <InlineCode>Tanstack Table</InlineCode> 공식 문서에 이에 대한
          소개가 있습니다.
        </P>
        <Blockquote>
          헤드리스 UI는 UI 요소 및 상호 작용을 위한 논리, 상태, 처리 및 API를
          제공하지만 마크업, 스타일 또는 사전 구축된 구현은 제공하지 않는
          라이브러리 및 유틸리티에 대한 용어입니다. 아직 머리를 긁고 계시나요?
          😉 헤드리스 UI에는 몇 가지 주요 목표가 있습니다:
          <br />
          <br />
          복잡한 UI를 구축할 때 가장 어려운 부분은 일반적으로 상태, 이벤트,
          부작용, 데이터 계산/관리와 관련됩니다. 마크업, 스타일 및 구현 세부
          사항에서 이러한 문제를 제거함으로써 논리와 구성 요소를 더욱 모듈화하고
          재사용할 수 있습니다.
          <br />
          <br />
          UI 구축은 디자인 시스템을 선택하거나 디자인 사양을 준수하는 것을
          의미하더라도 매우 브랜드화된 맞춤형 경험입니다. 이러한 사용자 정의
          환경을 지원하려면 구성 요소 기반 UI 라이브러리는 마크업 및 스타일
          사용자 정의와 관련된 대규모(끝이 없어 보이는) API 표면을 지원해야
          합니다. 헤드리스 UI 라이브러리는 UI에서 로직을 분리합니다.
          <br />
          <br />
          헤드리스 UI 라이브러리를 사용하면 데이터 처리, 상태 관리 및 비즈니스
          로직의 복잡한 작업이 자동으로 처리되므로 구현 및 사용 사례에 따라
          달라지는 더 높은 카디널리티 결정에 대해 걱정할 필요가 있습니다.
          <br />
          <br />
          <a
            className="underline italic font-bold"
            href="https://www.merrickchristensen.com/articles/headless-user-interface-components/"
          >
            Read more about Headless UI
          </a>
        </Blockquote>
      </article>
    </section>
  );
}
