export function Button(props){
    return(
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}
export function Header(props){
    return (
        <h1>{props.title}</h1>
    )
 
}
export function List(props){
    const ListItems = props.items.map((item)=>
    <li key={item}>{item}</li>
    )
    return <ul>
        {ListItems}
    </ul>

}
function Person(props){
    return( 
    <p>
            {props.name} is{props.age}old

    </p>
)}
// export function Header(props){
//     return (
//         <h1>{props.title}</h1>
//     )

// }
export default Person;