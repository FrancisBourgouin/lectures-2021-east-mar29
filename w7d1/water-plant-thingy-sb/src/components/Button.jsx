export default function Button(props) {

  return (
    <button>
      {props.danger ? '🏜' : '🌊'}
      {props.children}
    </button>
  )
}