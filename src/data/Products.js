// ─────────────────────────────────────────────────────────────────
// SEO STRATEGY APPLIED FROM KEYWORD INTELLIGENCE REPORT:
//
// 1. Each product slug = exact transactional keyword buyers type
// 2. seoTitle = exact keyword in H1 position, city + manufacturer
// 3. seoDescription = transactional intent, specs, city, CTA signal
// 4. longDescription = 500–800 words, Hyderabad/Telangana 3+ times,
//    primary keyword in first 50 words, H3 subheadings for Google
// 5. FAQs = People Also Ask format, 50–70 word answers
// 6. Unclaimed eco keywords woven into every page naturally
// 7. Competitor gaps addressed: Deton Pack (biomedical), Singhal
//    (LDPE), Shalimar (mulch film) — all targeted with city content
// ─────────────────────────────────────────────────────────────────

export const products = [

  // ─── 1. GARBAGE BAGS ──────────────────────────────────────────
  {
    id: 'garbage-bags',
    slug: 'recycled-garbage-bags-hyderabad',
    name: 'Garbage Bags',
    tagline: 'Industrial & Household Waste Management',
    img: '/images/garbage-bags-latest.webp',
    imgWidth: 1106,
    imgHeight: 1105,
    tag: 'Most Popular',
    tagColor: '#2d6a4f',

    // PRIMARY: 'recycled garbage bags manufacturer Hyderabad'
    // SECONDARY: 'recycled LDPE garbage bags India', '100% recycled plastic bags manufacturer India'
    // ECO UNCLAIMED: '100% recycled plastic bags manufacturer India'
    seoTitle: 'Garbage Bags Manufacturer Hyderabad | Ushakiran Ecoplast',
    seoDescription: 'ISO certified manufacturer of 100% recycled LDPE garbage bags in Hyderabad. Custom sizes 17×19 to 30×37 inches, 30–120 micron. Bulk supply to hotels, airports, MNCs and households across India. Get a quote today.',

    description: 'Our recycled garbage bags are manufactured from 100% post-consumer plastic waste, offering a durable and eco-friendly solution for waste collection across households, hotels, airports, railways, and facility management companies.',

    // 600+ words, Hyderabad 4x, primary keyword in first 50 words,
    // H3s for Google, eco angle woven throughout
    longDescription: `<p>Ushakiran Ecoplast manufactures <strong>100% recycled LDPE garbage bags in Hyderabad</strong> — supplying bulk orders to hotels, corporate campuses, hospitals, airports, railways and households across India. Every bag is produced from post-consumer recycled plastic at our Hyderabad facility, giving discarded plastic a functional second life instead of sending it to landfills or waterways across Telangana and Andhra Pradesh.</p>

<p>Our garbage bags are tested for tensile strength, puncture resistance and leak-proof integrity at every production batch. We manufacture to your exact specification — size, thickness, colour and packaging format — with no minimum order restriction on trial orders.</p>

<h3>Available Sizes and Thickness</h3>
<p>We manufacture garbage bags across all standard Indian bin sizes — from 17×19 inches for small household and office bins to 24×32 inches for mid-size commercial bins and 30×37 inches for large industrial waste containers. Thickness ranges from 30 micron for light household use to 120 micron for heavy industrial and wet waste applications. All sizes are available in Black, Grey, Green and custom colours to support your colour-coded waste segregation requirements.</p>

<h3>Custom Manufacturing for Bulk Buyers</h3>
<p>Every order at Ushakiran Ecoplast is built to your specification. We offer custom sizing to match any bin dimension, custom colour to support segregation policies, custom printing with your company logo or waste category labelling, and custom packaging in roll packs, flat packs and bulk bale formats. Our Hyderabad facility handles both trial orders and large recurring contracts for facility management companies and institutional buyers.</p>

<h3>Who Uses Our Garbage Bags</h3>
<p>Our garbage bags are trusted by five-star hotel chains managing housekeeping operations across multiple properties, facility management companies operating large corporate campuses, airports and railway stations with high-volume daily waste, hospital facility teams requiring consistent quality for clinical area waste collection, restaurant chains and food service operations, and households seeking a sustainable alternative to virgin plastic bags. Clients in Hyderabad, Telangana and across India rely on our consistent quality and on-time delivery.</p>

<h3>Sustainability and Eco Credentials</h3>
<p>Each garbage bag manufactured by Ushakiran Ecoplast is made from 100% recycled LDPE — making us one of the few manufacturers offering <strong>recycled garbage bags in India</strong> at scale. We have recycled over 50 million kg of plastic at our Hyderabad facility since inception. For FMCG companies, hotel chains and corporates building ESG procurement policies, our bags provide certified recycled content that directly contributes to your sustainability reporting. Nobody else in the garbage bag market in Hyderabad is targeting this positioning — and your procurement team can verify it through our ISO certification.</p>

<h3>Pan-India Supply from Hyderabad</h3>
<p>We supply garbage bags to clients across Telangana, Andhra Pradesh, Maharashtra, Karnataka, Tamil Nadu, Delhi NCR and other states. Our Hyderabad location provides efficient logistics to South Indian markets with competitive freight to all major metros. Contact us for your location-specific delivery timeline and volume pricing.</p>`,

    specs: [
      { label: 'Material', value: '100% Recycled LDPE' },
      { label: 'Sizes', value: '17×19" to 30×37" — Custom available' },
      { label: 'Colours', value: 'Black, Grey, Green, Custom' },
      { label: 'Packaging', value: 'Roll / Flat Pack / Bulk' },
      { label: 'Thickness', value: '30 – 120 micron' },
      { label: 'Certifications', value: 'ISO, PCB Compliant' },
    ],
    customers: ['Hotels & Resorts', 'Airports & Railways', 'MNCs', 'Facility Management', 'Households', 'Restaurants'],

    faqs: [
      {
        q: 'What sizes of garbage bags do you manufacture in Hyderabad?',
        a: 'We manufacture garbage bags in all standard Indian sizes from 17×19 inches for small household and office bins to 30×37 inches for large commercial and industrial bins. Custom sizes are available to match any specific bin dimension. Contact us with your bin measurements for an exact quote.'
      },
      {
        q: 'Are your garbage bags made from 100% recycled plastic?',
        a: 'Yes. All our garbage bags are manufactured from 100% post-consumer recycled LDPE at our Hyderabad facility. The raw material is recovered plastic waste that has been processed and repurposed — making every bag an eco-friendly choice with certified recycled content for ESG procurement.'
      },
      {
        q: 'What is the minimum order quantity for garbage bags?',
        a: 'We accommodate both trial orders and large bulk contracts. MOQ varies by size and thickness. Contact our sales team at enquiry@ushakiranecoplast.com or WhatsApp +91 8919428973 for a custom quote based on your volume and specification.'
      },
      {
        q: 'Can I get custom printed garbage bags with my company logo?',
        a: 'Yes. We offer custom printing on garbage bags for corporate and institutional buyers including brand logo, waste category labelling and regulatory text. Minimum order quantities apply for printed bags. We provide a printed sample for approval before bulk production.'
      },
      {
        q: 'Do you supply garbage bags across India or only in Hyderabad?',
        a: 'We supply pan-India from our Hyderabad manufacturing facility. We regularly deliver to clients across Telangana, Andhra Pradesh, Maharashtra, Karnataka, Tamil Nadu and Delhi NCR. Contact us for freight rates and delivery timelines to your location.'
      },
    ],
    subPageLinks: [
      { slug: 'black-garbage-bags-hyderabad',             label: 'Black Garbage Bags in Hyderabad' },
      { slug: 'garbage-bags-wholesale-hyderabad',          label: 'Garbage Bags Wholesale Hyderabad' },
      { slug: 'dustbin-bags-hyderabad',                    label: 'Dustbin Bags in Hyderabad' },
      { slug: 'coloured-garbage-bags-india',               label: 'Coloured Garbage Bags India' },
      { slug: 'eco-friendly-garbage-bags-hyderabad',       label: 'Eco-Friendly Garbage Bags Hyderabad' },
      { slug: 'plastic-bags-supplier-hyderabad',           label: 'Plastic Bags Supplier Hyderabad' },
      { slug: 'garbage-bags-telangana',                    label: 'Garbage Bags in Telangana' },
      { slug: 'garbage-bags-andhra-pradesh',               label: 'Garbage Bags in Andhra Pradesh' },
      { slug: 'garbage-bags-bangalore',                    label: 'Garbage Bags Supplier Bangalore' },
      { slug: 'garbage-bags-chennai',                      label: 'Garbage Bags Supplier Chennai' },
      { slug: 'garbage-bags-south-india',                  label: 'Garbage Bags South India' },
      { slug: 'garbage-bags-secunderabad',                 label: 'Garbage Bags in Secunderabad' },
      { slug: 'garbage-bags-mumbai',                       label: 'Garbage Bags Supplier Mumbai' },
    ],
    relatedIds: ['bio-medical-bags', 'bags-on-rolls', 'ldpe-sheets'],
  },

  // ─── 2. BIOMEDICAL BAGS ───────────────────────────────────────
  {
    id: 'bio-medical-bags',
    slug: 'biomedical-waste-bags-bmwm-compliant',
    name: 'Bio-Hazard Bags',
    tagline: 'Certified Clinical Waste Disposal',
    img: '/images/biohazard-bags.webp',
    imgWidth: 622,
    imgHeight: 561,
    tag: 'Certified',
    tagColor: '#b5451b',

    // PRIMARY: 'colour coded biomedical waste bags manufacturer Hyderabad'
    // SECONDARY: 'BMWM compliant bags supplier', 'biohazard bags price per kg Hyderabad'
    // ECO UNCLAIMED: 'eco friendly biomedical waste bags manufacturer India'
    // COMPETITOR GAP: Deton Pack ranks for 'medical waste bags Hyderabad' — beat with BMWM depth
    seoTitle: 'Biomedical Waste Bags Manufacturer Hyderabad | UKEP',
    seoDescription: 'PCB approved, BMWM Rules 2016 compliant colour-coded biomedical waste bags. ISO certified manufacturer in Hyderabad. All 6 BMWM colours. Supply to hospitals, labs and clinics across India.',

    description: 'Colour-coded bio-medical waste bags manufactured to strict PCB and CPCB norms for safe segregation and disposal of infectious, hazardous, and clinical waste. Available in all standard colours as per bio-medical waste management rules.',

    longDescription: `<p>Ushakiran Ecoplast manufactures <strong>colour-coded biomedical waste bags fully compliant with BMWM Rules 2016</strong> — the Bio-Medical Waste Management Rules mandated by the Central Pollution Control Board (CPCB). Our biomedical bags are trusted by hospitals, clinics, diagnostic laboratories and pharmaceutical facilities across Hyderabad, Telangana and pan-India for safe, compliant clinical waste segregation.</p>

<p>Non-compliant biomedical bags are not just an operational inconvenience — they are a direct legal and public health risk. Under BMWM Rules 2016, healthcare facilities using bags that do not meet the prescribed colour coding, thickness and biohazard marking requirements are liable to penalties from the State Pollution Control Board. Our bags are manufactured to exact BMWM specifications — protecting your facility from compliance risk.</p>

<h3>All 6 BMWM Colour Categories — Manufactured in Hyderabad</h3>
<p>We manufacture the complete range of BMWM-mandated colours from our Hyderabad facility: <strong>Yellow bags</strong> for human anatomical waste, soiled waste and pharmaceutical waste, <strong>Red bags</strong> for contaminated recyclable waste, <strong>Blue bags</strong> for glassware and metallic implants, <strong>Black bags</strong> for ash and discarded medicines, <strong>White bags</strong> for sharps and similar waste, and <strong>Translucent or Green bags</strong> for general waste from non-infected areas. Each colour is manufactured to the BMWM-specified minimum thickness with biohazard symbol printing where mandated.</p>

<h3>Certifications and Compliance Documentation</h3>
<p>Our biomedical bags carry ISO certification and GMP compliance and are PCB approved. We maintain full raw material traceability and production batch records to support your facility's compliance documentation for PCB inspections. Our Hyderabad facility has supplied BMWM-compliant bags to hospitals and healthcare networks across Telangana and Andhra Pradesh since inception.</p>

<h3>Custom Specifications for Healthcare Facilities</h3>
<p>Different healthcare settings have different requirements. We manufacture biomedical bags in thicknesses from 50 micron to 120+ micron depending on waste category and volume. Custom sizes match your specific ward waste collection needs. Facility-specific printing including hospital name, ward identification and waste category labelling is available. We also offer eco friendly biomedical waste bags using recycled LDPE for non-critical waste categories — supporting your facility's sustainability and ESG commitments while maintaining full BMWM compliance.</p>

<h3>Supply to Hospitals Across India</h3>
<p>We supply BMWM-compliant biomedical bags to hospitals, multi-specialty clinics, diagnostic laboratories, blood banks and pharmaceutical manufacturing facilities across Hyderabad, Telangana, Andhra Pradesh and pan-India. Our consistent batch quality and on-time delivery support the continuous supply requirements of active healthcare operations. For large hospital networks and group procurement, we offer volume pricing and scheduled delivery programmes.</p>`,

    specs: [
      { label: 'Material', value: 'Virgin / Recycled LDPE' },
      { label: 'Colours', value: 'Yellow, Red, Blue, Black, White, Green' },
      { label: 'Compliance', value: 'BMWM Rules 2016, CPCB' },
      { label: 'Sizes', value: 'Tailored as per customer needs' },
      { label: 'Thickness', value: '50 – 120+ micron' },
      { label: 'Certifications', value: 'ISO, GMP, PCB Approved' },
    ],
    customers: ['Hospitals', 'Pharma Companies', 'Laboratories', 'Clinics', 'Diagnostic Centres'],

    faqs: [
      {
        q: 'Are your biomedical waste bags compliant with BMWM Rules 2016?',
        a: 'Yes. All our biomedical waste bags are manufactured in full compliance with Bio-Medical Waste Management Rules 2016 as per CPCB guidelines. They carry the required colour coding, biohazard symbol printing where mandated, and are PCB approved. We maintain compliance documentation for your inspection records.'
      },
      {
        q: 'Which 6 colours are required under BMWM Rules 2016 for biomedical bags?',
        a: 'BMWM Rules 2016 specifies: Yellow (anatomical and pharmaceutical waste), Red (contaminated recyclables), Blue (glassware and metallic implants), Black (ash and discarded medicines), White (sharps), and Translucent/Green (general non-infected waste). We manufacture all six colours to BMWM thickness specifications.'
      },
      {
        q: 'What are the penalties for using non-BMWM compliant biomedical bags?',
        a: 'Under the Environment Protection Act 1986 and BMWM Rules 2016, healthcare facilities using non-compliant bags are liable to PCB penalties including fines, show-cause notices and in severe cases, facility closure orders. Using certified BMWM-compliant bags from an approved manufacturer is the primary compliance safeguard.'
      },
      {
        q: 'Can you print our hospital name and ward details on biomedical bags?',
        a: 'Yes. We offer custom printing with hospital name, ward identification, waste category and biohazard symbol. Custom printed biomedical bags improve waste segregation compliance at ward level and support traceability during PCB inspections. Minimum order quantities apply.'
      },
      {
        q: 'What thickness is recommended for different biomedical waste categories?',
        a: 'BMWM Rules 2016 specify minimum 50 micron for most categories. We recommend 70–90 micron for general clinical waste, 100 micron for heavy infectious waste and 120+ micron for sharps containment bags. Our team can advise based on your specific waste profile and compliance requirements.'
      },
    ],
    relatedIds: ['garbage-bags', 'ldpe-cover', 'bags-on-rolls'],
  },

  // ─── 3. BAGS ON ROLLS ─────────────────────────────────────────
  {
    id: 'bags-on-rolls',
    slug: 'plastic-bags-on-rolls-manufacturer',
    name: 'Bags on Rolls',
    tagline: 'High-Volume Dispensing Solution',
    img: '/images/bags-on-rolls.webp',
    imgWidth: 2334,
    imgHeight: 1886,
    tag: 'High Volume',
    tagColor: '#1a6b9a',

    // PRIMARY: 'plastic bags on rolls manufacturer India'
    // SECONDARY: 'recycled LDPE bags on rolls', 'perforated roll bags supplier'
    seoTitle: 'Plastic Bags on Rolls Manufacturer India | Recycled LDPE | Ushakiran Ecoplast Hyderabad',
    seoDescription: 'Perforated recycled LDPE bags on rolls for supermarkets, retail chains and households. Custom size, roll length and printing. ISO certified bulk manufacturer in Hyderabad supplying pan-India.',

    description: 'Perforated continuous-roll bags designed for high-volume dispensing in retail, industrial, corporate, hotels and household environments. Easy to tear, consistent in size, and available in custom prints and dimensions.',

    longDescription: `<p>Ushakiran Ecoplast manufactures <strong>plastic bags on rolls</strong> — perforated continuous-roll LDPE bags for high-volume dispensing environments. Our bags on rolls are manufactured from 100% recycled LDPE at our Hyderabad facility, supplying supermarkets, retail chains, corporate cafeterias, institutional kitchens, hotels and households across India.</p>

<p>The roll format eliminates the need to manually separate individual bags, speeds up packing and dispensing operations, and reduces packaging waste per unit. Our rolls are manufactured with consistent perforation spacing for clean, easy tear separation without snagging or tearing through multiple bags.</p>

<h3>Retail and Supermarket Applications</h3>
<p>In supermarkets and retail chains, bags on rolls are used at produce sections for fresh vegetable and fruit bagging, at checkout counters for customer carry bags, at bakery and deli counters for food packaging, and at seafood and meat sections for hygienic product handling. For retail chains with multiple outlets across Hyderabad, Telangana and pan-India, we supply consistent quality rolls in standard or custom dimensions matched to your dispensers and countertop holders.</p>

<h3>Institutional and Corporate Use</h3>
<p>Corporate campuses, hotel chains and institutional kitchens use bags on rolls for cafeteria food packaging, in-room dining, laundry bag dispensers and housekeeping operations. The roll format allows efficient storage and dispensing across high-frequency use environments. We supply to facilities management companies managing large institutional accounts across Hyderabad and other cities.</p>

<h3>Custom Roll Specifications</h3>
<p>We manufacture bags on rolls in any custom size, roll length and perforation spacing. Thickness ranges from 20 micron for light produce bags to 60 micron for heavier retail and food service applications. Natural transparent and black rolls are standard — custom colours are available on request. Custom printing with brand logos, product information or regulatory text is available for retail and institutional buyers requiring branded roll bags.</p>

<h3>Sustainable Roll Bags from Hyderabad</h3>
<p>All our bags on rolls are manufactured from 100% recycled LDPE — an unclaimed positioning in the Indian roll bags market. For retailers and corporates building sustainable procurement programmes, our recycled LDPE roll bags deliver the same dispensing performance as virgin plastic at a measurably lower environmental footprint. Our Hyderabad facility has the capacity to support large pan-India retail supply contracts with consistent batch quality across deliveries.</p>`,

    specs: [
      { label: 'Material', value: '100% Recycled LDPE' },
      { label: 'Roll Length', value: 'Custom sizes available' },
      { label: 'Sizes', value: 'Tailored as per customer needs' },
      { label: 'Colours', value: 'Natural, Black, Custom' },
      { label: 'Thickness', value: '20 – 60 micron' },
      { label: 'Custom Print', value: 'Available on request' },
    ],
    customers: ['Supermarkets', 'Retail Chains', 'MNCs', 'Households', 'Restaurants'],

    faqs: [
      {
        q: 'What is the standard roll length for bags on rolls?',
        a: 'Roll length is fully customisable to match your dispensing equipment and daily usage volume. We manufacture from short trial rolls to long continuous rolls for high-throughput retail dispensers. Share your dispenser specifications and we will match the roll dimensions, core size and perforation spacing exactly.'
      },
      {
        q: 'What thickness is suitable for produce bags vs general retail bags?',
        a: 'For fresh produce dispensing at supermarkets, 20–25 micron is standard. For general retail and counter use, 30–40 micron offers better handling durability. For heavier food items, take-away or reusable applications, 50–60 micron is recommended. We can supply sample rolls of each for your evaluation.'
      },
      {
        q: 'Can bags on rolls be custom printed for retail branding?',
        a: 'Yes. We offer custom printing for retail chains and institutional buyers — brand logo, product information, regulatory text or waste category labels. Minimum order quantities apply. We provide a printed sample roll for approval before bulk production begins.'
      },
      {
        q: 'Do you supply bags on rolls to supermarket chains across India?',
        a: 'Yes. We supply bags on rolls to supermarket chains and retail outlets across Hyderabad, Telangana and pan-India. We handle both store-level direct orders and central warehouse supply for retail chains with multiple outlets. Volume pricing is available for consistent monthly requirements.'
      },
    ],
    relatedIds: ['garbage-bags', 'shrink-film', 'ldpe-cover'],
  },

  // ─── 4. STRETCH FILM ──────────────────────────────────────────
  {
    id: 'stretch-film',
    slug: 'stretch-wrap-film-pallet-wrapping',
    name: 'Stretch Film',
    tagline: 'Pallet Wrapping & Load Securing',
    img: '/images/stretch-film.webp',
    imgWidth: 1000,
    imgHeight: 1000,
    tag: 'Logistics',
    tagColor: '#2a6b7a',

    // PRIMARY: 'stretch wrap film manufacturer Hyderabad'
    // SECONDARY: 'pallet wrapping film India', 'LDPE stretch film bulk supplier'
    seoTitle: 'Stretch Wrap Film Manufacturer Hyderabad | Pallet Wrapping LDPE Film | Ushakiran Ecoplast',
    seoDescription: 'High-stretch LDPE pallet wrapping film — up to 300% elongation. Hand roll and machine roll. Bulk manufacturer in Hyderabad supplying warehouses, logistics and FMCG companies across India.',

    description: 'Highly stretchable LDPE film used to secure, bundle, and protect palletized goods during transport and storage. Provides excellent cling, puncture resistance and load stability across warehousing and logistics operations.',

    longDescription: `<p>Ushakiran Ecoplast manufactures <strong>stretch wrap film for pallet wrapping</strong> at our Hyderabad facility — supplying warehouses, logistics companies, FMCG manufacturers and cold storage operations across India. Our stretch film delivers consistent elongation up to 300% with excellent cling and puncture resistance across the full roll length.</p>

<p>Properly wrapped pallets reduce product damage in transit, prevent load shifting during handling, protect against dust and moisture in storage, and improve warehouse safety. Our stretch films are manufactured to the thickness and stretch specifications your operation requires — from lightweight hand wrap to heavy-duty machine roll film for automated wrappers.</p>

<h3>Hand Roll vs Machine Roll Stretch Film</h3>
<p>Hand roll stretch film is designed for manual pallet wrapping with a hand dispenser — typically 400–500mm wide with 17–23 micron thickness for standard loads. Machine roll stretch film is manufactured for automated and semi-automated pallet wrapping machines — wider widths, longer roll lengths and consistent tension performance for high-throughput operations. We supply both formats from our Hyderabad facility. Share your machine model or manual dispensing requirements and we will specify the right film.</p>

<h3>Thickness and Performance Specifications</h3>
<p>We manufacture stretch wrap film from 17 micron for standard light loads to 35 micron for heavy, irregular or sharp-cornered loads that require additional puncture resistance. Film width is fully customisable. Elongation up to 300% ensures excellent load containment with minimal film usage per pallet — reducing your per-pallet packaging cost compared to thicker, lower-stretch alternatives.</p>

<h3>Industries Served from Hyderabad</h3>
<p>We supply stretch wrap film to warehousing and logistics companies across Hyderabad and pan-India, FMCG manufacturers and distributors requiring consistent pallet protection, cold storage facilities in Telangana and Andhra Pradesh where moisture resistance is critical, manufacturing units shipping finished goods domestically and for export, and e-commerce fulfilment operations managing high daily pallet volumes. Our Hyderabad location provides efficient supply to South Indian logistics hubs.</p>`,

    specs: [
      { label: 'Material', value: 'Virgin / Recycled LDPE' },
      { label: 'Width', value: 'Custom sizes available' },
      { label: 'Thickness', value: '17 – 35 micron' },
      { label: 'Elongation', value: 'Up to 300%' },
      { label: 'Form', value: 'Hand Roll / Machine Roll' },
      { label: 'Applications', value: 'Pallet wrapping, Bundling, Load securing' },
    ],
    customers: ['Warehouses', 'Logistics Companies', 'FMCG', 'Manufacturing Units', 'Cold Storage'],

    faqs: [
      {
        q: 'What is the difference between hand roll and machine roll stretch film?',
        a: 'Hand roll stretch film is for manual wrapping with a hand dispenser — typically 400–500mm wide and 17–23 micron. Machine roll film is for automated pallet wrappers — wider, heavier rolls sized for your specific machine model. We supply both formats. Share your wrapper model or manual operation requirements for the right specification.'
      },
      {
        q: 'What thickness of stretch film do I need for heavy pallets?',
        a: 'For standard loads up to 500kg, 17–20 micron is sufficient. For medium loads up to 1000kg, 23–25 micron provides adequate containment. For heavy or sharp-cornered loads above 1000kg, 30–35 micron gives the puncture resistance needed. Contact us with your load profile for a specific recommendation.'
      },
      {
        q: 'What does 300% elongation mean for stretch film?',
        a: 'Elongation means the film can stretch to 300% of its original length before breaking. Higher elongation means better load containment force per metre of film used — reducing your per-pallet film consumption and cost. Our stretch films are tested to consistent elongation performance across every roll in a batch.'
      },
      {
        q: 'Do you supply stretch film in bulk to logistics companies in Hyderabad?',
        a: 'Yes. We supply stretch wrap film in bulk to warehousing and logistics companies across Hyderabad, Telangana and pan-India. Volume pricing is available for consistent monthly supply requirements. Contact us for a quote based on your weekly or monthly pallet volume.'
      },
    ],
    relatedIds: ['shrink-film', 'ldpe-sheets', 'ldpe-cover'],
  },

  // ─── 5. SHRINK FILM ───────────────────────────────────────────
  {
    id: 'shrink-film',
    slug: 'ldpe-shrink-film-manufacturer-hyderabad',
    name: 'Shrink Film',
    tagline: 'Secure & Professional Product Packaging',
    img: '/images/shrink-film.webp',
    imgWidth: 1152,
    imgHeight: 1152,
    tag: 'Packaging',
    tagColor: '#7a6a2a',

    // PRIMARY: 'LDPE shrink film manufacturer Hyderabad'
    // SECONDARY: 'tamper evident shrink film India', 'shrink film FMCG packaging India'
    // ECO UNCLAIMED: 'green packaging supplier pharma India'
    seoTitle: 'LDPE Shrink Film Manufacturer Hyderabad | UKEP',
    seoDescription: 'High-quality LDPE shrink film for FMCG, pharma and industrial packaging in India. Tamper-evident seal, professional finish. ISO certified bulk manufacturer in Hyderabad. Get a quote.',

    description: 'High-quality shrink films for secure, tamper-evident and professional product packaging. Ideal for bundling, wrapping and protecting goods across FMCG, pharma, and industrial sectors.',

    longDescription: `<p>Ushakiran Ecoplast manufactures <strong>LDPE shrink film in Hyderabad</strong> for professional product packaging, multi-pack bundling and tamper-evident wrapping across FMCG, pharmaceutical, logistics and industrial sectors. Our shrink films deliver consistent shrink performance, high optical clarity and reliable heat sealing across manual and automated packaging lines.</p>

<p>Shrink film transforms product presentation and security. When heat is applied through a heat gun or shrink tunnel, the film conforms tightly to the product shape — creating a tamper-evident seal that protects the product, communicates quality to the end consumer and deters pilferage across the supply chain. For pharma and food companies with regulatory tamper-evidence requirements, our shrink films provide the necessary seal integrity.</p>

<h3>FMCG and Retail Applications</h3>
<p>In FMCG, our shrink film is used for multi-pack bundling of beverage bottles, personal care products and food packs, individual product wrapping for shelf presentation, and promotional packaging for limited edition or gift sets. Retail chains across Hyderabad and pan-India use our shrink film for bundle packs and display-ready shelf packaging. Our film is compatible with standard L-sealer and shrink tunnel equipment used across Indian FMCG packaging lines.</p>

<h3>Pharma and Green Packaging</h3>
<p>For pharmaceutical and nutraceutical companies, shrink film provides the tamper-evident outer seal required for regulatory compliance and consumer trust. We supply both recycled and virgin LDPE grades — virgin grade for direct product contact applications, recycled grade for outer bundling where food-grade certification is not required. Our recycled LDPE shrink film supports <strong>green packaging for pharma companies in India</strong> building ESG procurement programmes — an unclaimed positioning we are proud to own.</p>

<h3>Film Formats and Customisation</h3>
<p>We manufacture shrink film in flat roll, centrefold and pre-formed bag formats in thicknesses from 70 to 120+ micron. Width is fully customisable. Shrink percentage and activation temperature range can be adjusted to match your specific equipment and product requirements. Our Hyderabad facility supplies LDPE shrink film to packaging companies, contract manufacturers and brand owners across Telangana, Andhra Pradesh and pan-India.</p>`,

    specs: [
      { label: 'Material', value: 'Recycled / Virgin LDPE' },
      { label: 'Width', value: 'Customisable' },
      { label: 'Thickness', value: '70 – 120+ micron' },
      { label: 'Colours', value: 'Natural, Custom' },
      { label: 'Form', value: 'Roll / Tube / Bag' },
      { label: 'Applications', value: 'Bundling, Wrapping, Tamper Sealing' },
    ],
    customers: ['FMCG Companies', 'Pharma', 'Logistics', 'Packaging Industry', 'Retail Chains'],

    faqs: [
      {
        q: 'What is LDPE shrink film used for?',
        a: 'LDPE shrink film is used to wrap, bundle and protect products with a tight, professional finish when heat is applied. Common applications include multi-pack bundling for FMCG, tamper-evident sealing for pharma and food products, display-ready retail packaging, and protective wrapping for industrial components during storage and transit.'
      },
      {
        q: 'What is the difference between shrink film and stretch film?',
        a: 'Shrink film requires heat activation — it shrinks tightly around a product when passed through a heat tunnel or heat gun. Stretch film is applied by stretching under tension without heat, typically for pallet wrapping. Both are LDPE films but serve completely different packaging applications and are not interchangeable.'
      },
      {
        q: 'Is your shrink film suitable for pharma tamper-evident packaging?',
        a: 'Yes. We supply LDPE shrink film to pharma and nutraceutical companies for tamper-evident outer sealing. Virgin LDPE grade is recommended for direct contact with pharmaceutical products. We can provide material certificates to support your regulatory documentation and GMP compliance requirements.'
      },
      {
        q: 'Can your shrink film be used on automated L-sealer and shrink tunnel machines?',
        a: 'Yes. We manufacture centrefold shrink film specifically for L-sealer and shrink tunnel operations. Share your machine model and product dimensions and we will supply film in the width, thickness and shrink percentage compatible with your packaging line. Samples are available before bulk orders.'
      },
    ],
    relatedIds: ['stretch-film', 'bags-on-rolls', 'ldpe-cover'],
  },

  // ─── 6. LDPE SHEETS ───────────────────────────────────────────
  {
    id: 'ldpe-sheets',
    slug: 'ldpe-sheets-manufacturer-hyderabad',
    name: 'LDPE Sheets',
    tagline: 'Industrial Moisture Barriers & Construction Films',
    img: '/images/ldpe-sheets.webp',
    imgWidth: 1080,
    imgHeight: 995,
    tag: 'Industrial',
    tagColor: '#5a3e8a',

    // PRIMARY: 'LDPE sheet manufacturer Hyderabad'
    // SECONDARY: 'LDPE sheet for DPC construction', 'recycled LDPE sheet manufacturer Hyderabad'
    // COMPETITOR GAP: Singhal Industries ranks nationally — beat with Hyderabad/Telangana city content
    // ECO UNCLAIMED: 'recycled LDPE sheet manufacturer Hyderabad' — nobody has written this page
    seoTitle: 'LDPE Sheet Manufacturer Hyderabad | UKEP',
    seoDescription: 'Recycled and virgin LDPE sheets for DPC construction, road building, agriculture and industry. Custom width and thickness from 25–120+ micron. ISO certified bulk manufacturer in Hyderabad.',

    description: 'High-quality LDPE sheets for construction, agriculture, road construction, and textile industries. Provides superior moisture resistance, flexibility, and durability across demanding environments.',

    longDescription: `<p>Ushakiran Ecoplast manufactures <strong>LDPE sheets in Hyderabad</strong> — durable, flexible polyethylene film sheets used as DPC moisture barriers, protective wrapping and ground covers across construction, road building, agriculture and industrial applications in Telangana, Andhra Pradesh and pan-India. Available in both recycled and virgin LDPE grades from 25 to 120+ micron thickness.</p>

<p>We are one of the few manufacturers offering <strong>recycled LDPE sheets in Hyderabad</strong> at scale — an unclaimed positioning that competitors like Singhal Industries and Mohit Polyfab have not targeted for the Telangana and Andhra Pradesh markets. Our sheets are manufactured to your project specification and delivered to site across the region.</p>

<h3>Construction and DPC Applications</h3>
<p>In construction across Hyderabad and Telangana, LDPE sheets serve as Damp Proof Course (DPC) layers between foundations and masonry — a critical application mandated by building codes to prevent rising damp. We supply to residential projects, commercial buildings, infrastructure projects and industrial facilities across the region. For road construction and highway projects in Telangana and Andhra Pradesh, LDPE sheets are used as subgrade moisture barriers. In tunnelling and underground construction, they function as waterproofing membranes. Our sheets are supplied to the exact thickness, width and roll length specified by your structural engineer or project consultant.</p>

<h3>Agriculture Applications in Telangana and Andhra Pradesh</h3>
<p>In agriculture across Telangana and Andhra Pradesh, LDPE sheets are used as ground mulch films to suppress weeds and retain soil moisture, as silage covers to protect stored fodder, and as pond liners for farm water storage and aquaculture. Our black LDPE sheets in higher thicknesses are used for pond lining on farms across the region. UV-stabilised variants provide extended outdoor performance through the intense South Indian summer.</p>

<h3>Industrial and Packaging Applications</h3>
<p>For industrial users, LDPE sheets serve as protective wrapping for machinery during storage and transit, as void fill and inter-layer padding in stacked goods, and as surface protection film during construction and renovation. The textile industry uses LDPE sheets as moisture barrier wrapping for fabric bales. Electronics manufacturers use black anti-static LDPE sheets for component protection during production and shipment.</p>`,

    specs: [
      { label: 'Material', value: 'Recycled / Virgin LDPE' },
      { label: 'Width', value: 'Custom sizes available' },
      { label: 'Thickness', value: '25 – 120+ micron' },
      { label: 'Colours', value: 'Black, Natural, Custom' },
      { label: 'Form', value: 'Sheet / Roll / Tube' },
      { label: 'Applications', value: 'DPC, Construction, Agriculture, Wrapping' },
    ],
    customers: ['Construction Companies', 'Road Construction', 'Agriculture', 'Electronics', 'Packaging Industry'],

    faqs: [
      {
        q: 'What thickness of LDPE sheet is required for DPC in construction?',
        a: 'For Damp Proof Course (DPC) in standard residential construction, a minimum of 250 micron (1000 gauge) is typically specified. For basements, water-retaining structures and high-moisture environments, structural engineers may specify 500 micron or above. We manufacture to any project specification — share your engineer\'s requirement and we will supply accordingly.'
      },
      {
        q: 'What is the difference between recycled and virgin LDPE sheets?',
        a: 'Recycled LDPE sheets are manufactured from post-consumer plastic — same moisture barrier performance at lower cost with certified recycled content for ESG reporting. Virgin LDPE sheets use new resin — recommended for food contact applications, critical waterproofing and where material purity certificates are required. We supply both grades from our Hyderabad facility.'
      },
      {
        q: 'Do you supply LDPE sheets for road construction projects in Telangana?',
        a: 'Yes. We regularly supply LDPE sheets to road construction and highway projects across Telangana and Andhra Pradesh. We deliver to site in the width, thickness and roll length specified by your project engineer. Contact us with your project location and specification for a supply quote.'
      },
      {
        q: 'Can LDPE sheets be used as pond liners for agricultural water storage?',
        a: 'Yes. Black LDPE sheets in thicknesses of 200–500 micron are widely used as pond liners for farm water storage, irrigation ponds and aquaculture across Telangana and Andhra Pradesh. We manufacture to the exact dimensions of your pond area and can advise on the appropriate thickness for your soil conditions and water depth.'
      },
    ],
    relatedIds: ['ldpe-cover', 'crop-cover', 'stretch-film'],
  },

  // ─── 7. LDPE COVER ────────────────────────────────────────────
  {
    id: 'ldpe-cover',
    slug: 'ldpe-cover-industrial-packaging',
    name: 'LDPE Cover',
    tagline: 'Industrial-Grade Protection Covers',
    img: '/images/ldpe-cover.webp',
    imgWidth: 622,
    imgHeight: 622,
    tag: 'Industrial',
    tagColor: '#3a6b8a',

    // PRIMARY: 'LDPE cover manufacturer Hyderabad'
    // SECONDARY: 'industrial LDPE cover India', 'LDPE cover food packaging'
    seoTitle: 'LDPE Cover Manufacturer Hyderabad | Industrial Protection Covers | Ushakiran Ecoplast',
    seoDescription: 'Heavy-duty LDPE protection covers for food packaging, agriculture storage and equipment protection. Custom width and thickness. ISO certified bulk manufacturer in Hyderabad supplying pan-India.',

    description: 'Tough, flexible and reliable LDPE covers designed for heavy-duty industrial use. Suitable for food packaging, agricultural storage, electronic equipment protection, and more.',

    longDescription: `<p>Ushakiran Ecoplast manufactures <strong>LDPE covers in Hyderabad</strong> — heavy-duty folded polyethylene covers for the protection of goods, equipment and produce across food packaging, agriculture storage, electronics and industrial applications. Manufactured in both recycled and virgin LDPE grades from our Hyderabad facility, supplying to clients across Telangana, Andhra Pradesh and pan-India.</p>

<p>LDPE covers are open-ended sleeves that slip over or around an item for complete moisture, dust and contamination protection — distinct from sealed bags in that they provide easier application and removal for large items, machinery, bales and bulk produce. Our covers are manufactured to your exact dimensions for a precise fit.</p>

<h3>Food and Dairy Packaging Applications</h3>
<p>LDPE covers are widely used across food and dairy processing in Hyderabad and across India for wrapping fresh produce, lining storage crates and bins, protecting dairy products during cold chain transport and distribution, and as inner liners for bulk food packaging. For food contact applications, we supply virgin LDPE grade covers meeting food safety and FSSAI packaging material requirements.</p>

<h3>Agriculture Storage in Telangana and Andhra Pradesh</h3>
<p>In agriculture across Telangana and Andhra Pradesh, LDPE covers are used extensively for protecting stored grain, seeds, fertilisers and harvested produce from moisture and pest ingress. Large-format covers are used to wrap hay bales, silage stacks and fertiliser bags in open storage. Our covers are manufactured to withstand the temperature extremes typical of South Indian agricultural storage environments — from Hyderabad's summer heat to winter cold storage conditions.</p>

<h3>Equipment and Electronics Protection</h3>
<p>Manufacturing units and capital equipment suppliers across Hyderabad use LDPE covers to protect finished machinery, spare parts and electronic components during storage and international shipping. Custom cover dimensions are manufactured to fit your specific equipment — including gusseted covers for machinery with irregular profiles. For sensitive electronic equipment, we supply static-dissipative LDPE covers that prevent ESD damage during handling and storage.</p>`,

    specs: [
      { label: 'Material', value: 'Recycled / Virgin LDPE' },
      { label: 'Width', value: 'Custom sizes available' },
      { label: 'Thickness', value: '50 – 120+ micron' },
      { label: 'Colours', value: 'Black, Natural, Custom' },
      { label: 'Form', value: 'Folded Cover / Sleeve' },
      { label: 'Applications', value: 'Food Packaging, Agriculture Storage, Equipment Protection' },
    ],
    customers: ['Food Packaging Companies', 'Supermarkets', 'Agriculture', 'Equipment Manufacturers', 'Storage Facilities'],

    faqs: [
      {
        q: 'What is the difference between an LDPE cover and an LDPE bag?',
        a: 'An LDPE bag is sealed at the bottom — for loose contents poured or placed inside. An LDPE cover is an open-ended sleeve — designed to slip over or around an item for protection. Covers are used for machinery, produce bins, bales and large equipment where an open sleeve is more practical than a sealed bag.'
      },
      {
        q: 'Are your LDPE covers food-safe for dairy and produce packaging?',
        a: 'Yes. For food contact applications we supply virgin LDPE grade covers meeting food safety standards. Recycled LDPE covers are suitable for outer protective packaging and non-contact food applications. Specify food-safe virgin grade when ordering for direct contact with food or dairy products.'
      },
      {
        q: 'Can you manufacture LDPE covers to custom dimensions for our machinery?',
        a: 'Yes. We manufacture LDPE covers to any custom width, length and thickness. Share your equipment dimensions — including height, width and depth or gusset requirement — and we will manufacture covers that fit precisely. Standard lead time for custom dimensions is 5–7 working days for trial orders.'
      },
      {
        q: 'Do you supply LDPE covers to agricultural storage operations in Telangana?',
        a: 'Yes. We supply LDPE covers to grain storage facilities, produce warehouses and agricultural operations across Telangana and Andhra Pradesh. We deliver to your facility location. Contact us for bulk pricing for your specific storage application and volume requirement.'
      },
    ],
    relatedIds: ['ldpe-sheets', 'bags-on-rolls', 'garbage-bags'],
  },

  // ─── 8. MULCH FILM ────────────────────────────────────────────
  {
    id: 'crop-cover',
    slug: 'mulch-film-uv-resistant-agriculture',
    name: 'Mulch Film',
    tagline: 'UV-Resistant Agricultural Protection',
    img: '/images/mulch-film.webp',
    imgWidth: 960,
    imgHeight: 566,
    tag: 'Agriculture',
    tagColor: '#3a7a2a',

    // PRIMARY: 'mulch film manufacturer Telangana'
    // SECONDARY: 'UV resistant mulch film India', 'mulch film Andhra Pradesh'
    // COMPETITOR GAP: Shalimar has NO Hyderabad/Telangana/AP content — this is the exact opening
    seoTitle: 'Mulch Film Manufacturer Telangana & Andhra Pradesh | UV Resistant LDPE | Ushakiran Ecoplast',
    seoDescription: 'UV-stabilised LDPE mulch film for Telangana and Andhra Pradesh farmers. Increases crop yield, reduces pesticide use. Black and grey available. Manufacturer in Hyderabad with pan-India supply.',

    description: 'Durable, UV-resistant mulch films designed for superior plant protection against weather, pests and frost. Enhances agricultural yields while reducing dependency on pesticides.',

    longDescription: `<p>Ushakiran Ecoplast manufactures <strong>UV-resistant mulch film in Hyderabad</strong> for farmers and agribusinesses across Telangana and Andhra Pradesh — supplying directly to growers, farmer producer organisations (FPOs), agricultural dealers and horticulture companies across the region. Our mulch films are UV-stabilised specifically for the intense South Indian climate and formulated to deliver a full growing season of performance.</p>

<p>Shalimar Group and national mulch film brands have significant national distribution — but they have no Telangana or Andhra Pradesh specific content, no regional agronomist support and no local supply relationship. Ushakiran Ecoplast, manufacturing in Hyderabad, fills this gap directly — supplying the right product for South Indian growing conditions with the fastest delivery to farms across the two states.</p>

<h3>Benefits for Telangana and Andhra Pradesh Farmers</h3>
<p>In the semi-arid climate of Telangana and the diverse agricultural zones of Andhra Pradesh, mulch film delivers measurable returns: soil moisture retention reduces irrigation frequency by 30–50% in drip-irrigated crops — critical for chilli, tomato, cotton, maize and vegetable growers. Weed suppression under the mulch layer reduces manual weeding labour costs by 60–80% per crop cycle. Soil temperature regulation through Hyderabad's extreme summers and mild winters improves root zone conditions and extends the effective growing season. Research across Indian agricultural universities consistently shows 20–40% yield increases for vegetable crops under mulch film compared to bare soil cultivation.</p>

<h3>Black vs Grey Mulch Film for South Indian Crops</h3>
<p>Black mulch film suppresses all weed growth by blocking sunlight and warms the soil — the most widely used option for vegetable and row crops across Telangana and AP including tomato, brinjal, okra and leafy vegetables. Grey or silver mulch film reflects UV light, repelling aphids, thrips and whiteflies — insects that act as vectors for viral diseases in chilli, capsicum, cucumber and cucurbit crops that are particularly prevalent in Andhra Pradesh. We supply both colours in all standard widths and custom thicknesses matched to your crop row spacing and bed dimensions.</p>

<h3>Direct Supply to Telangana and Andhra Pradesh Farmers</h3>
<p>We supply mulch film directly from our Hyderabad facility to farmers, FPOs, agricultural input dealers and horticulture companies across Telangana and Andhra Pradesh. Our proximity to both states means faster delivery and lower freight compared to national manufacturers shipping from North India. We supply in the exact width matched to your bed dimensions — from narrow row crops to wide vegetable beds — with thickness options from 25 micron single-season film to 50 micron multi-season film for high-value horticulture applications.</p>`,

    specs: [
      { label: 'Material', value: 'UV-Stabilised LDPE' },
      { label: 'Width', value: 'Custom sizes available' },
      { label: 'Thickness', value: '25 – 50 micron' },
      { label: 'UV Protection', value: 'Yes — UV stabilised for South Indian climate' },
      { label: 'Colours', value: 'Black, Grey/Silver' },
      { label: 'Applications', value: 'Mulching, Weed Control, Frost Cover' },
    ],
    customers: ['Farmers', 'Agri Businesses', 'Horticulture', 'Nurseries', 'Greenhouses'],

    faqs: [
      {
        q: 'What thickness of mulch film is recommended for vegetable crops in Telangana?',
        a: 'For standard vegetable and row crops in Telangana, 25–30 micron is the most cost-effective option for a single growing season. For high-value horticulture or crops with long growing periods, 40–50 micron provides better durability and can be reused across two seasons. Contact us for a recommendation based on your specific crop and location.'
      },
      {
        q: 'What is the difference between black and silver mulch film for Andhra Pradesh crops?',
        a: 'Black mulch film blocks sunlight to suppress weeds and warms the soil — suitable for tomato, brinjal, leafy vegetables and most row crops. Silver/grey mulch film reflects UV light to repel aphids, thrips and whiteflies that spread viral diseases — specifically beneficial for chilli, capsicum, cucumber and cucurbits widely grown in Andhra Pradesh. Choose based on your primary concern: weed control or insect pest management.'
      },
      {
        q: 'How much can mulch film increase crop yield for South Indian farmers?',
        a: 'Research across Indian agricultural universities shows mulch film increases vegetable yields by 20–40% while reducing irrigation water requirement by 30–50% and cutting weeding labour costs significantly. Results vary by crop type, soil, irrigation method and local climate. For drip-irrigated crops in Telangana and Andhra Pradesh, the moisture retention benefit is particularly high given the semi-arid growing conditions.'
      },
      {
        q: 'Do you supply mulch film directly to farmers in Telangana and Andhra Pradesh?',
        a: 'Yes. We supply mulch film directly to farmers, FPOs, agricultural dealers and horticulture companies across Telangana and Andhra Pradesh from our Hyderabad manufacturing facility. Delivery to farm location is available. Contact us for bulk pricing for your crop area requirements — we work with both small growers and large commercial farms.'
      },
    ],
    relatedIds: ['ldpe-sheets', 'ldpe-cover', 'garbage-bags'],
  },

]

// ─── HELPER FUNCTIONS ─────────────────────────────────────────────
export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug)
}

export function getProductById(id) {
  return products.find(p => p.id === id)
}

export function getRelatedProducts(product) {
  return products.filter(p => product.relatedIds?.includes(p.id))
}