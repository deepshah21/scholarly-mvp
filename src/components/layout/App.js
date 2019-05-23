﻿import React from 'react'
import { Route } from 'react-router'
import Layout from '.././layout/Layout'
import Home from '.././pages/Home'
import UserManagement from '.././pages/UserManagement'
import CardForm from '.././pages/Card'
import Departments from '.././pages/Departments'
import Messages from '.././pages/messages/Messages'

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route path="/Departments" component={Departments} />
    <Route path="/Messages" component={Messages} />
    <Route path="/userManagement" component={UserManagement} />
    <Route path="/card" component={CardForm} />
  </Layout>
);