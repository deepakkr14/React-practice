import st from './Card.css'
const Card=(props)=>{
return <div className={`${st.card} ${props.className}`}>{props.children}</div>
}
export default Card;