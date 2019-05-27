import React from 'react'
import { Route } from 'react-router'
import Layout from '.././layout/Layout'
import Home from '.././pages/Home'
import UserManagement from '.././pages/UserManagement'
import CardForm from '.././pages/Card'
import Departments from '.././pages/Departments'
import Messages from '.././pages/messages/Messages'
import Faculties from '.././pages/Faculties'
import Students from '.././pages/Students'
import Fees from '.././pages/Fees'

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route path="/Departments" component={Departments} />
    <Route path="/Messages" component={Messages} />
    <Route path="/Faculties" component={Faculties} />
    <Route path="/Students" component={Students} />
    {/* <Route path="/Students/id/" component={Students} />
    <Route path="/Students/id/attendance" component={Students} />
    <Route path="/Students/id/results" component={Students} />
    <Route path="/Students/id/library" component={Students} /> */}
    <Route path="/Fees" component={Fees} />
    <Route path="/userManagement" component={UserManagement} />
    <Route path="/card" component={CardForm} />
  </Layout>
);
