import React, {ReactElement} from 'react'

interface Props {
   title: string
   content: string 
   commenstQty: number
   tags: string[]

   // 8 - enum
}



const  Destructuring = ({title, content, commenstQty, tags,}: Props ) => {
    return(
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Quantidade de comentários: {commenstQty}</p>
            <div>
                {tags.map(tag => (
                    <span>#{tag}</span>
                ))}
            </div>
        </div>
    )
}

export default Destructuring 