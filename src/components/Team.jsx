import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const founders = [
    {
    name: 'Aditya Sarda',
    role: 'Founder & CFO',
    edu: 'B.E — Information Technology',
    exp: '13 years of experience',
    img: '/images/team-aditya.webp',
    bio: 'Drives the financial strategy and growth vision of UKEP. Aditya brings a sharp analytical mindset and deep commitment to building a profitable, sustainable business for the long term.',
  },
  {
    name: 'Ramakant Sarda',
    role: 'Founder & CEO',
    edu: 'B.Com Graduate',
    exp: '13 years of experience',
    img: '/images/team-ramakant.webp',
    bio: 'Visionary leader who founded USHAKIRAN ECOPLAST with a mission to turn plastic waste into high-quality, sustainable products for India.',
  }
]

const advisors = [
  {
    name: 'CA Arun Kumar Sarda',
    role: 'Head Advisor',
    edu: 'B.Com-Tax, PGDBM, CA-ATC (Inter)',
    exp: '38 years of experience',
    img: '/images/team-arun.webp',
    bio: 'Senior financial and strategic advisor guiding UKEP through compliance, investment decisions, and long-term planning with over three decades of expertise in chartered accountancy.',
  },
]
const marketing = [
    {
    name: 'Abhinav Marda',
    role: '',
    edu: 'B.Tech, MBA',
    exp: '8 years of experience',
    img: '/images/team-abhinav.webp',
  bio: "Strategic thinker with 8 years across business development and operations — driving UKEP's growth, distribution networks, and market expansion." },
  {
    name: 'Varun Marda',
    role: '',
    edu: 'B.Tech',
    exp: '4 years of experience',
    img: '/images/team-varun.webp',
  bio: "Engineer turned digital strategist — building the technology, platforms, and marketing systems that bring UKEP's products to modern customers." },
]

const operations = [
  {
    name: 'Amit Vyas',
    role: 'Accounts Head',
    edu: 'B.Com Graduate',
    exp: '20 years of experience',
    img: '/images/team-amit.webp',
  },
  {
    name: 'Avinash Darak',
    role: 'Accounts Manager',
    edu: 'B.Com Graduate',
    exp: '5 years of experience',
    img: '/images/team-avinash.webp',
  },
  {
    name: 'Ravi Verma',
    role: 'Strategic Consultant',
    edu: 'MBA Marketing, BTech IT',
    exp: '7 years of experience in plastic recycling',
    img: '/images/team-ravi.webp',
  },
  {
    name: 'Uttam Goswami',
    role: 'Plant Head — Bags Manufacturing',
    edu: 'Graduate',
    exp: '9 years of experience',
    img: '/images/team-uttam.webp',
  },
  
  {
    name: 'Rahul Pandey',
    role: 'Plant Head — Granule Recycling',
    edu: 'Graduate',
    exp: '4 years of experience',
    img: '/images/team-rahul.webp',
  },
]

function FounderCard({ member }) {
  return (
    <div className="founder-card">
      <div className="founder-img">
        {member.img
          ? <img src={member.img} alt={member.name} />
          : <div className="member-initials">{member.name.split(' ').map(n => n[0]).join('')}</div>
        }
      </div>
      <div className="founder-info">
        <div className="team-role">{member.role}</div>
        <h3>{member.name}</h3>
        <p className="team-bio">{member.bio}</p>
        <div className="team-meta">
          <span className="team-badge">🎓 {member.edu}</span>
          <span className="team-badge">⏱ {member.exp}</span>
        </div>
      </div>
    </div>
  )
}

function MemberCard({ member }) {
  return (
    <div className="founder-card">
      <div className="founder-img">
        {member.img
          ? <img src={member.img} alt={member.name} />
          : <div className="member-initials">{member.name.split(' ').map(n => n[0]).join('')}</div>
        }
      </div>
      <div className="member-info">
        <div className="team-role">{member.role}</div>
        <h4>{member.name}</h4>
        <div className="team-meta">
          <span className="team-badge">🎓 {member.edu}</span>
          <span className="team-badge">⏱ {member.exp}</span>
        </div>
      </div>
    </div>
  )
}

export default function Team({ setPage }) {
  const { pathname } = useLocation()
  const canonical = pathname.endsWith('/') ? pathname : pathname + '/'
  return (
    <div className="team-page">
      <Helmet>
        <title>Our Team | Ushakiran Ecoplast</title>
        <meta name="description" content="Meet the team behind Ushakiran Ecoplast — founders, advisors and operations heads driving sustainable plastic recycling in Hyderabad since 2013." />
        <link rel="canonical" href={`https://ushakiranecoplast.com${canonical}`} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero banner */}
      <div className="team-hero">
        <div className="team-hero-content">
          <div className="section-label">The People Behind UKEP</div>
          <h1>Our Team</h1>
          <p>Experienced professionals united by a shared mission — turning plastic waste into products that serve India.</p>
          <button onClick={() => setPage('home')} className="btn-outline">← Back to Home</button>
        </div>
      </div>

      <div className="team-body">

        {/* Founders */}
        <div className="team-section">
          <div className="team-section-label">Leadership</div>
          <div className="founders-grid">
            {founders.map(m => <FounderCard key={m.name} member={m} />)}
          </div>
        </div>

        {/* Advisors */}
        <div className="team-section alt">
          <div className="team-section-label">Advisory</div>
          <div className="advisors-grid">
            {advisors.map(m => <FounderCard key={m.name} member={m} />)}
          </div>
        </div>

        {/* Sales & Marketing */}
        <div className="team-section alt">
          <div className="team-section-label">Sales & Marketing</div>
          <div className="advisors-grid">
            {marketing.map(m => <FounderCard key={m.name} member={m} />)}
          </div>
        </div>

        {/* Operations */}
        <div className="team-section">
          <div className="team-section-label">Operations & Management</div>
          <div className="members-grid">
            {operations.map(m => <MemberCard key={m.name} member={m} />)}
          </div>
        </div>

      </div>

      

    </div>
  )
}