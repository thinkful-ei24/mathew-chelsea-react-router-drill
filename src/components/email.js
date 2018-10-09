import React from 'react';
import {Redirect} from 'react-router';
import {Route} from 'react-router-dom';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import './email.css';

export default function Email() {
    //const folderId = 'spam';

    return (
        <div className="email">
            <Sidebar />
            <main>
                <Route exact path='/' render={() => <Redirect to="/inbox/" />} />
                <Route exact path='/:folderId' component={EmailList} />
                <Route exact path='/:folderId/:emailId' component={SingleEmail} />
                {/* <EmailList folderId="inbox" /> */}
                {/* <SingleEmail folderId="inbox" emailId="1" /> */}
            </main>
        </div>
    );
}

//1. Write actions
//2. Write Reducer -> update state
//3. Connect components to actions
//4. Create all the endpoints using React Router

// X /:folderId <EmailList> for folderId
// X /:folderId/:emailId <SingleEmail> for emailId and folderId
// X / is a redirect to /inbox (Use Redirect and Switch)

// Sidebar should always be displayed

// component={() => <EmailList folderId="inbox" />} />
            