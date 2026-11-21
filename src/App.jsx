import AccountSummary from './AccountSummary.jsx';

const demoAccounts = [
  {
    accountName: 'Everyday checking',
    accountType: 'Checking',
    lastFour: '2841',
    balance: '$12,480.50',
    monthlyChange: '+$1,240.00',
    mark: 'everyday',
  },
  {
    accountName: 'Growth savings',
    accountType: 'Savings',
    lastFour: '9076',
    balance: '$5,270.00',
    monthlyChange: '+$320.00',
    mark: 'growth',
  },
];

export default function App() {
  return (
    <main className="page-shell">
      <header className="page-header">
        <div className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">A</span>
          <span>Atlas <span className="brand-muted">Finance</span></span>
        </div>
        <span className="profile-chip"><span className="profile-dot" /> Sample workspace</span>
      </header>

      <section className="overview" aria-labelledby="page-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow section-kicker">OVERVIEW</p>
            <h1 id="page-title">Your accounts</h1>
            <p className="section-description">A clear snapshot of the balances that matter.</p>
          </div>
          <span className="updated-label"><span className="status-dot" /> Updated just now</span>
        </div>

        <div className="account-grid">
          {demoAccounts.map((account) => (
            <AccountSummary key={account.lastFour} {...account} />
          ))}
        </div>
        <p className="sample-note">Sample data for layout demonstration</p>
      </section>
    </main>
  );
}
