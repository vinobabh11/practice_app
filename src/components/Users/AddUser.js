import React, { useRef, useState } from 'react'
import Card from '../UI/Card';
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredName, setEnterName] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [errorModel, setErrorModel] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();
        
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setErrorModel({
                title:'Invalid Input',
                message: 'Please enter valid name and age '
            })
            return;
        }
        if (+enteredAge < 1) {
            setErrorModel({
                title:'Invalid Age',
                message: 'Please enter valid age !!!!!'
            })
            return;
        }
        else {
            props.onAddUser(enteredName, enteredAge);
           nameInputRef.current.value = '';
           ageInputRef.current.value = '';
        }
    }


    const errorHandler = () => {
        setErrorModel(null);
    }
    return (
        <div>
            {errorModel && 
            <ErrorModel 
            onConfirm={errorHandler} 
            title={errorModel.title} 
            message={errorModel.message} />}

            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    
                    <input 
                    type="text" 
                    
                    id="username" 
                   
                    ref = {nameInputRef}/>

                    <label htmlFor="age">Age</label>

                    <input 
                    type="number" 
                    name="" 
                    id="age" 
                   
                    ref = {ageInputRef}/>
                    
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser
