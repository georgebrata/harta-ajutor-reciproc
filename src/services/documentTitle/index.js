const DOCUMENT_MAIN_TITLE = 'Harta Ajutor Reciproc'

export default function makeDocumentTitle (title = null) {
  return title ? title + ' - ' + DOCUMENT_MAIN_TITLE : DOCUMENT_MAIN_TITLE
}
