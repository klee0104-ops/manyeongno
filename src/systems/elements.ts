/**
 * 오행 상성 시스템.
 * 근거 문서: 기획 브리핑 15-2 (오행 상성 데미지 배율).
 * 상극 순환: 목극토·토극수·수극화·화극금·금극목 → 유리 1.5, 불리(피상극) 0.7, 그 외 중립 1.0.
 */
import type { Element } from '@/types/unit';

const ELEMENTS: Element[] = ['목', '화', '토', '금', '수'];

/** [공격 속성][방어 속성] = 배율. 15-2 표를 그대로 옮김. */
const MATRIX: Record<Element, Record<Element, number>> = {
  목: { 목: 1.0, 화: 1.0, 토: 1.5, 금: 0.7, 수: 1.0 },
  화: { 목: 1.0, 화: 1.0, 토: 1.0, 금: 1.5, 수: 0.7 },
  토: { 목: 0.7, 화: 1.0, 토: 1.0, 금: 1.0, 수: 1.5 },
  금: { 목: 1.5, 화: 0.7, 토: 1.0, 금: 1.0, 수: 1.0 },
  수: { 목: 1.0, 화: 1.5, 토: 0.7, 금: 1.0, 수: 1.0 },
};

export function getElementMultiplier(attacker: Element, defender: Element): number {
  return MATRIX[attacker][defender];
}

export function isAdvantaged(attacker: Element, defender: Element): boolean {
  return getElementMultiplier(attacker, defender) > 1.0;
}

export function allElements(): Element[] {
  return [...ELEMENTS];
}
