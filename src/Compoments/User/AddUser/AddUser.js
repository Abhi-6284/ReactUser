import React, { useState } from 'react'

import styless from './AddUser.module.css'
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

const initialInputUser = {
    id: Math.round(Math.random() * 9999 + 1000),
    username: '',
    age: '',
    isError: {
        username: '',
        age: '',
    }
}

const AddUser = props => {

    const [inputUser, setInputUser] = useState(initialInputUser)

    const onChangeHandle = e => {

        const { name, value } = e.target;
        let { isError } = inputUser;

        switch (name) {
            case 'age':
                if (value.length === 0) {
                    isError.age = ' ko app khali nahi chor saakte'
                } else if (value <= 0) {
                    isError.age = ' Isse chhoti Ummar nahi hoti'
                } else {
                    isError.age = ''
                }
                break;
            case 'username':
                if (value.length === 0) {
                    isError.username = ' ko app khali nahi chor saakte'
                } else if (value <= 0) {
                    isError.username = ' Isse chhoti Ummar nahi hoti'
                } else {
                    isError.username = ''
                }
                break;

            default:
                break;
        }

        setInputUser(prevInputUser => ({
            ...prevInputUser,
            isError,
            [name]: value
        }))
    }

    const onFormSubmit = e => {
        e.preventDefault();
        if (inputUser.username.trim().length === 0 || inputUser.age.trim().length === 0) {
            setInputUser(({
                ...inputUser,
                isError: {
                    username: ' Can\'t be Empty',
                    age: ' Can\'t be Empty',
                }
            }))
        } else {
            props.addUserData(inputUser.username, inputUser.age);
            setInputUser(initialInputUser)
        }
    }

    const onClickHandle = e => {

    }

    const { isError } = inputUser;
    // console.log(isError);
    return (
        <>
            <Card>
                <form onSubmit={onFormSubmit}>
                    <div className={`${styless.formGroup}`}>
                        <label
                            className={`${styless.formLabel} ${isError.username.length !== 0 && styless.invalid}`}
                            htmlFor='username'
                        >
                            Username
                            {isError.username.length !== 0 &&
                                <span className={styless.error}>
                                    {isError.username}
                                </span>}
                        </label>
                        <input
                            className={`${styless.formContant}`}
                            type='text'
                            name='username'
                            value={inputUser.username}
                            onChange={onChangeHandle}
                            placeholder='Enter Your Username'
                            autoComplete='off'
                        />
                    </div>
                    <div className={`${styless.formGroup}`}>
                        <label
                            className={`${styless.formLabel} ${isError.age.length !== 0 && styless.invalid}`}
                            htmlFor='age'
                        >
                            Age&nbsp;(Year)
                            {isError.age.length !== 0 &&
                                <span className={styless.error}>
                                    {isError.age}
                                </span>}
                        </label>
                        <input
                            className={`${styless.formContant}`}
                            type='number'
                            name='age'
                            value={inputUser.age}
                            onChange={onChangeHandle}
                            placeholder='Enter Your  Age'
                            onWheel={(e) => e.target.blur()}
                            autoComplete='off'
                        />
                    </div>
                    {/* <div className={`${styless.formGroup}`}> */}
                    <Button
                        type='submit'
                    // onClick={onClickHandle}
                    >
                        Submit
                    </Button>
                    {/* </div> */}
                </form>
            </Card>
        </>
    );
}

export default AddUser;


