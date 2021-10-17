const StatNum = ({text, counter}) => {

    if (counter.type === undefined) {
        return (
            <div>
                <p>{text} : </p>
            </div>
        )
    }

    return (
        <div>
            <p>{text} : {counter} </p>
        </div>
    )
    
}

export default StatNum;