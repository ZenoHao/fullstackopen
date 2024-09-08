const Total = (props) => {
    const contentDetail = props.parts;
    const total = contentDetail.reduce((tmp, a) => tmp+a.exercises, 0)
    return (
        <>
            <p>Number of exercises {total}</p>
        </>
    )
}
export default Total
