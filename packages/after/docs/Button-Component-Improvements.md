# Button 컴포넌트 개선사항 분석

## 개요

이 문서는 `packages/before`와 `packages/after`의 Button 컴포넌트를 비교하고, 개선된 디자인 시스템의 장점을 설명합니다.

---

## 1. 관심사 분리 (Separation of Concerns)

### Before: 도메인 로직과 UI 로직 혼재

```typescript
// 🚨 Bad Practice: UI 컴포넌트가 도메인 타입을 알고 있음
interface ButtonProps {
  entityType?: 'user' | 'post';
  action?: 'create' | 'edit' | 'delete' | 'publish' | 'archive';
  entity?: any; // 엔티티 객체를 직접 받음
}

// 🚨 Bad Practice: UI 컴포넌트가 비즈니스 규칙을 판단함
if (entityType === 'user' && action === 'delete' && entity.role === 'admin') {
  actualDisabled = true;
}
```

**문제점:**

- UI 컴포넌트가 비즈니스 로직을 포함
- 도메인 타입(`user`, `post`)에 의존
- 재사용성 저하
- 테스트 어려움

### After: 순수 UI 컴포넌트

```typescript
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
```

**개선사항:**

- ✅ 도메인 로직 완전 제거
- ✅ 순수 UI 컴포넌트로 재사용성 향상
- ✅ 표준 HTML 속성 상속 (`React.ButtonHTMLAttributes`)
- ✅ 비즈니스 로직은 상위 컴포넌트에서 처리

---

## 2. 타입 안전성 (Type Safety)

### Before: 느슨한 타입 정의

```typescript
entity?: any; // 엔티티 객체를 직접 받음
```

**문제점:**

- `any` 타입 사용으로 타입 안전성 부족
- 컴파일 타임 에러 검출 불가
- IDE 자동완성 지원 부족

### After: 강력한 타입 시스템

```typescript
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(...)
```

**개선사항:**

- ✅ `any` 타입 제거
- ✅ `VariantProps`로 variant/size 타입 자동 추론
- ✅ 표준 HTML 속성 타입 상속
- ✅ `forwardRef`로 ref 타입 안전성 보장

---

## 3. 스타일링 방식 (Styling Approach)

### Before: 문자열 기반 클래스 조합

```typescript
const classes = [
  'btn',
  `btn-${actualVariant}`,
  `btn-${size}`,
  fullWidth && 'btn-fullwidth',
]
  .filter(Boolean)
  .join(' ');
```

**문제점:**

- 문자열 템플릿으로 클래스 생성 (타입 안전성 부족)
- 하드코딩된 클래스 이름
- CSS 파일에 의존
- 클래스 충돌 가능성

### After: CVA (Class Variance Authority) 패턴

```typescript
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 ...',
  {
    variants: {
      variant: {
        primary: 'bg-blue-500 text-white shadow hover:bg-blue-600',
        secondary: 'bg-white-500 text-gray-600 shadow hover:bg-gray-200',
        // ...
      },
      size: {
        sm: 'h-8 rounded-md px-3 text-xs',
        md: 'h-9 px-4 py-2 button-padding-md-horizontal',
        lg: 'h-10 rounded-md px-8',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
);
```

**개선사항:**

- ✅ 타입 안전한 variant 정의
- ✅ Tailwind CSS 유틸리티 클래스 사용
- ✅ 중앙 집중식 스타일 관리
- ✅ `cn()` 유틸리티로 클래스 병합 최적화

---

## 4. 재사용성 (Reusability)

### Before: 제한적인 재사용성

```typescript
// 도메인 특화 props로 인해 다른 프로젝트에서 사용 불가
<Button entityType="user" action="delete" entity={user} />
```

**문제점:**

- 도메인 특화 props로 범용성 저하
- 다른 프로젝트에서 재사용 어려움
- 컴포넌트 라이브러리화 불가

### After: 범용 컴포넌트

```typescript
// 어떤 프로젝트에서도 사용 가능
<Button variant="primary" size="md">클릭</Button>
<Button variant="danger" size="sm" onClick={handleDelete}>삭제</Button>
<Button asChild>
  <Link href="/about">이동</Link>
</Button>
```

