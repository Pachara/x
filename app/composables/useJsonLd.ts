export function useOrganizationSchema() {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'บุ่นเส่ง ไทยชูการ์',
          url: 'https://x.pages.dev',
          logo: 'https://x.pages.dev/images/logo.png',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+66-81-669-3077',
            contactType: 'sales',
            availableLanguage: 'Thai',
          },
        }),
      },
    ],
  })
}

export function useLocalBusinessSchema() {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'บุ่นเส่ง ไทยชูการ์',
          description: 'จำหน่ายน้ำตาลทรายขาว น้ำตาลทรายแดง ราคาส่ง หลายยี่ห้อ จัดส่งทั่วประเทศ',
          image: 'https://x.pages.dev/images/logo.png',
          telephone: '+66-81-669-3077',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'นครศรีธรรมราช',
            addressCountry: 'TH',
          },
          openingHours: 'Mo-Sa 08:00-17:00',
          url: 'https://x.pages.dev',
        }),
      },
    ],
  })
}

interface ProductData {
  name: string
  description: string
  image: string
  price: number
  currency?: string
  availability?: string
}

export function useProductSchema(product: ProductData) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: product.description,
          image: product.image,
          offers: {
            '@type': 'Offer',
            price: product.price,
            priceCurrency: product.currency || 'THB',
            availability: product.availability || 'https://schema.org/InStock',
          },
        }),
      },
    ],
  })
}

interface FaqItem {
  question: string
  answer: string
}

export function useFaqSchema(faqs: FaqItem[]) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }),
      },
    ],
  })
}

interface BreadcrumbItem {
  name: string
  url: string
}

export function useBreadcrumbSchema(items: BreadcrumbItem[]) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: item.url,
          })),
        }),
      },
    ],
  })
}

interface ArticleData {
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  author?: string
}

export function useArticleSchema(article: ArticleData) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: article.headline,
          description: article.description,
          image: article.image,
          datePublished: article.datePublished,
          dateModified: article.dateModified || article.datePublished,
          author: {
            '@type': 'Organization',
            name: article.author || 'บุ่นเส่ง ไทยชูการ์',
          },
        }),
      },
    ],
  })
}
