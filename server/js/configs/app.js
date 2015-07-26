Meteor.if(Meteor.isServer)(

  orion.pages.addTemplate({
    layout: ReactiveTemplates.get('layout'),
    template: 'pagesSimple',
    name: 'Simple',
    description: 'Simple template'
  }, {
    content: orion.attribute('froala', {
      label: 'Content'
    })
  })

);
