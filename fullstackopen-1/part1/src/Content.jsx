import Part from './Part'

const Content = (props) => {
    console.log(props.parts)
    const content = props.parts
    return (
        <>
            {/*content.map((item) => (
                <p key={item.name}> {item.name} {item.number}</p>
            ))*/}
            <div>
                <Part name={content[0].name} number={content[0].exercises}/>
                <Part name={content[1].name} number={content[1].exercises}/>
                <Part name={content[2].name} number={content[2].exercises}/>
            </div>
        </>

    )
}

export default Content
