"use strict";(self.webpackChunkkenshin13=self.webpackChunkkenshin13||[]).push([[30],{6030:(e,a,r)=>{r.r(a),r.d(a,{default:()=>b});var i=r(5043),t=r(5464),o=r(6759),n=r(5549),s=r(579);const l=t.Ay.footer`
  position: relative;
  padding: var(--space-md) 0;
  background: transparent;
  border-top: 1px solid rgba(153, 69, 255, 0.1);
  overflow: hidden;
  min-height: 80px;
  
  @media (max-width: 768px) {
    padding: var(--space-lg) 0;
  }
`,d=t.Ay.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--space-xl);
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 0 var(--space-lg);
  }
  
  @media (max-width: 480px) {
    padding: 0 var(--space-md);
  }
`,p=t.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-lg);
    text-align: center;
  }
`,c=t.Ay.div`
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-md);
  }
`,x=(0,t.Ay)(o.P.img)`
  height: 40px;
  width: auto;
  filter: brightness(1.2) saturate(1.1);
  transition: all var(--duration-normal) var(--ease-out-expo);
  cursor: pointer;
  
  @media (max-width: 768px) {
    height: 36px;
  }
  
  &:hover {
    filter: brightness(1.4) saturate(1.3);
    transform: scale(1.1);
  }
`,h=t.Ay.p`
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
  margin: 0;
  
  @media (max-width: 480px) {
    font-size: var(--text-xs);
  }
`,g=t.Ay.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,u=t.Ay.div`
  display: flex;
  gap: var(--space-sm);
`,v=(0,t.Ay)(o.P.a)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(153, 69, 255, 0.05);
  border: 1px solid rgba(153, 69, 255, 0.2);
  border-radius: var(--radius-full);
  color: var(--color-light-purple);
  text-decoration: none;
  transition: all var(--duration-normal) var(--ease-out-expo);
  position: relative;
  
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, var(--color-neon-purple), var(--color-electric-violet));
    border-radius: var(--radius-full);
    opacity: 0;
    z-index: -1;
    transition: opacity var(--duration-normal) ease;
  }
  
  &:hover {
    background: rgba(153, 69, 255, 0.1);
    border-color: transparent;
    color: var(--color-white);
    transform: translateY(-2px);
    
    &::before {
      opacity: 0.3;
    }
  }
  
  svg {
    width: 20px;
    height: 20px;
    
    @media (max-width: 480px) {
      width: 18px;
      height: 18px;
    }
  }
`,m=((0,t.Ay)(o.P.button)`
  width: 40px;
  height: 40px;
  background: rgba(153, 69, 255, 0.05);
  border: 1px solid rgba(153, 69, 255, 0.2);
  border-radius: var(--radius-full);
  color: var(--color-light-purple);
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-out-expo);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  padding: 0;
  
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }
  
  &:hover {
    background: var(--color-neon-purple);
    border-color: var(--color-neon-purple);
    color: var(--color-white);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(153, 69, 255, 0.3);
  }
`,t.Ay.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(153, 69, 255, 0.3) 25%, 
    rgba(153, 69, 255, 0.5) 50%, 
    rgba(153, 69, 255, 0.3) 75%, 
    transparent 100%
  );
  top: 0;
  left: 0;
  opacity: 0.5;
  pointer-events: none;
`),b=()=>{const[e,a]=(0,i.useState)(!1);return(0,s.jsxs)(l,{children:[(0,s.jsx)(m,{}),(0,s.jsx)(d,{children:(0,s.jsxs)(p,{children:[(0,s.jsxs)(c,{children:[(0,s.jsx)(x,{src:n,alt:"Kenshin13",onClick:()=>{a(!0),setTimeout(()=>a(!1),600),window.scrollTo({top:0,behavior:"smooth"})},animate:{rotate:e?360:0},transition:{duration:.6,ease:"easeInOut"},whileHover:{scale:1.1},whileTap:{scale:.95}}),(0,s.jsxs)(h,{children:["\xa9 ",(new Date).getFullYear()," Kenshin13"]})]}),(0,s.jsx)(g,{children:(0,s.jsx)(u,{children:(0,s.jsx)(v,{href:"https://github.com/kenshiin13",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub Profile",whileHover:{scale:1.1},whileTap:{scale:.95},title:"GitHub",children:(0,s.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:(0,s.jsx)("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})})})})})]})})]})}}}]);
//# sourceMappingURL=30.0d78df38.chunk.js.map