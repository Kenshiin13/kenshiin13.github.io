"use strict";(self.webpackChunkkenshin13=self.webpackChunkkenshin13||[]).push([[221],{5221:(e,a,r)=>{r.r(a),r.d(a,{default:()=>b});var t=r(9950),i=r(4752),o=r(5385),n=r(5549),s=r(4414);const l=i.Ay.footer`
  position: relative;
  padding: var(--space-md) 0;
  background: transparent;
  border-top: 1px solid rgba(153, 69, 255, 0.1);
  overflow: hidden;
  min-height: 80px;
  
  @media (max-width: 768px) {
    padding: var(--space-lg) 0;
  }
`,d=i.Ay.div`
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
`,p=i.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-lg);
    text-align: center;
  }
`,c=i.Ay.div`
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-md);
  }
`,x=(0,i.Ay)(o.P.img)`
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
`,h=i.Ay.p`
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
  margin: 0;
  
  @media (max-width: 480px) {
    font-size: var(--text-xs);
  }
`,g=i.Ay.div`
  display: flex;
  align-items: center;
  gap: var(--space-md);
`,u=i.Ay.div`
  display: flex;
  gap: var(--space-sm);
`,v=(0,i.Ay)(o.P.a)`
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
`,m=((0,i.Ay)(o.P.button)`
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
`,i.Ay.div`
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
`),b=()=>{const[e,a]=(0,t.useState)(!1),[r,i]=(0,t.useState)(!1),[b,f]=(0,t.useState)(!1),[w,y]=(0,t.useState)(!1),[k,j]=(0,t.useState)(!1);return(0,s.jsxs)(l,{children:[(0,s.jsx)(m,{}),b&&(0,s.jsx)(o.P.div,{style:{position:"fixed",bottom:"120px",left:"50%",transform:"translateX(-50%)",background:"rgba(153, 69, 255, 0.95)",backdropFilter:"blur(10px)",color:"var(--color-white)",padding:"8px 16px",borderRadius:"var(--radius-sm)",fontSize:"var(--text-sm)",fontWeight:"600",zIndex:1e3,boxShadow:"0 4px 12px rgba(153, 69, 255, 0.3)"},initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},children:"Discord: kenshin13 copied!"}),(0,s.jsx)(d,{children:(0,s.jsxs)(p,{children:[(0,s.jsxs)(c,{children:[(0,s.jsx)(x,{src:n,alt:"Kenshin13",onClick:()=>{a(!0),setTimeout(()=>a(!1),600),window.scrollTo({top:0,behavior:"smooth"})},animate:{rotate:e?360:0},transition:{duration:.6,ease:"easeInOut"},whileHover:{scale:1.1},whileTap:{scale:.95}}),(0,s.jsxs)(h,{children:["\xa9 ",(new Date).getFullYear()," Kenshin13"]})]}),(0,s.jsx)(g,{children:(0,s.jsxs)(u,{children:[(0,s.jsx)(v,{href:"https://github.com/kenshiin13",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub Profile",onClick:()=>{y(!0),setTimeout(()=>y(!1),600)},whileHover:{scale:1.1},whileTap:{scale:.95},title:"GitHub",children:(0,s.jsx)(o.P.svg,{viewBox:"0 0 24 24",fill:"currentColor",animate:{rotate:w?360:0},transition:{duration:.6,ease:"easeInOut"},children:(0,s.jsx)("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})})}),(0,s.jsx)(v,{as:"button",onClick:e=>{e.preventDefault(),j(!0),setTimeout(()=>j(!1),600),navigator.clipboard.writeText("kenshin13"),i(!0),f(!0),setTimeout(()=>{f(!1),i(!1)},2e3)},"aria-label":"Discord: kenshin13 (Click to copy)",whileHover:{scale:1.1},whileTap:{scale:.95},title:"Discord: kenshin13 (Click to copy)",style:{background:r?"rgba(74, 222, 128, 0.1)":"rgba(153, 69, 255, 0.05)",borderColor:r?"rgba(74, 222, 128, 0.3)":"rgba(153, 69, 255, 0.2)"},children:(0,s.jsx)(o.P.svg,{viewBox:"0 0 24 24",fill:"currentColor",animate:{rotate:k?360:0},transition:{duration:.6,ease:"easeInOut"},children:(0,s.jsx)("path",{d:"M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"})})})]})})]})})]})}}}]);