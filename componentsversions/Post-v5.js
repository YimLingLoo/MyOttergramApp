
function Post(props) {
    return (
        <li className="post-component">
          <button>
            <img src={props.image} alt={props.name}/>
            <p className="post-name">{props.name}</p>
          </button>
        </li>
    )
}

export default Post;
