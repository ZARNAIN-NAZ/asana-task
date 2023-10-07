function Image (props){
    return <div>
         {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwBb3IlJxkIZtXG81l9rnjEfKEDa4PhiDBm-IPNsKcCg&s'></img> */}
<img src={props.src} />

    </div>
}
export default Image;