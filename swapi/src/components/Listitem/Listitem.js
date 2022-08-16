import classes from '../../ui/Global.module.css'

const Listitem = (props) => {
    return (
        <li className={classes['list-item']}>
            {props.children}
        </li>
    )
}
export default Listitem