import React from 'react'
import { useState } from 'react'

const Calculator = () => {
    const [value,setValue]= useState('')
    const [operator,setOperator]= useState(null);
    const[var1,setVar1]= useState(null)
    const[var2,setVar2]= useState(null)
    const [theme,setTheme]=useState(true)
    const themeChange=()=>{
        // setTheme(!theme)
        if(theme){
            document.documentElement.style.setProperty('--background-color', 'hsl(222, 26%, 31%)')
            document.documentElement.style.setProperty('--input-color', 'hsl(222, 26%, 15%)')
            document.documentElement.style.setProperty('--container-color', 'hsl(223, 31%, 20%)')
            document.documentElement.style.setProperty('--special-color', 'hsl(225, 21%, 49%)')
            document.documentElement.style.setProperty('--equal-color', 'hsl(6, 63%, 50%)')
            document.documentElement.style.setProperty('--title-color', 'white')
            document.documentElement.style.setProperty('--input-text-color', 'white')
            // document.getElementsByClassName('theme-toggle').style.left='0';
            document.querySelector('.theme-toggle').style.left='0%'
        }
        else{
            document.documentElement.style.setProperty('--background-color', 'hsl(0, 0%, 90%)')
            document.documentElement.style.setProperty('--input-color', 'hsl(0, 0%, 95%)')
            document.documentElement.style.setProperty('--container-color', 'hsl(0, 5%, 81%)')
            document.documentElement.style.setProperty('--special-color', 'hsl(185, 42%, 37%)')
            document.documentElement.style.setProperty('--equal-color', 'hsl(25, 98%, 40%)')
            document.documentElement.style.setProperty('--title-color', 'hsl(221, 14%, 31%)')
            document.documentElement.style.setProperty('--input-text-color', 'hsl(221, 14%, 31%)')
            // document.getElementsByClassName('theme-toggle').style.left='100%';
            document.querySelector('.theme-toggle').style.left='60%'
        }
    }
    const handleOperator=(x)=>{
        if(!value){
            console.error('Please enter a number first')
        }
        else{
            if(!var1){
                setVar1(parseFloat(value))
                setValue('')
                setOperator(x)
            }
        }
    }
    const showResult=()=>{
        if(!var1){
            console.error('Error')
        }
        if(var1){
            setVar2(parseFloat(value))
        }
        
    }
    const addNumber=(x)=>{
        setValue(value+x)
    }
    const resetApp=()=>{
        setVar1(null)
        setVar2(null)
        setValue('')
        setOperator(null)
    }
    
    React.useEffect(() => {
        if(operator==='+'){
            setValue(var1+var2)
        }
        else if(operator==='-'){
            setValue(var1-var2)
        }
        else if(operator==='*'){
            setValue(var1*var2)
        }
        else if(operator==='/'){
            setValue(var1/var2)
        }
    }, [var2])
    React.useEffect(()=>{
        themeChange()
    },[theme])
    
    return (
        <div className="calculator">
            <div className="header">
                <h1 className="title">calc</h1>
                <div className="theme">
                    <h3>Theme</h3>
                    <button className="theme-btn" onClick={()=>setTheme(!theme)}>
                    <div className="theme-toggle">
                    
                    </div>
                </button></div>
                
            </div>
            <div className="form-control">
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder={`${var1?operator:0}`}/>
            </div>
            <div className="btn-container">
                <button className="btn btn-number btn-7" onClick={()=>addNumber(7)}><h3>7</h3></button>
                <button className="btn btn-number btn-8" onClick={()=>addNumber(8)}><h3>8</h3></button>
                <button className="btn btn-number btn-9" onClick={()=>addNumber(9)}><h3>9</h3></button>
                <button className="btn btn-number btn-1" onClick={()=>addNumber(1)}><h3>1</h3></button>
                <button className="btn btn-number btn-2" onClick={()=>addNumber(2)}><h3>2</h3></button>
                <button className="btn btn-number btn-3" onClick={()=>addNumber(3)}><h3>3</h3></button>
                <button className="btn btn-number btn-4" onClick={()=>addNumber(4)}><h3>4</h3></button>
                <button className="btn btn-number btn-5" onClick={()=>addNumber(5)}><h3>5</h3></button>
                <button className="btn btn-number btn-6" onClick={()=>addNumber(6)}><h3>6</h3></button>
                <button className="btn btn-number btn-0" onClick={()=>addNumber(0)}><h3>0</h3></button>
                <button className="btn btn-number btn-plus" onClick={()=>handleOperator('+')}><h3>+</h3></button>
                <button className="btn btn-number btn-minus" onClick={()=>handleOperator('-')}><h3>-</h3></button>
                <button className="btn btn-number btn-x" onClick={()=>handleOperator('*')}><h3>x</h3></button>
                <button className="btn btn-number btn-divide" onClick={()=>handleOperator('/')}><h3>/</h3></button>
                <button className="btn btn-number btn-dot" onClick={()=>addNumber('.')}><h3>.</h3></button>
                <button className="btn  btn-reset" onClick={resetApp}><h3>RESET</h3></button>
                <button className="btn  btn-equal" onClick={showResult}><h3>=</h3></button>
                <button className="btn btn-del" onClick={()=>setValue('')}><h3>DEL</h3></button>
            </div>
        </div>
    )
}

export default Calculator
