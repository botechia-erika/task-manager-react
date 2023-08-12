
export function Notebook(){
  return (
    <div className="app-name">
     <div className="app-main-note-edit">
        <input type="text" id="title" autoFocus/>
        <textarea id="body" />
    </div>
      <div className="app-main-note-preview">

      </div>
    </div>
  )
}
