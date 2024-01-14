
type  ButtonProps ={
    title:string,
    handleOnClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button =({handleOnClick, title}:ButtonProps)=>{

return(
    <button className="button-18" role="button" onClick={handleOnClick}>
{title}  </button>
)
}

export default Button