import React from "react";
import {useNavigate} from 'react-router-dom'
export const AboutPage: React.FC = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return(
        <div>
            <h1>Страница информации о деле</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error molestias nostrum consequuntur ab minus modi voluptates maxime doloremque, cupiditate sint culpa accusamus blanditiis natus nemo tempore ducimus excepturi? Nemo, natus.</p>
            <button className="btn" onClick={handleClick}>Вернуться к списку дел</button>
        </div>
    )
}