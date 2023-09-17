import React, { useEffect } from 'react'

export default function PageContent() {
    const content = new Array(20).fill(1)

    function width(min = 15, max = 100) {
        return Math.random() * (max - min) + min;
    }

  return (
    <div id='content_page'>
        {content.map((con, ind) => <div style={{ width : width() + '%' }}></div>)}
    </div>
  )
}