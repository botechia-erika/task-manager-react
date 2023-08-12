
export function Homepage(){
  return (
    <div className="app-name">
     <div className="app-main-note-edit">
        <input type="text" id="title" autoFocus/>
        <textarea id="body" />
    </div>
      <div className="app-main-note-preview">
        <h2 className="preview-title">hekkoi</h2>
      <div className="markdown-preview">
        MARKDOWN PREVIEW
      </div>
      
      </div>
    </div>
  )
}
