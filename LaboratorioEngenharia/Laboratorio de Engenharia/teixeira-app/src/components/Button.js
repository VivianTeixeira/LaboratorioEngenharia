export function Button({status, onClick}){
    return(
        <button className={`${status == 'add' ? 'adicionar' : 'decrementar'}`} onClick={onClick}>
            {
                status == 'add' ? (<span>+</span>) : (<span>-</span>)
            }
        </button>
    )
}