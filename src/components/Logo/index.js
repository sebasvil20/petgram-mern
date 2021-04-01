import React from 'react'
import { Svg } from './styles'
import { Link } from '@reach/router'

export const Logo = (props) => (
  <Link to='/'>
    <Svg
      width={309.9}
      height={141.24}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='95.05 4.38 309.9 141.24'
      style={{
        background: '0 0'
      }}
      preserveAspectRatio='xMidYMid'
      {...props}
    >
      <defs>
        <linearGradient
          id='prefix__editing-gradow-gradient'
          x1={0}
          x2={1}
          y1={0.5}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#f0f' />
          <stop offset={1} stopColor='#0ff' />
        </linearGradient>
        <filter
          id='prefix__editing-gradow-filter'
          x='-100%'
          y='-100%'
          width='300%'
          height='300%'
        >
          <feFlood floodColor='#fffcd9' result='flood' />
          <feComposite
            operator='in'
            in2='SourceAlpha'
            in='flood'
            result='shadow'
          />
          <feOffset dx={-4} dy={-4} in='SourceGraphic' result='offset-1' />
          <feOffset dx={4} dy={4} in='shadow' result='offset-2' />
          <feMerge>
            <feMergeNode in='offset-2' />
            <feMergeNode in='offset-1' />
          </feMerge>
        </filter>
      </defs>
      <g filter='url(#prefix__editing-gradow-filter)'>
        <path
          d='M36.31-14.69q.44-.25.82-.4.37-.16.71-.16.69 0 1.04.52.34.51.34 1.26 0 .81-.42 1.66-.42.84-1.27 1.4-3.34 2.5-5.97 4.57-2.62 2.06-4.95 3.54Q24.28-.81 22.06 0q-2.22.81-4.75.81-2.37 0-3.67-.87-1.3-.88-1.3-2.41v-.23q0-.11.04-.27.12-.94.96-2.16.85-1.21 2.04-2.53 1.18-1.31 2.53-2.65 1.34-1.35 2.48-2.55 1.14-1.2 1.89-2.2.75-1 .75-1.63 0-.37-.31-.59-.31-.22-1.03-.22-1.25 0-2.58.55-1.33.54-2.63 1.47-1.29.92-2.53 2.1-1.23 1.19-2.31 2.47-1.08 1.28-1.97 2.58-.89 1.3-1.51 2.39-.19.35-.53.97-.35.63-.75 1.41-.41.78-.86 1.61-.46.82-.83 1.56-.38.73-.67 1.31-.3.58-.43.8-.15.28-.51 1.06t-.83 1.83q-.47 1.05-.98 2.2Q1.25 7.97.8 9q-.46 1.03-.8 1.81t-.44 1.07q-.31.81-.73 1.53t-.97 1.26q-.55.55-1.25.88-.7.33-1.58.33-1.12 0-1.86-.46-.73-.45-.73-1.73 0-.63.18-1.28.19-.66.47-1.3.28-.64.58-1.25.3-.61.55-1.17 1.69-3.13 3.44-6.27Q-.59-.72 1.02-3.8 2.63-6.88 4-9.84q1.38-2.97 2.28-5.69.25-.56.69-1.6.44-1.03 1-2.03.56-1 1.26-1.73.71-.74 1.52-.74 1.25 0 1.81.49.57.48.57 1.42 0 .19-.07.59-.06.41-.15.86-.1.46-.21.86-.11.41-.2.6 1.16-1.07 2.5-2.11 1.34-1.05 2.78-1.89 1.44-.85 2.94-1.38 1.5-.53 3-.53 1.03 0 2.05.25 1.01.25 1.81.74.8.48 1.3 1.21.5.74.5 1.71 0 1.28-.77 2.73t-1.92 2.92q-1.16 1.47-2.5 2.86-1.35 1.39-2.52 2.53T19.7-5.83q-.79.8-.82 1.08 0 .37.28.61.28.23.93.23.54 0 1.57-.5t2.89-1.73q1.86-1.24 4.72-3.31 2.86-2.08 7.04-5.24zm10.47-3.75q-.15-.03-.28-.03h-.28q-1.19 0-2.22.47-1.03.47-1.89 1.23-.86.77-1.53 1.74t-1.2 1.92q-.54.95-.9 1.83-.35.87-.54 1.47 1.09-.57 2.26-1.28 1.18-.72 2.21-1.38 1.03-.66 1.79-1.19.77-.53 1.08-.72 1.41-.87 1.94-1.64.53-.76.53-1.32 0-.47-.3-.75-.29-.29-.67-.35zm1.13-4.31q2.59 0 3.87 1.25 1.28 1.25 1.28 3.47 0 1.31-.68 2.75-.69 1.44-2.38 2.92t-4.52 3.03q-2.82 1.55-7.07 3.11.15.91.97 1.42.81.52 2.15.52 1.44 0 3.08-.42 1.64-.43 3.25-1.08Q49.47-6.44 51-7.2q1.53-.77 2.77-1.46 1.23-.68 2.06-1.18.83-.5 1.11-.63.28-.19.51-.22.24-.03.43-.03.37 0 .62.17t.42.41q.17.23.24.5.06.26.06.45 0 .28-.06.67-.07.39-.47.89-.16.16-1.05.85t-2.3 1.62q-1.4.94-3.26 1.99-1.86 1.04-3.94 1.92-2.08.87-4.33 1.45t-4.43.58q-1.88 0-3.33-.72-1.46-.72-2.47-1.94-1.02-1.21-1.55-2.81-.53-1.59-.53-3.34 0-1.35.53-2.95.53-1.61 1.53-3.24 1-1.62 2.46-3.17 1.45-1.55 3.26-2.74 1.81-1.18 3.99-1.9 2.17-.72 4.64-.72zm30.28 5.28l-13 .09q-1.16 2.25-2.19 4.4-1.03 2.14-1.94 3.95-.37.75-.73 1.73-.36.99-.36 1.74 0 .43.2.68.21.25.67.25.66 0 1.66-.39 1-.39 2.16-1.03 1.15-.64 2.43-1.47 1.29-.82 2.52-1.71 1.23-.9 2.36-1.79 1.12-.89 2-1.64.5-.34.94-.34.53 0 .87.47.35.47.35 1.19 0 .71-.35 1.46-.34.75-1.25 1.47-2.03 1.85-4.11 3.5-2.08 1.66-4.12 2.93Q64.25-.72 62.25.03q-2 .75-3.87.75-1.25 0-2.1-.33-.84-.32-1.36-.9-.51-.58-.73-1.35-.22-.76-.22-1.64 0-1.56.53-3.25t1.19-3.03l1.86-3.84q.92-1.91 1.79-3.66H58q-1.75 0-2.41-.56-.65-.56-.65-1.28 0-.32.2-.77t.59-.84q.4-.39.96-.67.56-.29 1.28-.29h3.37l6.6-13.09q.62-1.19 1.54-1.7.93-.52 1.93-.52.93 0 1.72.5.78.5.78 1.66 0 .59-.27 1.2-.26.61-.7 1.42-.28.53-.69 1.27-.41.73-.86 1.56-.45.83-.94 1.74-.48.9-.95 1.75-1.06 2-2.25 4.21h10.19q.75 0 1.37.08.63.08 1.08.32.45.23.7.64.25.4.25 1.09 0 .34-.11.69-.1.34-.4.62-.3.28-.81.47-.52.19-1.33.25zm8.69-5.25q1.37 0 2.4.34 1.03.35 1.75.75.81.5 1.44 1.1.44-.28.94-.53.43-.22.97-.39.53-.18 1.06-.18 1.37 0 2.12.57.75.56.75 1.34 0 .41-.22.81L90.78-5.06l.6-.53q3.68-2.16 6.06-3.39 2.37-1.24 3.78-1.83 1.41-.6 2.01-.74.61-.14.77-.14.72 0 1.11.55.39.55.39 1.36 0 .9-.52 1.84-.51.94-1.57 1.35-1.41.71-3.28 1.54-1.88.83-3.91 1.83-2.03 1-4.08 2.24-2.05 1.23-3.83 2.73l-6.06 10.97q-.75 1.78-1.36 2.91-.61 1.12-1.2 1.78-.6.65-1.22.9-.63.25-1.44.25-1.22 0-1.92-.84t-.7-2.03q0-1.25.59-2.91.59-1.65 1.67-3.58 1.08-1.92 2.61-4.03 1.53-2.11 3.41-4.29l3.87-4.94q-1.18 1.09-2.34 1.87T82-.92q-1.06.48-1.98.7-.93.22-1.61.22-1.25 0-2.32-.58-1.06-.58-1.82-1.61-.77-1.03-1.21-2.44-.43-1.4-.43-3.06 0-3.44 1.32-6.22 1.33-2.78 3.41-4.73 2.08-1.95 4.59-3.02 2.52-1.06 4.93-1.06zm-1.19 5.5q-1.47 0-2.85.74-1.37.73-2.43 1.93-1.07 1.21-1.69 2.77-.63 1.56-.63 3.22 0 .5.08 1.08.08.57.35 1.07.26.5.78.83.51.33 1.42.33.66 0 1.55-.58t1.84-1.47q.95-.89 1.86-1.97.91-1.07 1.64-2.11.73-1.03 1.17-1.85.44-.83.44-1.24 0-.69-.38-1.2-.37-.52-.92-.86-.54-.35-1.15-.52-.61-.17-1.08-.17zm27.03-.97l.06-.03q1.22-.75 2.52-1.37 1.29-.63 2.51-1.08 1.22-.46 2.33-.72 1.11-.27 1.99-.27 1.4 0 2.17.68.76.67.76 2.26 0 .34-.03.74-.03.39-.12.82-.16.82-.94 1.91-.78 1.09-1.83 2.28-1.05 1.19-2.25 2.39l-2.22 2.22q-1.01 1.02-1.69 1.77-.67.75-.67 1.03 0 .25.03.34.04.09.29.09 1.68-.71 3.76-1.73t4.14-2.08q2.06-1.06 3.91-2.08 1.84-1.01 3.12-1.76.28-.16.58-.27.3-.11.55-.11.56 0 .94.38.37.37.37 1 0 .72-.61 1.64-.61.92-2.05 1.92l-2.45 1.55q-1.36.86-2.84 1.78-1.49.92-3 1.8-1.52.87-2.92 1.56-1.41.69-2.65 1.11-1.23.42-2.14.42-2.15 0-3.23-1.03t-1.08-2.66q0-.25.03-.37.22-1.38.82-2.66.59-1.28 1.34-2.44.75-1.15 1.56-2.2.81-1.05 1.49-1.97.67-.92 1.11-1.7.43-.78.43-1.44 0-.16-.06-.31-.06-.16-.28-.16-.38 0-1.24.28-.85.28-1.82.75-.97.47-1.85 1.08-.87.61-1.25 1.3-.5.87-1.15 2.22-.66 1.34-1.36 2.81-.71 1.47-1.36 2.91-.66 1.43-1.13 2.46-.37.91-.98 1.63-.61.72-1.33 1.22-.72.5-1.47.78t-1.37.28q-.72 0-1.14-.37-.43-.38-.43-1.22 0-.35.11-.86.11-.52.46-1.14.56-1.07 1.14-2.32.58-1.25 1.33-2.85.75-1.61 1.73-3.69t2.33-4.8q-.44-.37-.74-.92-.29-.55-.29-1.36 0-.75.31-1.3.31-.54.84-.89.53-.34 1.24-.51.7-.18 1.48-.18.81 0 1.63.15.81.14 1.45.42.64.28 1.05.68.4.41.4.94 0 .1-.06.25-.06.16-.14.35-.08.18-.14.34-.06.16-.06.25 0 .06.03.06h.03zm27.84 1.13q-1.47 0-2.84.75-1.38.75-2.44 1.97-1.06 1.21-1.69 2.73-.62 1.52-.62 3.05 0 .62.08 1.29.08.68.36 1.24.28.56.79.94.52.37 1.39.37.69 0 1.61-.61.93-.61 1.91-1.56.98-.95 1.92-2.09.94-1.15 1.69-2.24.75-1.09 1.22-1.97.47-.87.47-1.28 0-.59-.41-1.08-.41-.48-1-.83-.59-.34-1.27-.51-.67-.17-1.17-.17zM162.22-9q-.56.53-1.5 1.47t-2.14 2.03q-1.2 1.09-2.56 2.2t-2.79 2.02q-1.42.9-2.79 1.48-1.38.58-2.6.58-1.09 0-1.87-.47t-1.3-1.22q-.51-.75-.76-1.7t-.25-1.95q0-.66.09-1.3t.31-1.2q-.97 1.31-2.2 2.7-1.23 1.39-2.66 2.53-1.42 1.14-2.97 1.88-1.54.73-3.14.73-.81 0-1.89-.33-1.07-.32-2.04-1.08-.97-.75-1.63-1.93-.65-1.19-.65-2.91 0-1.28.39-3.06t1.18-3.7q.8-1.93 2.03-3.8 1.24-1.88 2.93-3.36 1.68-1.49 3.84-2.41 2.16-.92 4.81-.92 1.38 0 2.41.34 1.03.35 1.75.75.81.5 1.44 1.1.53-.28 1.09-.53.47-.22.98-.39.52-.18.9-.18 1.18 0 1.93.66t.75 1.44q0 .22-.03.34-.15.6-.48 1.5-.33.91-.74 2.02-.4 1.11-.83 2.31-.42 1.2-.76 2.36t-.56 2.17q-.22 1.02-.22 1.74 0 .93.31 1.54t1.06.61q.47 0 1.11-.29.64-.3 1.39-.8.75-.5 1.55-1.14.8-.64 1.55-1.3 1.75-1.56 3.72-3.56.5-.41.96-.41.63 0 1.05.61.42.61.42 1.36 0 .88-.59 1.47zm6.66 7.94q0-1.5.67-3.07.67-1.56 1.7-3.21 1.03-1.66 2.25-3.36 1.22-1.71 2.31-3.49.32-.5.5-.95.19-.45.19-.92 0-.5-.28-.83-.28-.33-.81-.33-1.28 0-2.47.55-1.19.54-2.28 1.44-1.1.89-2.08 2.04-.99 1.16-1.85 2.39-.85 1.24-1.6 2.46-.75 1.21-1.38 2.21-.56 1.04-1.03 2.25-.47 1.22-1.02 2.25-.54 1.04-1.23 1.74t-1.72.7q-1.12 0-1.78-.72-.66-.72-.66-1.72 0-.56.41-1.75.41-1.18 1.05-2.76.64-1.58 1.45-3.36.81-1.78 1.61-3.53.8-1.75 1.5-3.3.7-1.55 1.17-2.64.56-1.34 1.48-2 .93-.66 1.83-.66.78 0 1.39.58.61.58.61 1.67 0 .82-.37 1.79.84-.79 1.81-1.69.97-.91 2.11-1.67 1.14-.77 2.55-1.27 1.4-.5 3.15-.5.88 0 1.66.22.78.22 1.39.69.61.47 1 1.22t.45 1.81q.72-.72 1.57-1.42.84-.71 1.82-1.27.99-.56 2.14-.91 1.16-.34 2.57-.34 1.03 0 1.97.22.93.22 1.67.73.73.52 1.15 1.33.43.81.43 2 0 1.88-.86 3.56-.86 1.69-2.02 3.1-.37.47-1 1.19-.62.71-1.22 1.53-.59.81-1.03 1.67-.44.86-.44 1.61 0 .69.42.87.43.19 1.11.19 1.32 0 2.85-.78t2.98-1.89q1.46-1.11 2.72-2.31 1.27-1.21 2.02-2.02.18-.22.43-.31.25-.1.5-.1.57 0 1.02.5.45.5.45 1.32 0 .62-.37 1.37-.38.75-1.28 1.47-1.69 1.63-3.46 3.11-1.76 1.48-3.56 2.63-1.8 1.14-3.59 1.82-1.8.69-3.58.69-2.31 0-3.74-1.09-1.42-1.1-1.42-3.47 0-1.56.6-2.94.59-1.37 1.47-2.64.87-1.27 1.84-2.45.97-1.19 1.69-2.38.31-.5.5-.95.18-.45.18-.92 0-.5-.28-.83-.28-.33-.81-.33-1.28 0-2.47.55-1.19.54-2.28 1.44-1.09.89-2.08 2.04-.98 1.16-1.84 2.39-.86 1.24-1.61 2.46-.75 1.21-1.38 2.21-.56 1.04-1.03 2.25-.47 1.22-1.01 2.25-.55 1.04-1.24 1.74-.68.7-1.72.7-.37 0-.81-.14-.44-.14-.8-.39-.35-.25-.59-.59-.23-.35-.26-.75z'
          fill='url(#prefix__editing-gradow-gradient)'
          transform='translate(151.662 102.75)'
        />
      </g>
      <style />
    </Svg>
  </Link>
)
