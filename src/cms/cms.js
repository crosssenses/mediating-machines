import CMS from 'netlify-cms-app'


import NewsPostPreview from './preview-templates/NewsPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('news', NewsPostPreview)
