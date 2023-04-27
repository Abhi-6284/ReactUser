import React from 'react';
import Card from '../../UI/Card/Card';

import styless from './ViewUser.module.css';

const ViewUser = props => {

    return (
        <>
            <Card>
                <h1>Users Details</h1>
                <div>
                    <ul>
                        {props.users.map((user) => (
                            <li className={styless.list} key={user.id}>{user.name}&nbsp;({user.age}&nbsp;Year old)</li>
                        ))}

                    </ul>
                </div>
            </Card>
        </>
    );
}

export default ViewUser;
