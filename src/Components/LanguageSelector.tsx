/* eslint-disable react/react-in-jsx-scope */
import Form from 'react-bootstrap/Form';
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../Constants"
import { FC } from 'react';
import { Language,FromLanguage } from '../types';

type Props=
    |{type:'from',value:FromLanguage,onChange:(language:FromLanguage)=>void }
    |{type:'to',value:Language,onChange:(language:Language)=>void }


export const LanguageSelector:FC<Props>=({onChange,type,value})=>{

    const handleChange=(event:React.ChangeEvent<HTMLSelectElement>)=>{
        onChange(event.target.value as Language)
    }
    return(
                                                    
        <Form.Select onChange={handleChange}  aria-label='Selecciona el idioma' value={value}>
            {type==='from' && <option value={AUTO_LANGUAGE}> Detectar Idioma</option>}
            {
                Object.entries(SUPPORTED_LANGUAGES).map(([key,literal]) =>(
                    <option key={key} value={key}>
                        {literal}
                    </option>
                ))
            }
        </Form.Select >
    )
}