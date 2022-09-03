import styles from '../../styles/Home.module.css'

type buttonProps = {
    label: string,
    onClick: (value?: any) => void
    type?: any
}

const Button = ({label, onClick, type}: buttonProps) => {
    return (
        <button type={type || 'button'}
            className={`${styles.roundBorder} p-2 rounded-md hover:scale-110`}
            onClick={onClick}>{label}</button>
    )
}

export default  Button