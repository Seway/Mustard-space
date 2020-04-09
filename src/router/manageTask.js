export default [
  {
    path: 'itemPage',
    meta: { title: '' },
    component: () => import('../components/manageTask/itemPage.vue')
  },
  {
    path: 'detail',
    meta: { title: '详细信息' },
    component: () => import('../components/manageTask/detail.vue')
  },
  {
    path: 'examine',
    meta: { title: '审核' },
    component: () => import('../components/manageTask/examine.vue')
  }
]
