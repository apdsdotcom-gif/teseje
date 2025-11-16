
export default function Balloons(){
  return(
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-10 -top-20 float-slow">
        <svg width="200" height="260" viewBox="0 0 180 260">
          <defs><radialGradient id="bp" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#FFD3E8"/><stop offset="100%" stopColor="#FF9ACB"/>
          </radialGradient></defs>
          <ellipse cx="90" cy="80" rx="70" ry="90" fill="url(#bp)" opacity="0.85"/>
          <path d="M90 170 C70 210 110 240 90 270" stroke="#FFE1F0" strokeWidth="7" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="absolute -right-10 -top-16 float-slow" style={{animationDelay:'2s'}}>
        <svg width="200" height="260" viewBox="0 0 180 260">
          <defs><radialGradient id="bb" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#D3F3FF"/><stop offset="100%" stopColor="#8FD7F5"/>
          </radialGradient></defs>
          <ellipse cx="90" cy="80" rx="70" ry="90" fill="url(#bb)" opacity="0.85"/>
          <path d="M90 170 C110 210 70 240 90 270" stroke="#DFF7FF" strokeWidth="7" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
}
