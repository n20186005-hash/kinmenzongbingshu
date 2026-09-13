export interface FaqItem {
  q: string;
  a: string;
}

/**
 * 產生可放進 Layout `structuredData` 的 FAQPage 節點。
 * `@context` 由 Layout 統一補上，這裡只回傳節點本身。
 */
export function faqPageLd(items: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}
