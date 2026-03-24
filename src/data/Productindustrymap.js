// Maps product IDs to the industry slugs they appear in.
// Used by ProductDetail to show "Used In These Industries" section.

export const productIndustryMap = {
  'garbage-bags': [
    'healthcare',
    'hospitality',
    'facility-management',
  ],
  'bio-medical-bags': [
    'healthcare',
    'pharma-laboratories',
  ],
  'bags-on-rolls': [
    'hospitality',
    'fmcg-retail',
    'facility-management',
  ],
  'stretch-film': [
    'fmcg-retail',
    'cold-storage-logistics',
  ],
  'shrink-film': [
    'fmcg-retail',
    'pharma-laboratories',
  ],
  'ldpe-sheets': [
    'construction',
    'agriculture',
    'cold-storage-logistics',
  ],
  'ldpe-cover': [
    'construction',
    'agriculture',
    'pharma-laboratories',
    'cold-storage-logistics',
  ],
  'crop-cover': [
    'agriculture',
  ],
}