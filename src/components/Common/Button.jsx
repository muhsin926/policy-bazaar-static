
// eslint-disable-next-line react/prop-types
const Button = ({style, title, icon, click}) => (
    <button className={style} onClick={click}>{title}{icon}</button>
)

export default Button