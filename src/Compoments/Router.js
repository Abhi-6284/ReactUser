import React, { useState } from 'react';

import styless from "./Router.module.css";
import AddUser from './User/AddUser/AddUser';
import ViewUser from './User/ViewUser/ViewUser';

const Router = () => {

    const [ userList, setUserLists] = useState([]);

    const addUserHandle = (nName, age) => {
        setUserLists(prevUserDatas => {
            return [
                ...prevUserDatas,
                {
                    id: Math.round(Math.random()*9999 + 1000),
                    name: nName,
                    age: age
                }
            ]
        });
    }
    return (
        <>
            <div className={styless.users}>
                <AddUser addUserData={addUserHandle} />
                <ViewUser users={userList} />
            </div>
        </>
    );
}

export default Router;