export default function validateTag(item, filters, filterText, categories, component){
  if(item.name.indexOf(filterText) === -1
    || (filters.lineTag          && !item.str)
    || (filters.blockTag         && item.str)
    || (filters.haveAttributes   && !Boolean(item.attrs.length))
    || (filters.outdatedInHtml5  && !(item.spec === 5))
    || (filters.appearInHtml5    && !(item.spec === 2))
    || (filters.useInSeo         && !(item.spec === 7))
    || (filters.noRecommendToUse && !(item.spec === 3))
    || (filters.doNotUse         && !(item.spec === 6))
    || (filters.opened           && !(item.open))

    || (categories.media         && !(item.type === 2))
    || (categories.layout        && !(item.type === 3))
    || (categories.picture       && !(item.type === 4))
    || (categories.object        && !(item.type === 5))
    || (categories.script        && !(item.type === 6))
    || (categories.list          && !(item.type === 7))
    || (categories.link          && !(item.type === 8))
    || (categories.tables        && !(item.type === 9))
    || (categories.text          && !(item.type === 10))
    || (categories.form          && !(item.type === 11))
    || (categories.frame         && !(item.type === 12))
  )
    return false;
  else
    return component;
}
