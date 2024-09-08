const App = () => {
    const friends = [
        { name: 'Peter', age: 4 },
        { name: 'Maya', age: 10 },
    ]

//     friends.map((item) => {
//        <p>It's a me {friends[i].name}</p>
//        <p>{friends[i].name}</p>
//    }
    
    return (
        <>
                {friends.map((friend) => (
                    <p key={friend.id} > it's a me {friend.name} and I'm {friend.age} years old</p>
                ))}
            <p>test</p>
        </>
    )
}
export default App
