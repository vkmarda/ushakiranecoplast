const founders = [
    {
    name: 'Aditya Sarda',
    role: 'Founder & CFO',
    edu: 'B.E — Information Technology',
    exp: '11 years of experience',
    img: '/images/team-aditya.jpg',
    bio: 'Drives the financial strategy and growth vision of UKEP. Aditya brings a sharp analytical mindset and deep commitment to building a profitable, sustainable business for the long term.',
  },
  {
    name: 'Ramakant Sarda',
    role: 'Founder & CEO',
    edu: 'B.Com Graduate',
    exp: '11 years of experience',
    img: '/images/team-ramakant.jpg',
    bio: 'Visionary leader who founded USHAKIRAN ECOPLAST with a mission to turn plastic waste into high-quality, sustainable products for India.',
  }
]

const advisors = [
  {
    name: 'CA Arun Kumar Sarda',
    role: 'Head Advisor',
    edu: 'B.Com-Tax, PGDBM, CA-ATC (Inter)',
    exp: '36 years of experience',
    img: '/images/team-arun.jpg',
    bio: 'Senior financial and strategic advisor guiding UKEP through compliance, investment decisions, and long-term planning with over three decades of chartered accountancy expertise.',
  },
]

const operations = [
  {
    name: 'Amit Vyas',
    role: 'Accounts Head',
    edu: 'B.Com Graduate',
    exp: '20 years of experience',
    img: '/images/team-amit.jpg',
  },
  {
    name: 'Avinash Darak',
    role: 'Accounts Manager',
    edu: 'B.Com Graduate',
    exp: '5 years of experience',
    img: '/images/team-avinash.jpg',
  },
  {
    name: 'Ravi Verma',
    role: 'Strategic Consultant',
    edu: 'MBA Marketing, BTech IT',
    exp: '7 years of experience in plastic recycling',
    img: '/images/team-ravi.jpg',
  },
  {
    name: 'Uttam Goswami',
    role: 'Plant Head — Bags Manufacturing',
    edu: 'Graduate',
    exp: '9 years of experience',
    img: '/images/team-uttam.jpg',
  },
  {
    name: 'Suraj Joshi',
    role: 'Marketing',
    edu: 'Graduate',
    exp: '5 years of experience',
    img: '/images/team-suraj.jpg',
  },
  {
    name: 'Rahul Pandey',
    role: 'Plant Head — Granule Recycling',
    edu: 'Graduate',
    exp: '4 years of experience',
    img: '/images/team-rahul.jpg',
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
  return (
    <div className="team-page">

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

        {/* Operations */}
        <div className="team-section">
          <div className="team-section-label">Operations & Management</div>
          <div className="members-grid">
            {operations.map(m => <MemberCard key={m.name} member={m} />)}
          </div>
        </div>

      </div>

      <footer id="contact">
        <div className="footer-bottom" style={{ padding: '28px 60px', borderTop: '1px solid rgba(255,255,255,.1)', background: 'var(--dark)', color: 'rgba(255,255,255,.6)', textAlign: 'center', fontSize: '12.5px' }}>
          <p>Copyright 2024 USHA KIRAN ECO PLAST. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  )
}