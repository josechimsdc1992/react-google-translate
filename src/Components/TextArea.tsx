/* eslint-disable react/react-in-jsx-scope */
import { Form } from 'react-bootstrap';
import { SectionType } from '../types';

interface Props{
    type:SectionType
    loading?:boolean
    onChange:(value:string)=>void
    value:string
}
const commonStyles = {border:0,height:'150px'}

const getPlaceholder=({type,loading}:{type:SectionType,loading?:boolean})=>{
    if(type===SectionType.From) return 'Introducir texto'
    if(loading===true){
        return 'Cargando'
    }
    return 'Traduccion'
}



export const TextArea=({type,loading,value,onChange}:Props)=>{
    const handleChange=(event:React.ChangeEvent<HTMLTextAreaElement>)=>{
        onChange(event.target.value)
    }
    const styles=type===SectionType.From?
    commonStyles
    :{...commonStyles,backgroundColor:'#f5f5f5'}
    return(
        <Form.Control as='textarea' disabled={type==SectionType.To} onChange={handleChange} value={value} autoFocus={type==SectionType.From} placeholder={getPlaceholder(type,loading)} style={styles}>
        </Form.Control>
    )
}