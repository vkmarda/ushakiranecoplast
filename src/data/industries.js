// ─────────────────────────────────────────────────────────────────
// INDUSTRY PAGES — SEO STRATEGY FROM KEYWORD INTELLIGENCE REPORT
//
// Each page targets a different buyer persona with transactional
// intent. Primary keywords chosen based on:
// - What purchase managers actually type (not internal product names)
// - Low competition gaps identified in report
// - City targeting: Hyderabad, Telangana, Andhra Pradesh throughout
// - Eco positioning unclaimed by all competitors
// ─────────────────────────────────────────────────────────────────

import { products } from './Products'

function getProductsByIds(ids) {
  return products.filter(p => ids.includes(p.id))
}

export const industries = [

  // ─── 1. HEALTHCARE ────────────────────────────────────────────
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare & Hospitals',
    // icon: '🏥',
    badge: 'PCB Approved · BMWM 2016 Compliant',
    heroTagline: 'Certified Clinical Waste Solutions',
    headline: 'BMWM Compliant Bags for Hospitals, Clinics and Laboratories',
    subheadline: 'PCB approved, ISO certified colour-coded biomedical waste bags and facility waste management solutions trusted by healthcare institutions across Hyderabad and India.',

    seoTitle: 'Biomedical Waste Bags for Hospitals Hyderabad | BMWM 2016 Compliant | Ushakiran Ecoplast',
    seoDescription: 'PCB approved BMWM Rules 2016 compliant colour-coded biomedical waste bags for hospitals, clinics and labs in Hyderabad. ISO certified manufacturer. All 6 BMWM colours. Pan-India supply.',

    accentColor: '#b5451b',
    lightColor: '#fdf2ef',
    darkColor: '#3d1a0d',

    challenge: {
      heading: 'Non-compliant bags are a legal and health liability',
      body: 'Under BMWM Rules 2016, every hospital and clinic in India must use colour-coded bags that meet CPCB specifications. Facilities using substandard or incorrect bags face PCB show-cause notices, fines and in severe cases, facility closure. The right bag is not a procurement decision — it is a compliance obligation.',
      stats: [
        { value: '6', label: 'Mandatory colour categories under BMWM 2016' },
        { value: '50µ+', label: 'Minimum thickness mandated by CPCB' },
        { value: '100%', label: 'of healthcare facilities must comply' },
      ]
    },

    

    longContent: `<p>Ushakiran Ecoplast has been supplying <strong>BMWM-compliant biomedical waste bags to hospitals and healthcare facilities</strong> across Hyderabad, Telangana and Andhra Pradesh since 2013. Our bags are trusted by multi-specialty hospitals, standalone clinics, diagnostic laboratories and pharmaceutical manufacturing facilities for safe, legally compliant clinical waste segregation.</p>

<p>Healthcare waste management in India is governed by the Bio-Medical Waste Management Rules 2016 (BMWM Rules), which mandate specific colour-coded bags for each category of clinical waste. The Central Pollution Control Board (CPCB) and State PCBs conduct regular inspections — non-compliance results in penalties that can severely disrupt facility operations.</p>

<h3>What BMWM Rules 2016 Require from Your Bags</h3>
<p>Every bag used for biomedical waste in an Indian healthcare facility must meet minimum thickness specifications (50 micron for most categories), must carry the biohazard symbol where mandated, must be manufactured from the correct material grade, and must be colour-coded to the exact BMWM specification. Our facility manufactures to all these requirements — and we maintain batch records and certifications to support your compliance documentation during PCB inspections.</p>

<h3>Complete Colour-Coded Range for Hospitals</h3>
<p>Yellow bags for human anatomical waste, soiled linen and pharmaceutical waste. Red bags for contaminated recyclable waste including tubing, bottles and IV sets. Blue bags for glassware and metallic implants. Black bags for ash from incineration and discarded medicines. White bags for sharps and waste requiring autoclaving. Translucent or green bags for general non-infected waste from patient areas. We manufacture the complete range from our Hyderabad facility for healthcare institutions across South India.</p>

<h3>Supply to Hospital Networks Across Hyderabad</h3>
<p>We supply to standalone hospitals, multi-specialty hospital chains, diagnostic laboratory networks, blood banks, nursing homes and pharmaceutical manufacturing facilities across Hyderabad, Secunderabad, Warangal and other cities across Telangana. For hospital networks with centralised procurement, we offer scheduled delivery programmes and consistent batch quality across all supply locations. Our 90% customer retention rate reflects the reliability that healthcare procurement teams require.</p>`,
whyUkep: [
      { icon: '✅', title: 'PCB Approved', body: 'All biomedical bags are PCB approved and manufactured to BMWM Rules 2016 specifications. Your facility\'s compliance documentation is supported.' },
      { icon: '🎨', title: 'All 6 BMWM Colours', body: 'Yellow, Red, Blue, Black, White and Translucent — all six categories manufactured to exact CPCB thickness and biohazard marking requirements.' },
      { icon: '🏭', title: 'Hyderabad Manufacturer', body: 'Direct supply from our Hyderabad facility means faster delivery and responsive service for healthcare facilities across Telangana and Andhra Pradesh.' },
      { icon: '🖨️', title: 'Custom Hospital Printing', body: 'Hospital name, ward identification, waste category and biohazard symbols printed to your specification for ward-level compliance.' },
      { icon: '♻️', title: 'Eco-Friendly Options', body: 'Recycled LDPE available for non-critical waste categories — supporting your facility\'s sustainability goals without compromising BMWM compliance.' },
      { icon: '📦', title: 'Flexible MOQ', body: 'From single-department trial orders to hospital network contracts — we accommodate both without compromising on quality or delivery timelines.' },
    ],
    faqs: [
      { q: 'Are your biomedical bags compliant with BMWM Rules 2016?', a: 'Yes. All our biomedical bags are manufactured to full BMWM Rules 2016 compliance as per CPCB guidelines — correct colour coding, minimum 50 micron thickness, biohazard symbol printing where required, and PCB approval. We provide compliance documentation to support your inspection records.' },
      { q: 'Can you print our hospital name and ward details on bags?', a: 'Yes. We offer custom printing with hospital name, ward identification and waste category labelling. This improves ward-level segregation and supports traceability during PCB inspections. Minimum order quantities apply for custom printed bags.' },
      { q: 'What is the penalty for using non-BMWM compliant bags?', a: 'Under the Environment Protection Act 1986 and BMWM Rules 2016, facilities using non-compliant bags face PCB show-cause notices, financial penalties and potential facility closure orders. Certification from a PCB-approved manufacturer like Ushakiran Ecoplast is the primary compliance safeguard.' },
      { q: 'Do you supply to hospitals outside Hyderabad?', a: 'Yes. We supply to hospitals and healthcare facilities across Telangana, Andhra Pradesh and pan-India. Contact us for delivery timelines and freight rates to your location.' },
    ],

    productIds: ['bio-medical-bags', 'garbage-bags'],
    relatedIndustries: ['pharma-laboratories', 'facility-management'],
  },

  // ─── 2. HOSPITALITY ───────────────────────────────────────────
  {
    id: 'hospitality',
    slug: 'hospitality',
    name: 'Hospitality & Food Service',
    // icon: '🏨',
    badge: 'ISO Certified · Custom Printing Available',
    heroTagline: 'Waste Management for Hotels & Restaurants',
    headline: 'Garbage Bags and Roll Bags for Hotels, Resorts and Restaurant Chains',
    subheadline: 'Custom-sized, branded waste management bags trusted by hotel chains, resorts and restaurant groups across Hyderabad and India for consistent, hygienic operations.',

    seoTitle: 'Garbage Bags for Hotels and Restaurants Hyderabad | Custom Printed | Ushakiran Ecoplast',
    seoDescription: 'ISO certified garbage bags and bags on rolls for hotels, resorts and restaurant chains in Hyderabad. Custom sizes, colours and printing. 100% recycled LDPE. Bulk supply pan-India.',

    accentColor: '#1a6b4a',
    lightColor: '#edf7f2',
    darkColor: '#0d2e1e',

    challenge: {
      heading: 'Inconsistent bag quality disrupts hotel operations',
      body: 'Hotels and restaurant chains need waste management bags that are consistent in size, strong enough to handle wet waste without tearing, and available in custom formats matched to your bin dimensions across all properties. Substandard bags that tear during housekeeping rounds create hygiene issues, increase labour time and reflect poorly on your sustainability commitments to guests.',
      stats: [
        { value: '200kg+', label: 'Average daily waste in a 100-room hotel' },
        { value: '90%', label: 'Customer retention — hotels stay with us' },
        { value: '3x', label: 'Faster housekeeping with right-sized bags' },
      ]
    },

    whyUkep: [
      { icon: '📐', title: 'Custom Bin-Matched Sizes', body: 'We manufacture bags to match your exact bin dimensions across room bins, kitchen bins, banquet waste and industrial containers — eliminating overhang and bag waste.' },
      { icon: '🖨️', title: 'Hotel Branded Bags', body: 'Custom print your hotel logo and sustainability messaging on bags — a visible signal of your environmental commitment to guests and staff.' },
      { icon: '💪', title: 'Wet Waste Rated', body: 'Kitchens and F&B operations generate heavy, wet waste. Our bags are tested for leak resistance and puncture strength across all thickness grades.' },
      { icon: '♻️', title: '100% Recycled LDPE', body: 'All our garbage bags are manufactured from 100% post-consumer recycled LDPE — supporting your hotel\'s ESG and green certification requirements.' },
      { icon: '🎨', title: 'Colour-Coded Options', body: 'Implement colour-coded waste segregation across your property — wet, dry and recyclables — with custom colour bags matched to your system.' },
      { icon: '🚚', title: 'Reliable Bulk Supply', body: 'Consistent quality across every order, delivered to your central warehouse or directly to individual properties across Hyderabad and pan-India.' },
    ],

    longContent: `<p>Ushakiran Ecoplast supplies <strong>garbage bags and bags on rolls to hotel chains, resorts and restaurant groups</strong> across Hyderabad, Telangana and pan-India. We have been a trusted supplier to the hospitality industry since 2013 — with a 90% customer retention rate that reflects the supply reliability hotels depend on.</p>

<p>Hospitality waste management has unique requirements that standard off-the-shelf bags don't address. Guest room bins, housekeeping trolleys, F&B kitchen bins, banquet hall waste and pool area waste all have different size, strength and format requirements. We manufacture to your exact specification for every application.</p>

<h3>Custom Manufacturing for Hotel Operations</h3>
<p>We work with hotel procurement teams to audit every bin dimension across a property and manufacture bags in the exact sizes required — eliminating oversized bags that waste material and undersized bags that tear or spill. For chain hotels with properties across multiple cities, we supply consistent specifications across all locations from our Hyderabad manufacturing facility.</p>

<h3>Bags on Rolls for F&B and Housekeeping</h3>
<p>Our perforated bags on rolls are used extensively across hotel operations — at F&B counters for food packaging and order handling, in housekeeping trolleys for rapid bin liner replacement, in laundry operations and in banquet kitchens for high-volume food waste. The roll format enables faster operations and better stock management compared to flat-pack bags across high-frequency hotel departments.</p>

<h3>Sustainability Credentials for Hotel ESG Reporting</h3>
<p>Hotels and resorts building toward green certifications (LEED, Green Key, EarthCheck) require documented sustainable procurement. Our 100% recycled LDPE bags provide certified recycled content with material certificates — contributing to your procurement sustainability score and guest-facing sustainability communications. No other garbage bag supplier in Hyderabad is actively targeting this positioning.</p>`,

    faqs: [
      { q: 'Can you manufacture garbage bags in custom sizes for our hotel bin specifications?', a: 'Yes. We manufacture to any bin dimension — from small guest room bins to large kitchen and banquet containers. Share your bin measurements and we will produce an exact-fit bag that eliminates waste and reduces lining time for housekeeping staff.' },
      { q: 'Do you offer branded printing with our hotel logo on garbage bags?', a: 'Yes. We offer custom printing for hotel chains and hospitality groups. Your logo, sustainability messaging and waste category labelling can be printed. This is particularly popular with hotels building visible sustainability programmes.' },
      { q: 'What thickness do you recommend for hotel kitchen waste?', a: 'For commercial kitchen and F&B waste which is typically heavy and wet, we recommend 80–100 micron. For guest room bins and light dry waste, 40–60 micron is sufficient. We can supply mixed specifications for a single property and advise based on your waste volume.' },
      { q: 'Do you supply to hotel chains with properties across multiple cities?', a: 'Yes. We supply to hotel groups with properties across India from our Hyderabad facility. We maintain consistent batch quality and can coordinate delivery to multiple property locations. Contact us for a chain supply agreement.' },
    ],

    productIds: ['garbage-bags', 'bags-on-rolls'],
    relatedIndustries: ['facility-management', 'fmcg-retail'],
  },

  // ─── 3. CONSTRUCTION ──────────────────────────────────────────
  {
    id: 'construction',
    slug: 'construction',
    name: 'Construction & Infrastructure',
    // icon: '🏗️',
    badge: 'IS Code Compliant · Project Supply Available',
    heroTagline: 'LDPE Films for Construction Projects',
    headline: 'LDPE Sheets for DPC, Waterproofing and Road Construction in Hyderabad',
    subheadline: 'Recycled and virgin LDPE sheets manufactured in Hyderabad for civil construction, infrastructure projects and road building across Telangana and Andhra Pradesh.',

    seoTitle: 'LDPE Sheet for DPC Construction Hyderabad | Waterproofing Film | Ushakiran Ecoplast',
    seoDescription: 'Recycled and virgin LDPE sheets for DPC, road construction and waterproofing in Hyderabad. Custom width and thickness 25–500 micron. ISO certified manufacturer. Project supply across Telangana and AP.',

    accentColor: '#5a3e8a',
    lightColor: '#f3f0fa',
    darkColor: '#1e1530',

    challenge: {
      heading: 'The right DPC sheet prevents structural damage worth crores',
      body: 'Rising damp is one of the most common and expensive structural problems in Indian buildings. A proper LDPE Damp Proof Course (DPC) layer costs a fraction of the remediation cost — but only if the sheet meets the correct thickness and material specification for your project. Substandard DPC film that tears during laying or fails to provide adequate moisture barrier leads to damp infiltration that compromises structural integrity over years.',
      stats: [
        { value: '250µ', label: 'Minimum DPC thickness per IS specifications' },
        { value: '₹crores', label: 'Typical remediation cost for rising damp failure' },
        { value: '100%', label: 'moisture barrier when correctly specified' },
      ]
    },

    whyUkep: [
      { icon: '📏', title: 'Project-Specific Dimensions', body: 'We supply LDPE sheets in the exact width, thickness and roll length specified by your structural engineer or project consultant — no cutting waste on site.' },
      { icon: '🏗️', title: 'DPC and Waterproofing Grade', body: 'Sheets manufactured to the thickness specifications required for DPC, basement waterproofing, road subgrade barriers and tunnel waterproofing applications.' },
      { icon: '🌱', title: 'Recycled Grade Available', body: 'Recycled LDPE sheets for above-ground applications where material purity certification is not required — same moisture barrier performance at lower cost.' },
      { icon: '🚛', title: 'Site Delivery Hyderabad', body: 'We deliver to construction sites across Hyderabad, Telangana and Andhra Pradesh — reducing your procurement logistics burden on active projects.' },
      { icon: '📋', title: 'Material Certificates', body: 'Full material traceability and certificates supplied to support your project documentation and structural engineer sign-off requirements.' },
      { icon: '📐', title: 'Road Construction Supply', body: 'Bulk supply of LDPE subgrade barrier sheets for highway and road projects across Telangana and AP — project quantities accommodated.' },
    ],

    longContent: `<p>Ushakiran Ecoplast supplies <strong>LDPE sheets for construction projects</strong> across Hyderabad, Telangana and Andhra Pradesh — from residential DPC applications to large infrastructure and highway projects. We manufacture from our Hyderabad facility in both recycled and virgin LDPE grades, from 25 micron protective film to 500+ micron heavy-duty waterproofing membranes.</p>

<p>Competitors like Singhal Industries and Mohit Polyfab rank nationally for LDPE sheet keywords — but neither has Hyderabad or Telangana-specific content, local delivery or a regional supply relationship. Ushakiran Ecoplast bridges this gap with Hyderabad manufacturing, South India logistics and a team that understands the specific construction environment of Telangana and Andhra Pradesh.</p>

<h3>DPC Applications in Residential and Commercial Construction</h3>
<p>Damp Proof Course (DPC) is a mandatory layer in Indian building construction that prevents rising damp from the foundation into the superstructure. IS 1580 specifies minimum 250 micron (1000 gauge) LDPE sheet for standard DPC applications — we manufacture to this specification and above for basements, water tanks and high-moisture environments. Our sheets are used on residential projects, commercial buildings and industrial facilities across Hyderabad and the wider Telangana region.</p>

<h3>Road and Highway Construction</h3>
<p>LDPE sheets are used as subgrade moisture barriers in highway and road construction across Telangana and Andhra Pradesh — including National Highway projects, state highway improvements and urban road construction in Hyderabad. We supply to contractors and government project vendors in the roll dimensions and thickness specified by NHAI and state PWD project specifications. Delivery to project sites across the two states is available.</p>

<h3>Waterproofing, Tunnelling and Underground Construction</h3>
<p>Underground construction and tunnelling projects use LDPE sheets as primary waterproofing membranes. Basement construction in Hyderabad's variable soil conditions requires reliable moisture barriers — we supply the specification grades required for these applications with the material documentation your structural engineer needs.</p>`,

    faqs: [
      { q: 'What thickness of LDPE sheet is required for DPC in construction?', a: 'IS 1580 specifies minimum 250 micron (1000 gauge) for standard DPC applications. For basements, water-retaining structures and areas with high hydrostatic pressure, structural engineers typically specify 400–500 micron. We manufacture to any project specification — share your engineer\'s requirement and we will supply accordingly.' },
      { q: 'Do you supply LDPE sheets for road construction projects in Telangana?', a: 'Yes. We supply LDPE subgrade barrier sheets to road and highway construction projects across Telangana and Andhra Pradesh. We deliver to project sites. Share your project location, specification and quantity for a supply quote.' },
      { q: 'What is the difference between recycled and virgin LDPE for construction?', a: 'Recycled LDPE provides the same moisture barrier performance at lower cost — suitable for DPC and subgrade applications where material purity certification is not required. Virgin LDPE is recommended when the structural engineer specifies virgin-grade material or when material certificates for high-value infrastructure projects are needed.' },
      { q: 'Can LDPE sheets be used as pond liners for construction site water management?', a: 'Yes. Black LDPE sheets in 300–500 micron thickness are used for temporary water containment and dewatering ponds on construction sites across Hyderabad. We supply in the dimensions required for your site layout.' },
    ],

    productIds: ['ldpe-sheets', 'ldpe-cover'],
    relatedIndustries: ['agriculture', 'cold-storage-logistics'],
  },

  // ─── 4. AGRICULTURE ───────────────────────────────────────────
  {
    id: 'agriculture',
    slug: 'agriculture',
    name: 'Agriculture & Horticulture',
    // icon: '🌾',
    badge: 'UV Stabilised · Telangana & AP Specific',
    heroTagline: 'Mulch Film and LDPE Solutions for Farmers',
    headline: 'UV-Resistant Mulch Film for Telangana and Andhra Pradesh Farmers',
    subheadline: 'UV-stabilised LDPE mulch film manufactured in Hyderabad for South Indian growing conditions — supplying farmers, FPOs and agribusinesses across Telangana and Andhra Pradesh.',

    seoTitle: 'Mulch Film Supplier Telangana Andhra Pradesh | UV Resistant LDPE | Ushakiran Ecoplast Hyderabad',
    seoDescription: 'UV-stabilised LDPE mulch film for Telangana and Andhra Pradesh farmers. Increases yield, reduces irrigation and pesticide use. Black and silver available. Direct supply from Hyderabad manufacturer.',

    accentColor: '#3a7a2a',
    lightColor: '#eef7eb',
    darkColor: '#142610',

    challenge: {
      heading: 'South Indian crops need region-specific mulch film',
      body: 'National mulch film brands like Shalimar Group have no Telangana or Andhra Pradesh specific content, no regional agronomic guidance and no local supply presence. Their products are not formulated or positioned for the specific UV intensity, soil conditions and crop mix of South India. Ushakiran Ecoplast manufactures in Hyderabad — for South Indian conditions, with direct farm delivery across both states.',
      stats: [
        { value: '20–40%', label: 'Typical yield increase with mulch film' },
        { value: '30–50%', label: 'Reduction in irrigation water requirement' },
        { value: '60–80%', label: 'Reduction in manual weeding costs' },
      ]
    },

    whyUkep: [
      { icon: '☀️', title: 'South Indian UV Stabilisation', body: 'Our mulch films are UV-stabilised for the intense solar radiation of Telangana and AP summers — delivering full-season performance that national generic brands cannot guarantee for your specific climate.' },
      { icon: '🌿', title: 'Black and Silver Options', body: 'Black film for weed suppression and soil warming. Silver/grey film for insect repellence on chilli, capsicum and cucurbit crops prevalent in AP and Telangana.' },
      { icon: '🚜', title: 'Direct Farm Delivery', body: 'We deliver mulch film directly to farms, FPOs and agricultural input dealers across Telangana and AP — faster than national brands shipping from North India.' },
      { icon: '📐', title: 'Bed-Matched Width', body: 'We manufacture in custom widths matched to your crop bed dimensions — from narrow row crops to wide vegetable beds — eliminating trimming waste on your farm.' },
      { icon: '💧', title: 'Drip Irrigation Compatible', body: 'Our mulch films are compatible with subsurface and surface drip irrigation systems — the primary irrigation method for vegetable and horticultural crops across both states.' },
      { icon: '🌱', title: 'LDPE Pond Liners Too', body: 'We also supply LDPE sheets for farm water storage ponds and LDPE covers for agricultural storage — a complete LDPE solution for your farm from one Hyderabad supplier.' },
    ],

    longContent: `<p>Ushakiran Ecoplast manufactures and supplies <strong>UV-resistant mulch film directly to farmers and agribusinesses across Telangana and Andhra Pradesh</strong> from our Hyderabad facility. We fill the regional gap left by national brands like Shalimar Group — who have strong national distribution but zero Telangana and AP-specific content, supply relationships or regional agronomic support.</p>

<p>Agricultural plastic film in Telangana and Andhra Pradesh faces specific performance requirements — intense summer UV radiation, variable monsoon seasons, a diverse crop mix including chilli, cotton, tomato, maize, rice, vegetables and horticulture crops, and small-to-medium farm sizes that require flexible ordering. We manufacture for these exact conditions.</p>

<h3>Mulch Film Benefits for Telangana Vegetable Farmers</h3>
<p>For vegetable farmers across Telangana growing tomato, brinjal, okra, chilli and leafy vegetables, mulch film delivers measurable returns every growing cycle. Soil moisture retention reduces drip irrigation frequency by 30–50% — a critical cost saving given rising electricity and water costs across the state. Weed suppression under the mulch layer eliminates 2–3 rounds of manual weeding per season, saving significant labour costs. Root zone temperature regulation improves plant establishment and reduces transplanting stress.</p>

<h3>Silver Mulch Film for Andhra Pradesh Chilli and Capsicum Growers</h3>
<p>Andhra Pradesh is India's largest chilli producing state. Chilli, capsicum and cucurbit crops are highly susceptible to thrips, aphids and whiteflies — insects that act as vectors for viral diseases that can devastate crop yields. Silver or grey mulch film reflects UV light and disorients these insects, dramatically reducing their landing rate on crops and slowing viral disease spread. AP chilli growers using silver mulch film report significantly reduced pesticide application costs and lower incidence of leaf curl and mosaic viruses.</p>

<h3>LDPE Solutions for Agricultural Storage and Water Management</h3>
<p>Beyond mulch film, we supply LDPE sheets for farm pond lining for water storage and aquaculture across Telangana and AP, LDPE covers for protecting stored grain, seeds and fertiliser from moisture and pests, and LDPE sheets for greenhouse and low-tunnel construction for protected cultivation. A complete agricultural LDPE supply from one Hyderabad manufacturer.</p>`,

    faqs: [
      { q: 'What mulch film thickness is right for vegetable crops in Telangana?', a: 'For a single growing season in Telangana, 25–30 micron offers the best cost-to-performance ratio for standard vegetable crops. For high-value horticulture or crops with longer growing periods, 40–50 micron provides better durability and can be reused across two seasons. Contact us for a recommendation based on your specific crop and location.' },
      { q: 'What is the difference between black and silver mulch film for AP crops?', a: 'Black mulch film suppresses weeds by blocking sunlight and warms the soil — ideal for most vegetable crops including tomato, brinjal, okra and leafy vegetables. Silver/grey film reflects UV to repel thrips, aphids and whiteflies that spread viral diseases in chilli, capsicum and cucurbits — crops where insect pressure is a primary concern in AP.' },
      { q: 'Do you supply mulch film directly to farmers in Telangana and AP?', a: 'Yes. We supply directly to farmers, FPOs, agricultural input dealers and horticulture companies across Telangana and Andhra Pradesh from our Hyderabad facility. Delivery to farm location is available. Contact us for pricing based on your crop area requirements.' },
      { q: 'Can you supply LDPE sheets for farm pond lining in Telangana?', a: 'Yes. Black LDPE sheets in 200–500 micron are widely used for farm pond lining across Telangana and AP. We supply in dimensions matched to your pond area and advise on the appropriate thickness for your soil conditions and water depth.' },
    ],

    productIds: ['crop-cover', 'ldpe-sheets', 'ldpe-cover'],
    relatedIndustries: ['construction', 'cold-storage-logistics'],
  },

  // ─── 5. FMCG & RETAIL ─────────────────────────────────────────
  {
    id: 'fmcg-retail',
    slug: 'fmcg-retail',
    name: 'FMCG & Retail',
    // icon: '🛒',
    badge: 'Custom Printing · ESG Procurement',
    heroTagline: 'Packaging Films for FMCG and Retail Brands',
    headline: 'Shrink Film, Stretch Film and Roll Bags for FMCG and Retail Operations',
    subheadline: 'ISO certified packaging films for product bundling, pallet wrapping and retail dispensing — supplying FMCG brands, supermarket chains and retail operations across India from Hyderabad.',

    seoTitle: 'Shrink Film and Stretch Film Manufacturer Hyderabad | FMCG Retail Packaging | Ushakiran Ecoplast',
    seoDescription: 'LDPE shrink film, stretch wrap film and bags on rolls for FMCG brands and retail chains. Tamper-evident packaging, pallet wrapping and retail dispensing. ISO certified manufacturer in Hyderabad.',

    accentColor: '#7a6a2a',
    lightColor: '#faf7ed',
    darkColor: '#2d2510',

    challenge: {
      heading: 'FMCG packaging films need consistent quality every batch',
      body: 'For FMCG brands and supermarket chains, packaging film inconsistency means production line stoppages, retailer rejections and supply chain disruption. Stretch film that loses tension mid-pallet, shrink film that does not activate at the right temperature, or roll bags that tear at the perforation — any of these failures is a cost that far exceeds the saving made on a cheaper bag supplier.',
      stats: [
        { value: '300%', label: 'Maximum stretch on our pallet wrap film' },
        { value: '70–120µ', label: 'Shrink film thickness range available' },
        { value: '90%', label: 'Customer retention — FMCG clients stay with us' },
      ]
    },

    whyUkep: [
      { icon: '🎯', title: 'Consistent Batch Quality', body: 'Every roll in every batch is manufactured to the same specification. No variation in stretch performance, shrink activation temperature or perforation strength.' },
      { icon: '🔒', title: 'Tamper-Evident Shrink Seals', body: 'Our shrink film provides the consumer-visible tamper-evident seal required for FMCG, pharma and food products across modern retail channels.' },
      { icon: '🏭', title: 'Machine-Compatible Formats', body: 'Centrefold shrink film for L-sealers, machine roll stretch film for automated wrappers — we supply in the format and dimension your packaging line requires.' },
      { icon: '♻️', title: 'Green Packaging Credentials', body: 'Recycled LDPE options available for outer bundling and pallet wrap — supporting your brand\'s ESG procurement commitments and sustainability reporting.' },
      { icon: '🛒', title: 'Retail Dispensing Rolls', body: 'Custom bags on rolls for supermarket produce sections, checkout counters and food service counters — matched to your dispensers and branded to your specification.' },
      { icon: '🚚', title: 'Pan-India Supply', body: 'From our Hyderabad facility to FMCG distribution centres, retail warehouses and manufacturing plants across India — consistent quality at every delivery.' },
    ],

    longContent: `<p>Ushakiran Ecoplast supplies <strong>packaging films to FMCG brands and retail chains</strong> across India from our Hyderabad manufacturing facility. Our product range for the FMCG and retail sector includes LDPE shrink film for tamper-evident product packaging and multi-pack bundling, stretch wrap film for pallet wrapping and load securing, and bags on rolls for retail dispensing and food service applications.</p>

<p>The FMCG packaging film market in India has a significant gap in the eco-positioning space. No major competitor is actively targeting FMCG brands with recycled LDPE packaging film for their ESG procurement programmes. Ushakiran Ecoplast fills this gap — offering the same performance specifications in recycled LDPE for applications where food-grade virgin material is not required, supporting your brand's sustainability reporting with certified recycled content documentation.</p>

<h3>Shrink Film for FMCG Product Packaging</h3>
<p>Our LDPE shrink film is used across FMCG applications including multi-pack bundling for beverage bottles and personal care products, individual product wrapping for shelf presentation, promotional bundle packs and gift sets, and tamper-evident outer sealing for food and pharma products. We manufacture in flat roll, centrefold and pre-formed bag formats — all compatible with standard L-sealer and shrink tunnel equipment used across Indian FMCG packaging lines.</p>

<h3>Stretch Film for FMCG Distribution</h3>
<p>FMCG distribution operations require reliable pallet wrapping to protect goods from the factory to the retailer. Our stretch wrap film with up to 300% elongation delivers consistent load containment across hand wrapping and automated machine wrapping operations. We supply both hand roll and machine roll formats in the thickness and width your distribution operation requires — with volume pricing for recurring monthly supply contracts.</p>

<h3>Bags on Rolls for Supermarket and Retail Operations</h3>
<p>Supermarket chains and standalone retail stores use our bags on rolls at produce sections, checkout counters, deli and bakery counters and food service stations. Custom printing with retail brand logos is available — increasingly used by retail chains to communicate sustainability credentials to shoppers at the point of use. We supply consistent quality across single stores and large multi-city retail networks.</p>`,

    faqs: [
      { q: 'Can your shrink film be used on automated packaging lines?', a: 'Yes. We manufacture centrefold shrink film for L-sealer and shrink tunnel operations used across FMCG packaging lines. Share your machine model, product dimensions and required shrink percentage and we will supply the compatible film specification. Samples available before bulk orders.' },
      { q: 'Do you supply recycled LDPE packaging film for ESG procurement?', a: 'Yes. We offer recycled LDPE options for shrink film (outer bundling), stretch wrap and bags on rolls — providing certified recycled content documentation for your ESG procurement reporting. This is an unclaimed positioning in the Indian FMCG packaging market that we actively support.' },
      { q: 'What stretch film thickness do you recommend for FMCG pallet wrapping?', a: 'For standard FMCG pallets (typically 500–800kg), 20–23 micron hand roll or machine roll stretch film is sufficient. For heavier or irregular pallets, 25–30 micron provides better containment. We supply samples for testing before bulk supply agreements.' },
      { q: 'Can bags on rolls be custom printed for retail chain branding?', a: 'Yes. We print retail brand logos, sustainability messaging and product information on bags on rolls for supermarket chains. Custom printed rolls are popular with chains building visible sustainability programmes for shoppers. Minimum order quantities apply.' },
    ],

    productIds: ['shrink-film', 'stretch-film', 'bags-on-rolls'],
    relatedIndustries: ['cold-storage-logistics', 'hospitality'],
  },

  // ─── 6. FACILITY MANAGEMENT ───────────────────────────────────
  {
    id: 'facility-management',
    slug: 'facility-management',
    name: 'Facility Management',
    // icon: '🏢',
    badge: 'Bulk Supply · Pan-India Delivery',
    heroTagline: 'Waste Solutions for Large Facility Operations',
    headline: 'Garbage Bags for MNCs, Airports, Railways and Corporate Campuses',
    subheadline: 'Consistent quality, bulk supply and customised specifications for facility management companies operating large commercial campuses, airports, railways and MNC offices across India.',

    seoTitle: 'Garbage Bags for Facility Management Companies India | Bulk Supply | Ushakiran Ecoplast',
    seoDescription: 'Bulk garbage bags for facility management companies, MNCs, airports and corporate campuses. Custom sizes, colours and printing. ISO certified manufacturer in Hyderabad. Pan-India delivery.',

    accentColor: '#1a4a6b',
    lightColor: '#edf3f8',
    darkColor: '#0d1e2d',

    challenge: {
      heading: 'Facility management needs zero-failure waste supply',
      body: 'A facility management company managing 50 buildings across a city cannot afford a waste bag stockout or quality failure. Torn bags in a high-footfall lobby, wrong-sized bags that staff have to fold down, or delayed deliveries that disrupt the morning cleaning shift — all of these create client complaints and contract risk. You need a supplier with consistent quality, reliable delivery and the flexibility to handle your scale.',
      stats: [
        { value: '50M+', label: 'kg of plastic recycled at our facility' },
        { value: '90%', label: 'Customer retention across all facility clients' },
        { value: '24hr', label: 'Order to dispatch for Hyderabad orders' },
      ]
    },

    whyUkep: [
      { icon: '📦', title: 'Bulk Contract Supply', body: 'Monthly or quarterly supply contracts available for facility management companies managing multiple accounts — with consistent pricing and scheduled delivery.' },
      { icon: '🗂️', title: 'Multi-SKU Orders', body: 'We handle single orders across multiple bag sizes, colours and formats — consolidated supply for all the bins across your managed properties.' },
      { icon: '🖨️', title: 'Client-Branded Bags', body: 'Custom print your facility management brand or your client\'s brand on bags — a visible quality signal during client walkthroughs and inspections.' },
      { icon: '🌐', title: 'Pan-India Delivery', body: 'Supply to your central warehouse or directly to managed properties across Hyderabad, Telangana and pan-India from our manufacturing facility.' },
      { icon: '♻️', title: 'Recycled LDPE Credentials', body: 'Support your clients\' ESG reporting with documented recycled LDPE content — increasingly required in MNC and corporate facility management contracts.' },
      { icon: '⚡', title: 'Rapid Order Response', body: 'Same-day dispatch for Hyderabad orders, next-day for Telangana and AP. We understand that facility operations cannot wait for a 7-day lead time.' },
    ],

    longContent: `<p>Ushakiran Ecoplast is a preferred supplier to <strong>facility management companies managing MNC campuses, corporate offices, airports, railway stations and large commercial properties</strong> across Hyderabad and pan-India. We have supplied to the facility management sector consistently since 2013 with a 90% customer retention rate — a reflection of the supply reliability that FM contracts demand.</p>

<p>Facility management waste requirements are different from direct end-user procurement. An FM company managing 30 client accounts needs a single supplier that can handle multiple bag specifications, consistent quality across large volumes, and reliable delivery that doesn't disrupt cleaning schedules across managed properties.</p>

<h3>Supplying Large Corporate Campuses and MNC Offices</h3>
<p>MNC campuses and corporate offices across Hyderabad — particularly in HITEC City, Gachibowli and the Financial District — generate significant daily waste volumes across multiple building and floor configurations. We supply colour-coded garbage bags matched to the waste segregation system implemented across the campus, in the exact sizes required for each bin type across the property. Custom printing with the facility management company's brand or the client's corporate sustainability messaging is available.</p>

<h3>Airport and Railway Station Supply</h3>
<p>Airports and railway stations have among the highest waste volumes of any facility type — with continuous generation across terminal buildings, platforms, food courts and service areas. We supply heavy-duty garbage bags in the sizes and quantities required for these high-throughput environments, with the strength specifications needed for mixed waste including food waste, packaging and general travel waste. Regular supply to Hyderabad's Rajiv Gandhi International Airport and railway stations across Telangana is part of our established supply network.</p>

<h3>ESG Procurement Support for Corporate Facility Contracts</h3>
<p>MNC and corporate clients increasingly require their FM vendors to demonstrate sustainable procurement. Our 100% recycled LDPE bags provide the documented recycled content that facility management companies need to fulfil their clients' ESG vendor requirements — a capability that most garbage bag suppliers in Hyderabad cannot provide.</p>`,

    faqs: [
      { q: 'Can you handle bulk supply for a facility management company with multiple clients?', a: 'Yes. We regularly supply facility management companies with orders across multiple bag specifications — different sizes, colours and formats for different client accounts. We consolidate into a single order and can deliver to your central warehouse or directly to managed properties.' },
      { q: 'What is your minimum order quantity for facility management contracts?', a: 'MOQ is flexible for FM contracts. We accommodate both large standing orders and ad-hoc top-up orders. For regular monthly supply, we offer contract pricing with guaranteed stock availability. Contact us to discuss your volume and frequency.' },
      { q: 'Do you supply to corporate campuses in HITEC City and Gachibowli?', a: 'Yes. We supply to corporate campuses and managed properties across Hyderabad including HITEC City, Gachibowli, the Financial District and Secunderabad. Same-day dispatch is available for urgent Hyderabad orders.' },
      { q: 'Can you provide recycled content documentation for MNC ESG requirements?', a: 'Yes. We provide material certificates confirming 100% post-consumer recycled LDPE content for our garbage bags — supporting your clients\' ESG procurement requirements and your own sustainability reporting to FM contract holders.' },
    ],

    productIds: ['garbage-bags', 'bags-on-rolls'],
    relatedIndustries: ['hospitality', 'healthcare'],
  },

  // ─── 7. PHARMA & LABORATORIES ─────────────────────────────────
  {
    id: 'pharma-laboratories',
    slug: 'pharma-laboratories',
    name: 'Pharma & Laboratories',
    // icon: '🔬',
    badge: 'GMP Compliant · ISO Certified',
    heroTagline: 'Certified Plastic Solutions for Pharma',
    headline: 'GMP Compliant Packaging and Waste Bags for Pharma and Laboratory Use',
    subheadline: 'ISO certified, GMP compliant LDPE films and BMWM-compliant waste bags for pharmaceutical manufacturing facilities, R&D laboratories and diagnostic centres across India.',

    seoTitle: 'Pharma Packaging Bags and LDPE Film Manufacturer Hyderabad | GMP Compliant | Ushakiran Ecoplast',
    seoDescription: 'GMP compliant LDPE packaging film, shrink film and BMWM waste bags for pharma companies and laboratories in Hyderabad. ISO certified manufacturer. Green packaging for pharma ESG procurement.',

    accentColor: '#1a6b7a',
    lightColor: '#edf7f8',
    darkColor: '#0d2530',

    challenge: {
      heading: 'Pharma packaging requires GMP compliance and material traceability',
      body: 'Pharmaceutical manufacturing has strict material traceability requirements — every packaging film used in production must have a documented supply chain, material certificates and GMP compliance. Using uncertified packaging film from an unverified supplier creates audit risk during GMP inspections and regulatory review. The right supplier provides both the product and the documentation trail your quality team requires.',
      stats: [
        { value: 'GMP', label: 'Compliant manufacturing at Ushakiran Ecoplast' },
        { value: 'ISO', label: 'Certified facility in Hyderabad' },
        { value: '100%', label: 'Material traceability from raw material to finished product' },
      ]
    },

    whyUkep: [
      { icon: '📋', title: 'Material Certificates', body: 'Full material traceability documentation provided — raw material source, production batch records and finished product specifications for your GMP audit file.' },
      { icon: '🔬', title: 'Virgin LDPE for Direct Contact', body: 'Virgin LDPE grade films and bags for applications requiring direct contact with pharmaceutical products — with the purity specifications your QA team requires.' },
      { icon: '🌱', title: 'Green Pharma Packaging', body: 'Recycled LDPE for outer packaging, pallet wrap and waste bags — supporting your ESG procurement programme as green packaging supplier for pharma India.' },
      { icon: '🏭', title: 'GMP Manufacturing Environment', body: 'Manufactured in a GMP-compliant facility in Hyderabad with documented production controls and quality inspection at each production stage.' },
      { icon: '🎨', title: 'BMWM Waste Bags', body: 'Complete range of BMWM Rules 2016 compliant colour-coded waste bags for your pharma facility\'s laboratory and production area waste segregation requirements.' },
      { icon: '📦', title: 'Shrink Film for Tamper Evidence', body: 'LDPE shrink film for tamper-evident outer packaging of pharmaceutical products — compatible with standard pharma packaging line equipment.' },
    ],

    longContent: `<p>Ushakiran Ecoplast supplies <strong>GMP compliant packaging films and BMWM-compliant waste management bags to pharmaceutical manufacturing companies and R&D laboratories</strong> across Hyderabad, Telangana and pan-India. Our ISO certified facility provides the material traceability and quality documentation that pharma procurement and QA teams require.</p>

<p>The keyword opportunity here is significant — nobody is targeting "green packaging supplier pharma India" or "eco friendly packaging film pharma Hyderabad" despite growing demand from pharma ESG procurement teams. Ushakiran Ecoplast owns this positioning with our recycled LDPE options and certified supply chain.</p>

<h3>Packaging Films for Pharma Manufacturing</h3>
<p>LDPE shrink film for outer tamper-evident packaging of drug products and nutraceuticals. LDPE covers for protecting equipment, components and bulk drug storage during production and warehousing. Stretch film for pallet wrapping finished goods in the dispatch area. LDPE sheets for cleanroom surface protection and equipment cover applications. All supplied in virgin LDPE grade for GMP compliance with full material documentation.</p>

<h3>BMWM-Compliant Waste Bags for Pharma Facilities</h3>
<p>Pharmaceutical manufacturing facilities generate regulated biomedical waste from their quality control laboratories, clinical trial operations and manufacturing processes. BMWM Rules 2016 apply to these facilities — colour-coded waste bags must meet the same specifications as hospital bags. We supply the complete BMWM range to pharma facilities across Hyderabad with the compliance documentation required for PCB inspection.</p>

<h3>ESG Procurement — Green Packaging for Pharma India</h3>
<p>Indian pharmaceutical companies are under increasing pressure from international clients, ESG investors and regulatory bodies to demonstrate sustainable procurement. Our recycled LDPE options for outer packaging, pallet wrap and waste bags — with documented recycled content certificates — position you to meet these requirements. We are one of very few manufacturers in Hyderabad offering verified recycled LDPE for pharma supply chains.</p>`,

    faqs: [
      { q: 'Do you provide material certificates for pharma GMP audits?', a: 'Yes. We provide full material traceability documentation including raw material source, production batch records and finished product specification certificates for all products supplied to pharmaceutical companies. Our documentation is structured to support GMP audit requirements.' },
      { q: 'Is your LDPE film suitable for direct contact with pharmaceutical products?', a: 'Virgin LDPE grade is suitable for direct pharmaceutical product contact applications. We recommend virgin grade for inner packaging and direct product contact, and recycled grade for outer packaging, pallet wrap and waste applications. Specify your application and we will recommend the appropriate grade.' },
      { q: 'Do you supply BMWM-compliant waste bags to pharma facilities?', a: 'Yes. Pharmaceutical manufacturing facilities with QC labs and clinical operations are subject to BMWM Rules 2016. We supply the complete colour-coded range to pharma facilities across Hyderabad and pan-India with full compliance documentation.' },
      { q: 'Can you supply recycled packaging film for our ESG procurement requirements?', a: 'Yes. We supply recycled LDPE packaging film with certified recycled content documentation for pharma companies building sustainable procurement programmes. This includes shrink film for outer bundling, stretch film for pallet wrap and LDPE covers for storage applications.' },
    ],

    productIds: ['bio-medical-bags', 'shrink-film', 'ldpe-cover'],
    relatedIndustries: ['healthcare', 'fmcg-retail'],
  },

  // ─── 8. COLD STORAGE & LOGISTICS ──────────────────────────────
  {
    id: 'cold-storage-logistics',
    slug: 'cold-storage-logistics',
    name: 'Cold Storage & Logistics',
    // icon: '🚛',
    badge: 'High-Stretch Film · Moisture Resistant',
    heroTagline: 'Packaging Films for Warehousing and Logistics',
    headline: 'Stretch Film and LDPE Solutions for Cold Storage and Logistics Operations',
    subheadline: 'High-performance stretch wrap film and moisture protection covers for warehousing, cold storage and logistics operations — bulk manufacturer in Hyderabad with pan-India supply.',

    seoTitle: 'Stretch Wrap Film for Warehouses and Cold Storage Hyderabad | LDPE Logistics Film | Ushakiran Ecoplast',
    seoDescription: 'High-stretch LDPE pallet wrap film and moisture protection covers for warehouses and cold storage in Hyderabad. Up to 300% elongation. Hand and machine roll. Bulk manufacturer. Pan-India supply.',

    accentColor: '#2a6b7a',
    lightColor: '#edf7f9',
    darkColor: '#0d2530',

    challenge: {
      heading: 'Load failures in transit cost more than the film saving',
      body: 'In warehousing and logistics, stretch film that loses cling after a day in cold storage, tears during machine wrapping or fails to maintain load stability on a long-haul truck is not a minor inconvenience — it is damaged goods, retailer claims and supply chain disruption. The cost of a single pallet failure during transit far exceeds any saving made on cheaper film.',
      stats: [
        { value: '300%', label: 'Maximum elongation on our stretch wrap film' },
        { value: '-20°C', label: 'Cold storage compatible film formulation' },
        { value: '17–35µ', label: 'Full thickness range for all load types' },
      ]
    },

    whyUkep: [
      { icon: '❄️', title: 'Cold Storage Rated', body: 'Our stretch film maintains cling and containment performance at cold storage temperatures — no brittleness or cling failure in refrigerated or frozen storage environments.' },
      { icon: '⚙️', title: 'Machine Roll Compatible', body: 'Machine roll stretch film in the width, core size and roll weight required by your automated pallet wrapper — tested for consistent tension performance through the full roll.' },
      { icon: '💧', title: 'Moisture Barrier Covers', body: 'LDPE covers and sheets for protecting stored goods from moisture in high-humidity warehouse environments and during rain-exposed loading dock operations.' },
      { icon: '📏', title: 'All Load Sizes', body: 'From 17 micron for light standard pallets to 35 micron for heavy, sharp-cornered industrial loads — we supply the right film for every pallet type in your operation.' },
      { icon: '🚚', title: 'Hyderabad Logistics Hub', body: 'Our Hyderabad facility serves the growing logistics and warehousing hub in the Telangana region — with fast delivery to warehouses and distribution centres across the city and state.' },
      { icon: '♻️', title: 'Recycled Stretch Film', body: 'Recycled LDPE stretch film available for operations building sustainable procurement programmes — same performance with certified recycled content documentation.' },
    ],

    longContent: `<p>Ushakiran Ecoplast supplies <strong>stretch wrap film and LDPE protective covers to warehouses, cold storage facilities and logistics operations</strong> across Hyderabad, Telangana and pan-India. Our stretch films are manufactured to perform consistently across the full range of Indian logistics conditions — from ambient warehouses to -20°C cold storage environments.</p>

<p>Hyderabad has emerged as a significant logistics hub in South India — with large warehousing clusters in Patancheru, Medchal, Shamshabad and along the Outer Ring Road. Ushakiran Ecoplast, manufacturing locally in Hyderabad, provides faster supply and more responsive service to logistics operations in the region compared to suppliers shipping from other states.</p>

<h3>Pallet Wrapping for Warehousing Operations</h3>
<p>Consistent pallet wrapping is the foundation of load protection in any warehousing operation. Our stretch wrap film delivers up to 300% elongation with excellent cling — maintaining load containment from the warehouse floor through transit to the retailer's receiving dock. We supply both hand roll for manual wrapping operations and machine roll for automated pallet wrappers — in the thickness and width your operation requires.</p>

<h3>Cold Storage Specific Requirements</h3>
<p>Cold storage stretch film must maintain cling and containment at low temperatures without becoming brittle or losing adhesion when pallets are moved between temperature zones. Our cold storage grade stretch film is formulated for performance down to -20°C — suitable for frozen food warehouses, pharmaceutical cold chains and perishable produce storage operations across Hyderabad and Telangana.</p>

<h3>LDPE Covers and Sheets for Warehouse Protection</h3>
<p>Beyond pallet wrapping, we supply LDPE covers for protecting stored machinery, equipment and large format goods from dust and moisture in warehouse environments. LDPE sheets for lining storage areas, protecting floors during loading operations and creating moisture barriers in high-humidity storage bays. A complete LDPE solution for warehouse and logistics operations from one Hyderabad manufacturer.</p>`,

    faqs: [
      { q: 'Does your stretch film work in cold storage environments?', a: 'Yes. We supply cold storage grade stretch film formulated for performance at temperatures down to -20°C. This maintains cling and load containment in refrigerated and frozen storage environments without brittleness or adhesion failure when pallets move between temperature zones.' },
      { q: 'What stretch film do you recommend for automated pallet wrappers?', a: 'We manufacture machine roll stretch film in the width, core size and roll weight specified by your pallet wrapper model. Share your machine model and we will confirm the compatible film specification. We supply both pre-stretch and standard machine roll formats.' },
      { q: 'Do you supply to logistics companies and 3PLs in Hyderabad?', a: 'Yes. We supply stretch film and LDPE covers to warehousing companies, 3PL operators and distribution centres across Hyderabad and Telangana. Our local manufacturing provides faster delivery and more responsive service than suppliers shipping from other states. Volume pricing available for regular monthly requirements.' },
      { q: 'Can you supply LDPE covers for protecting machinery in warehouses?', a: 'Yes. We manufacture LDPE covers to custom dimensions for protecting stored machinery, equipment and large format goods from dust and moisture in warehouse environments. Share your equipment dimensions for a custom cover quote.' },
    ],

    productIds: ['stretch-film', 'ldpe-cover', 'ldpe-sheets'],
    relatedIndustries: ['fmcg-retail', 'construction'],
  },

]

export function getIndustryBySlug(slug) {
  return industries.find(i => i.slug === slug)
}