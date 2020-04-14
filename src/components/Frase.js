import React  from 'react';

const Frase = ({ frase }) => {

    return (

        

        <div className="frase">
            <h2>{frase.quote}</h2>
            <h4 className="autor">{frase.author}</h4>
        </div>

    );
}

export default Frase;