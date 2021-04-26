import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'UseMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(3);
    const [b, setB] = useState(3);
    let resultA = 1;
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i;
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for a: {resultB}
            </div>
        </>
    )

}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users secret')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret); // реакт не будет перерисовывать Users при изменении стейта Counter


export const HelpToReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Lisa', 'Anna', 'Sophy']);
    console.log('Help to ReactMemo');

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }


    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
            <button onClick={addUser}>Add user</button>
            <Users users={newArray}/>
        </>
    )

}

export const LikeUseCallback = () => {
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['JS', 'CSS', 'React']);
    console.log('Help to React Memo');


    const memoizedAddBook = useMemo(() => { //вызывает ф-цию и запоминает то, что ф-ция вернула
        return () => { // need to return function
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => { // сразу запоминает саму ф-цию
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
    }, [books])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}

            <Books books={books}
                   addBook={memoizedAddBook}
                   addBook2={memoizedAddBook2}
            />
        </>
    )

}
type  BooksSecretPropsType = {
    books: Array<string>
    addBook: () => void
    addBook2: () => void
}
const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('Books secret')
    return <div>
        <button onClick={props.addBook}>Add book</button>
        <button onClick={props.addBook2}>Add book2</button>

        {props.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
}

const Books = React.memo(BooksSecret);


