import './Body.css'

function Body({ children, claim }) {
  return (
    <div className="body">
      <div className="claim">{claim}</div>
      {children}
    </div>
  )
}
// Test commit vscode
export default Body