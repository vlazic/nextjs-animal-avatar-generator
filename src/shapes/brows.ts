import { Shape } from './types'

export const brows: Shape[] = [
  (_color: string) => `
    <g>
     <path d="M270.94,199.71c14.78-16.05,33.45-19.66,55.15-13.62"/>
     <path d="M228.65,199.71c-14.78-16.05-33.45-19.66-55.15-13.62"/>
    </g>
  `,
  (_color: string) => `
    <g>
     <polygon points="273.55,160.28 332.81,189.89 328.55,192.62 270,178.66"/>
     <polygon points="226.45,160.28 167.19,189.89 171.45,192.62 230,178.66"/>
    </g>
  `,
  (_color: string) => `
    <g>
     <path d="M324.06,160.88l-55.4,4.67c-4.51,0.38-8.48-2.97-8.86-7.48c-0.38-4.51,2.97-8.48,7.48-8.86c0.45-0.04,0.94-0.03,1.38,0l55.4,4.67c1.93,0.16,3.37,1.86,3.2,3.8C327.11,159.4,325.73,160.74,324.06,160.88z"/>
     <path d="M175.94,153.88l55.4-4.67c4.51-0.38,8.48,2.97,8.86,7.48s-2.97,8.48-7.48,8.86c-0.45,0.04-0.94,0.03-1.38,0l-55.4-4.67c-1.93-0.16-3.37-1.86-3.2-3.8C172.89,155.35,174.27,154.02,175.94,153.88z"/>
    </g>
  `,
]