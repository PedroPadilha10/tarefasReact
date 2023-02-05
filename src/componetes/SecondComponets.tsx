import React, {ReactElement} from 'react'

interface Props {
    name: string 
}

const  SecondComponets = (props: Props) => {
    return(
        <div>
            <p>Meu segundo compomente</p>
            <p>O nome dele é {props.name}</p>
        </div>
    )
}

export default SecondComponets 