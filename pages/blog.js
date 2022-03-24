import React from 'react'

import MainLayout from '../components/Layout/MainLayout'

function BlogPage() {
  return (
    <div>Blog Page</div>
  )
}

BlogPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default BlogPage