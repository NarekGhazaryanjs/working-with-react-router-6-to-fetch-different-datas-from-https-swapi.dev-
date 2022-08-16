
import classes from '../../ui/Global.module.css'


const List = (props) => {
    return (
        <ul className={classes.list}> 
           {props.children}
        </ul>
    )
}

export default List