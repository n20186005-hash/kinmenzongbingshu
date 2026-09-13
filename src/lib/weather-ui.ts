/**
 * 天氣建議區塊的畫面輸出。
 *
 * 伺服器端（Astro frontmatter）與瀏覽器端（前端刷新）共用同一組函式，
 * 確保「更新後的數字」與「更新後的建議」永遠一致。
 */

import type { WeatherAdvice, WeatherChip } from './weather';

export interface AdviceLabels {
  alertTitle: string;
  dress: string;
  plan: string;
  pack: string;
}

const ICON_ALERT =
  '<svg viewBox="0 0 24 24" width="16" height="16" fill="none"><path d="M12 4.2 21 19.4H3z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="M12 10v4.2" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><circle cx="12" cy="16.8" r="1.1" fill="currentColor"/></svg>';

const ICON_HEADLINE =
  '<svg viewBox="0 0 24 24" width="15" height="15" fill="none"><path d="M4.6 12.4 9 16.8 19.4 6.4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const ICON_DRESS =
  '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4.2 7.2 6.6l1.6 2.1V19a1.2 1.2 0 0 0 1.2 1.2h4a1.2 1.2 0 0 0 1.2-1.2V8.7l1.6-2.1L15 4.2"/><path d="M9 4.2c0 1.5 1.3 2.5 3 2.5s3-1 3-2.5"/></svg>';

const ICON_PLAN =
  '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4.2 6.6 9.6 4.4l4.8 2.2 5.4-2.2v13l-5.4 2.2-4.8-2.2-5.4 2.2z"/><path d="M9.6 4.4v13M14.4 6.6v13"/></svg>';

const ICON_PACK =
  '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5.4 8.6h13.2l-1 10.2a1.4 1.4 0 0 1-1.4 1.2H7.8a1.4 1.4 0 0 1-1.4-1.2z"/><path d="M8.8 8.6V6.4a3.2 3.2 0 0 1 6.4 0v2.2"/></svg>';

const esc = (value: string): string =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** 風險提醒（有觸發條件才輸出，無則回傳空字串）。 */
export function renderAlertsHtml(advice: WeatherAdvice, labels: AdviceLabels): string {
  if (!advice.alerts.length) return '';
  return (
    '<div class="rounded-2xl border-2 border-[var(--color-brick)] bg-[#fbf1ee] px-5 py-4" role="alert">' +
    '<p class="flex items-center gap-2 font-serif text-base font-bold text-[var(--color-brick)]">' +
    '<span class="inline-flex text-[var(--color-brick)]" aria-hidden="true">' +
    ICON_ALERT +
    '</span>' +
    esc(labels.alertTitle) +
    '</p>' +
    '<ul class="mt-3 space-y-3">' +
    advice.alerts
      .map(
        (alert) =>
          '<li class="border-l-2 border-[var(--color-brick)] pl-3">' +
          '<p class="text-sm font-semibold text-[var(--color-brick)]">' +
          esc(alert.title) +
          '</p>' +
          '<p class="mt-1 text-sm leading-6 text-[var(--color-wood-soft)]">' +
          esc(alert.text) +
          '</p>' +
          '</li>',
      )
      .join('') +
    '</ul></div>'
  );
}

function block(title: string, icon: string, items: string[]): string {
  if (!items.length) return '';
  return (
    '<section class="rounded-2xl border border-[var(--color-slate-line)] bg-white px-5 py-4">' +
    '<p class="flex items-center gap-2 font-serif text-sm font-bold text-[var(--color-wood)]">' +
    '<span class="inline-flex text-[var(--color-brick)]" aria-hidden="true">' +
    icon +
    '</span>' +
    esc(title) +
    '</p>' +
    '<ul class="mt-3 space-y-2">' +
    items
      .map(
        (text) =>
          '<li class="flex gap-2 text-sm leading-6 text-[var(--color-wood-soft)]">' +
          '<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-jade)]" aria-hidden="true"></span>' +
          '<span>' +
          esc(text) +
          '</span>' +
          '</li>',
      )
      .join('') +
    '</ul></section>'
  );
}

/** 一句話結論 + 出行穿搭 / 遊玩安排 / 隨身物品（未命中的類別不輸出）。 */
export function renderAdviceHtml(advice: WeatherAdvice, labels: AdviceLabels): string {
  const parts: string[] = [];

  parts.push(
    '<p class="flex items-start gap-2 rounded-xl bg-[var(--color-paper-deep)] px-4 py-3 text-sm font-semibold text-[var(--color-wood)]">' +
      '<span class="mt-0.5 inline-flex shrink-0 text-[var(--color-brick)]" aria-hidden="true">' +
      ICON_HEADLINE +
      '</span>' +
      '<span>' +
      esc(advice.headline) +
      '</span>' +
      '</p>',
  );

  const blocks =
    block(labels.dress, ICON_DRESS, advice.dress.map((item) => item.text)) +
    block(labels.plan, ICON_PLAN, advice.plan.map((item) => item.text)) +
    block(labels.pack, ICON_PACK, advice.pack.map((item) => item.text));

  if (blocks) parts.push('<div class="mt-4 grid gap-4 md:grid-cols-3">' + blocks + '</div>');

  parts.push(
    '<p class="mt-4 text-xs leading-6 text-[var(--color-slate)]">' + esc(advice.context) + '</p>',
  );

  return parts.join('');
}

const CHIP_TONE: Record<WeatherChip['tone'], string> = {
  plain: 'border-[var(--color-slate-line)] bg-[var(--color-paper-deep)]',
  warn: 'border-[var(--color-kapok)] bg-[#fbeee8]',
  danger: 'border-[var(--color-brick)] bg-[#fbf1ee]',
};

/** 今日氣溫 / 體感 / 紫外線 / 風勢 / 降雨機率快速判讀籤。 */
export function renderChipsHtml(chips: WeatherChip[]): string {
  if (!chips.length) return '';
  return (
    '<ul class="flex flex-wrap gap-2">' +
    chips
      .map(
        (chip) =>
          '<li class="rounded-full border px-3 py-1.5 text-xs ' +
          CHIP_TONE[chip.tone] +
          ' text-[var(--color-wood-soft)]">' +
          '<span class="text-[var(--color-slate)]">' +
          esc(chip.label) +
          '</span> ' +
          '<span class="font-semibold text-[var(--color-wood)]">' +
          esc(chip.value) +
          '</span></li>',
      )
      .join('') +
    '</ul>'
  );
}
