
export function Notebook(){
  return (
    <div className="app-name">
     <div className="app-main-note-edit">
        <input type="text" id="title" autoFocus/>
        <textarea id="body" placeholder="Escreva sua BLÁHNote aqui"/>
    </div>
      <div className="app-main-note-preview">
          <h2  className="preview-title">TITULO</h2>
          <div className="markdown-preview">
            markdown preview
          </div>
      </div>
    </div>
  )
}
