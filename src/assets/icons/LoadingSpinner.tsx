import * as React from 'react'
export const SvgComponent = (props: any) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={200}
    height={200}
    preserveAspectRatio='xMidYMid'
    style={{
      margin: 'auto',
      background: '0 0',
      display: 'block',
      shapeRendering: 'auto'
    }}
    viewBox='0 0 100 100'
    {...props}
  >
    <circle
      cx={50}
      cy={50}
      r={20}
      fill='none'
      strokeDasharray='94.24777960769379 33.41592653589793'
      strokeWidth={7}
    >
      <animateTransform
        attributeName='transform'
        dur='1s'
        keyTimes='0;1'
        repeatCount='indefinite'
        type='rotate'
        values='0 50 50;360 50 50'
      />
    </circle>
  </svg>
)
export default SvgComponent
