import React from 'react'

export default function PostPage() {
  const title = '애국가'
  const content = '동해물과 백두산이...'
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-blue-400">포스트 페이지</h1>
      <p>Title: {title}</p>
      <p>content: {content}</p>
    </div>
  )
}
