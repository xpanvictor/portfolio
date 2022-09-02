import styles from '../../styles/Home.module.css'

type buttonProps = {
    label: string,
    onClick: (value?: any) => void
}

const Button = ({label, onClick}: buttonProps) => {
    return (
        <button
            className={`${styles.roundBorder} p-2 rounded-md hover:scale-110`}
            onClick={onClick}>{label}</button>
    )
}

export default  Button