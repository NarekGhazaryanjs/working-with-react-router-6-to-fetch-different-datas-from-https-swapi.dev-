import classes from '../../ui/Global.module.css'

const NestedItem = (props) => {
    return (
        <span className={classes['nested-item']}>
            {props.children}
        </span>
    )
}

export default NestedItem