**개선사항:**

- ✅ 도메인 독립적 설계
- ✅ `asChild` 패턴으로 컴포넌트 합성 지원
- ✅ 표준 HTML 속성 지원
- ✅ 컴포넌트 라이브러리로 배포 가능

---

## 5. 확장성 (Extensibility)

### Before: 하드코딩된 variant

```typescript
variant?: 'primary' | 'secondary' | 'danger' | 'success';
```

**문제점:**

- 새로운 variant 추가 시 코드 수정 필요
- CSS 파일도 함께 수정해야 함
- 확장이 어려움

### After: 유연한 variant 시스템

```typescript
variants: {
  variant: {
    primary: '...',
    secondary: '...',
    danger: '...',
    success: '...',
    outline: '...',  // 추가 variant
    ghost: '...',   // 추가 variant
    tab: '...',     // 추가 variant
    tabActive: '...', // 추가 variant
  },
}
```

**개선사항:**

- ✅ 새로운 variant 쉽게 추가 가능
- ✅ 타입 안전성 유지
- ✅ Tailwind CSS로 스타일 일관성 보장

---

## 6. 접근성 (Accessibility)

### Before: 기본 접근성만 지원

```typescript
<button
  type={type}
  onClick={onClick}
  disabled={actualDisabled}
  className={classes}
>
  {actualChildren}
</button>
```

**문제점:**

- Focus 상태 스타일 없음
- 키보드 네비게이션 고려 부족
- ARIA 속성 미지원

### After: 향상된 접근성

```typescript
const buttonVariants = cva(
  '... focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ...',
  // ...
);

// React.ButtonHTMLAttributes 상속으로 모든 표준 속성 지원
<Button aria-label="삭제" aria-describedby="delete-hint">삭제</Button>
```

**개선사항:**

- ✅ Focus visible 스타일 지원
- ✅ 표준 HTML 속성 상속 (aria-\*, role 등)
- ✅ 키보드 네비게이션 지원
- ✅ 스크린 리더 호환성 향상

---

## 7. 스타일 관리 방식

### Before: CSS 파일 의존

```css
/* components.css */
.btn-primary {
  background-color: #1976d2;
  color: #fff;
  border-color: #1565c0;
}
```

**문제점:**

- CSS와 TypeScript 분리
- 하드코딩된 색상 값
- 디자인 토큰 부재
- 일관성 유지 어려움

### After: Tailwind CSS + 디자인 토큰

```typescript
// Tailwind 유틸리티 클래스 사용
primary: 'bg-blue-500 text-white shadow hover:bg-blue-600',
```

**개선사항:**

- ✅ Tailwind CSS로 유틸리티 우선 접근
- ✅ 디자인 토큰 시스템 구축 (`src/tokens/`)
- ✅ CSS 변수로 중앙 관리 (`components.css`)
- ✅ 일관된 디자인 시스템

---

## 8. 컴포넌트 합성 (Composition)

### Before: 단일 컴포넌트만 지원

```typescript
<Button onClick={handleClick}>클릭</Button>
```

**문제점:**

- 다른 컴포넌트로 변환 불가
- Link나 다른 요소로 사용 어려움

### After: asChild 패턴 지원

```typescript
import { Slot } from '@radix-ui/react-slot';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

// 사용 예시
<Button asChild>
  <Link href="/about">이동</Link>
</Button>
```

**개선사항:**

- ✅ `asChild` 패턴으로 컴포넌트 합성 지원
- ✅ Radix UI의 Slot 컴포넌트 활용
- ✅ 스타일은 유지하면서 다른 요소로 변환 가능

---

## 9. 성능 최적화

### Before: 매 렌더링마다 클래스 계산

```typescript
const classes = [
  'btn',
  `btn-${actualVariant}`,
  `btn-${size}`,
  fullWidth && 'btn-fullwidth',
]
  .filter(Boolean)
  .join(' ');
```

**문제점:**

- 매 렌더링마다 배열 생성 및 조인
- 불필요한 문자열 연산

