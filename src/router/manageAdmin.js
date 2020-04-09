export default [
  {
    path: 'itemPage',
    meta: { title: '总览' },
    component: () => import('../components/manageAdmin/table.vue')
  },
  {
    path: 'detail',
    meta: { title: '详细信息' },
    component: () => import('../components/manageAdmin/detail.vue')
  },
  {
    path: 'increase',
    meta: { title: '新增管理员' },
    component: () => import('../components/manageAdmin/increase.vue')
  }
]
