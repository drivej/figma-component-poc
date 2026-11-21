export default function AccountSummary({
  accountName,
  accountType,
  lastFour,
  balance,
  monthlyChange,
  mark,
}) {
  return (
    <article className="account-card" aria-label={accountName + ' account summary'}>
      <div className="account-card__top">
        <div className={"account-mark account-mark--" + mark} aria-hidden="true">
          {mark === 'growth' ? '↗' : '◌'}
        </div>
        <div className="account-card__identity">
          <h2>{accountName}</h2>
          <p>{accountType} <span aria-hidden="true">·</span> •••• {lastFour}</p>
        </div>
        <span className="account-card__tag">{accountType}</span>
      </div>

      <div className="account-card__balance">
        <p className="eyebrow">Available balance</p>
        <p className="balance">{balance}</p>
      </div>

      <div className="account-card__bottom">
        <p><span className="change">{monthlyChange}</span> this month</p>
        <span className="details-label">Account details <span aria-hidden="true">↗</span></span>
      </div>
    </article>
  );
}
