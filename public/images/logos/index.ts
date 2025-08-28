// Logo assets for the company carousel
export const companyLogos = {
  'Culture Amp': '/images/logos/culture-amp.svg',
  'Clay': '/images/logos/clay.svg',
  'Lightspeed': '/images/logos/lightspeed.svg',
  'Anthropic': '/images/logos/anthropic.svg',
  'Monday.com': '/images/logos/monday.svg',
  'Amplitude': '/images/logos/amplitude.svg',
  'Synthesia': '/images/logos/synthesia.svg',
} as const;

export type CompanyName = keyof typeof companyLogos;
