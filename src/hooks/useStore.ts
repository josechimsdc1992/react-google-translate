import { type State, type Action } from '../types.d';
import { useReducer } from 'react';

const initialState: State= {
    fromLanguage:'auto',
    toLanguage:'en',
    fromText:'',
    result:'',
    loading:false
  }
  
  function reducer(state: State, action: Action){
    const { type } = action
    if(type==='INTERCHANGE_LANGUAGES'){
      return {
        ... state,
        fromLanguage:state.toLanguage,
        toLanguage:state.fromLanguage
      }
    }
    if(type==='SET_FROM_LANGUAGE'){
      return{
        ... state,
        fromLanguage:action.payload
      }
    }
    if(type==='SET_TO_LANGUAGE'){
      return{
        ... state,
        toLanguage:action.payload
      }
    }
  
    if(type==='SET_FROM_TEXT'){
      return{
        ... state,
        loading:true,
        fromText:action.payload,
        result:''
      }
    }
  
    if(type==='SET_RESULT'){
      return{
        ... state,
        loading:false,
        result:action.payload
      }
    }
    return state
  }

  export function useStore(){
    const [{
        fromLanguage,
        fromText,
        loading,
        result,
        toLanguage
      },dispatch] = useReducer(reducer,initialState)

      const interchangelanguages=()=>{
        dispatch({type:'INTERCHANGE_LANGUAGES'})
      }
      const setFromLanguage=(payload:string)=>{
        dispatch({type:'SET_FROM_LANGUAGE',payload})
      }

      const setFromText=(payload:string)=>{
        dispatch({type:'SET_FROM_TEXT',payload})
      }

      const setResult=(payload:string)=>{
        dispatch({type:'SET_RESULT',payload})
      }

      const setToLanguage=(payload:string)=>{
        dispatch({type:'SET_TO_LANGUAGE',payload})
      }

      return{
        fromLanguage,
        fromText,
        loading,
        result,
        toLanguage,
        interchangelanguages,
        setFromLanguage,
        setFromText,
        setResult,
        setToLanguage
      }
  }