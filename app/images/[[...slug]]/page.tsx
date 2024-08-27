import React from 'react'

interface Props {
  params: {slug: string[]},
  searchParams: { sortBy: string}
}
const showImage = ({params : {slug},searchParams:{sortBy}}: Props) => {
  return (
    <div>
      View a particular image {slug} {sortBy}
    </div>
  )
}

export default showImage
