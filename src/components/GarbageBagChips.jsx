import { useState } from 'react'
import { Link } from 'react-router-dom'

const TABS = [
  {
    id: 'industry',
    label: 'By Industry',
    chips: [
      { text: 'Hotels & Hospitality',       slug: 'hotel-garbage-bags-hyderabad' },
      { text: 'Hospitals & Healthcare',     slug: 'hospital-garbage-bags-hyderabad' },
      { text: 'Industrial & Manufacturing', slug: 'industrial-garbage-bags-hyderabad' },
      { text: 'Facility Management',        slug: 'facility-management-garbage-bags-india' },
      { text: 'Restaurants & Food Service', slug: 'restaurant-garbage-bags-hyderabad' },
      { text: 'Construction',               slug: 'construction-garbage-bags-hyderabad' },
      { text: 'Supermarkets & Retail',      slug: 'supermarket-garbage-bags-india' },
      { text: 'Pharmaceutical & Labs',      slug: 'pharmaceutical-waste-bags-hyderabad' },
      { text: 'Cold Storage & Logistics',   slug: 'cold-storage-garbage-bags-india' },
      { text: 'Corporate Offices',          slug: 'office-garbage-bags-hyderabad' },
      { text: 'Schools & Colleges',         slug: 'school-college-garbage-bags-india' },
      { text: 'Airports & Aviation',        slug: 'airport-garbage-bags-india' },
    ],
  },
  {
    id: 'product',
    label: 'By Product',
    chips: [
      { text: 'Black Garbage Bags',    slug: 'black-garbage-bags-hyderabad' },
      { text: 'Biodegradable Bags',    slug: 'biodegradable-garbage-bags-manufacturer' },
      { text: 'Heavy Duty Bags',       slug: 'heavy-duty-garbage-bags-manufacturer' },
      { text: 'Coloured Bags',         slug: 'coloured-garbage-bags-india' },
      { text: 'Eco-Friendly Bags',     slug: 'eco-friendly-garbage-bags-hyderabad' },
      { text: 'Dustbin Bags',          slug: 'dustbin-bags-hyderabad' },
      { text: 'Kitchen Garbage Bags',  slug: 'kitchen-garbage-bags-manufacturer' },
      { text: 'Household Bags',        slug: 'household-garbage-bags-manufacturer' },
      { text: 'Jumbo Garbage Bags',    slug: 'jumbo-garbage-bags-manufacturer' },
      { text: 'HDPE Garbage Bags',     slug: 'hdpe-garbage-bags-manufacturer' },
      { text: 'Wholesale Supply',      slug: 'garbage-bags-wholesale-hyderabad' },
      { text: 'Industrial Polyliners', slug: 'industrial-polyliners-manufacturer' },
      { text: 'Transparent Bags',      slug: 'transparent-garbage-bags-manufacturer' },
      { text: 'Large Garbage Bags',    slug: 'large-garbage-bags-manufacturer' },
      
    ],
  },
]

const BASE = '/products/garbage-bags/'

export default function GarbageBagChips() {
  const [active, setActive] = useState('industry')

  return (
    <section className="gbchips">
      <div className="section-header">
        <div className="section-label">EXPLORE OUR RANGE</div>
        <h2>Garbage Bags for Every Industry &amp; Use</h2>
      </div>

      <div className="gbchips-tabs">
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`gbchips-tab${active === tab.id ? ' gbchips-tab--active' : ''}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="gbchips-panels">
        {TABS.map(tab => (
          <div
            key={tab.id}
            className={`gbchips-panel${active === tab.id ? ' gbchips-panel--active' : ''}`}
            aria-hidden={active !== tab.id}
          >
            {tab.chips.map(chip => (
              <Link
                key={chip.slug}
                to={`${BASE}${chip.slug}/`}
                className="gbcard"
                tabIndex={active === tab.id ? 0 : -1}
              >
                <span className="gbcard-text">{chip.text}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="gbchips-footer">
        <Link to="/products/garbage-bags/" className="gbchips-all">
          View all garbage bag types →
        </Link>
      </div>
    </section>
  )
}