### After: 최적화된 클래스 병합

```typescript
import { cn } from '@/lib/utils'; // clsx + tailwind-merge

className={cn(buttonVariants({ variant, size, fullWidth, className }))}
```

**개선사항:**

- ✅ `clsx`로 조건부 클래스 최적화
- ✅ `tailwind-merge`로 중복 클래스 자동 제거
- ✅ CVA로 variant 조합 최적화

---

## 10. 개발자 경험 (DX)

### Before: 제한적인 IDE 지원

```typescript
variant?: 'primary' | 'secondary' | 'danger' | 'success';
// 자동완성은 되지만 타입 추론이 약함
```

### After: 향상된 IDE 지원

```typescript
// VariantProps로 자동 타입 추론
const Button: React.FC<ButtonProps> = ({ variant, size, ... }) => {
  // variant는 'primary' | 'secondary' | 'danger' | ... 자동 추론
  // size는 'sm' | 'md' | 'lg' 자동 추론
};

// buttonVariants export로 스타일 재사용 가능
export { Button, buttonVariants };
```

**개선사항:**

- ✅ 강력한 타입 추론
- ✅ IDE 자동완성 향상
- ✅ 컴파일 타임 에러 검출
- ✅ `buttonVariants` export로 스타일 재사용

---

## 비교 요약표

| 항목            | Before              | After                 | 개선도     |
| --------------- | ------------------- | --------------------- | ---------- |
| **관심사 분리** | ❌ 도메인 로직 포함 | ✅ 순수 UI 컴포넌트   | ⭐⭐⭐⭐⭐ |
| **타입 안전성** | ⚠️ `any` 타입 사용  | ✅ 완전한 타입 안전성 | ⭐⭐⭐⭐⭐ |
| **스타일링**    | ⚠️ 문자열 기반      | ✅ CVA + Tailwind     | ⭐⭐⭐⭐⭐ |
| **재사용성**    | ❌ 도메인 의존      | ✅ 범용 컴포넌트      | ⭐⭐⭐⭐⭐ |
| **확장성**      | ⚠️ 하드코딩         | ✅ 유연한 variant     | ⭐⭐⭐⭐   |
| **접근성**      | ⚠️ 기본 지원        | ✅ 향상된 접근성      | ⭐⭐⭐⭐   |
| **성능**        | ⚠️ 매번 계산        | ✅ 최적화된 병합      | ⭐⭐⭐     |
| **개발자 경험** | ⚠️ 제한적           | ✅ 향상된 DX          | ⭐⭐⭐⭐⭐ |

---

## 마이그레이션 가이드

### Before 코드

```typescript
<Button
  entityType="user"
  action="delete"
  entity={user}
  onClick={handleDelete}
>
  삭제
</Button>
```

### After 코드

```typescript
// 비즈니스 로직은 상위 컴포넌트에서 처리
const canDelete = user.role !== 'admin';

<Button
  variant="danger"
  size="md"
  disabled={!canDelete}
  onClick={handleDelete}
>
  삭제
</Button>
```

**변경 사항:**

1. 도메인 props 제거 (`entityType`, `action`, `entity`)
2. 비즈니스 로직을 상위 컴포넌트로 이동
3. 명시적 variant/size 지정
4. 표준 HTML 속성 활용

---

## 결론

After 버전의 Button 컴포넌트는 다음과 같은 핵심 개선사항을 제공합니다:

1. **관심사 분리**: UI와 비즈니스 로직 완전 분리
2. **타입 안전성**: 강력한 TypeScript 타입 시스템
3. **현대적 스타일링**: Tailwind CSS + CVA 패턴
4. **재사용성**: 범용 컴포넌트로 라이브러리화 가능
5. **확장성**: 쉬운 variant 추가 및 커스터마이징
6. **접근성**: 향상된 a11y 지원
7. **성능**: 최적화된 클래스 병합
8. **개발자 경험**: 향상된 IDE 지원 및 타입 추론

이러한 개선사항들은 현대적인 React 컴포넌트 설계의 모범 사례를 따르며, 유지보수성과 확장성을 크게 향상시킵니다.
