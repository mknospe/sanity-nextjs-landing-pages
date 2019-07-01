export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d1a34ec514280d85298f415',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-n7gyohfq',
                  apiId: 'c4d5d2e6-e3e3-46f5-a200-afed696b9e5d'
                },
                {
                  buildHookId: '5d1a34eca8dbff94a53ece6e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6xs8a8rh',
                  apiId: '19b2e202-4243-4e61-b905-d51d25b0158d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mknospe/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6xs8a8rh.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
