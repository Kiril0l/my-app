import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Loader from './components/Loader/Loader';
import Nav from "./components/NavBar/NavBar";
import { setInitializedThunkCreator } from './redux/appReducer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import UsersContainer from './components/Users/UsersContainer';
// import Login from './components/Login/Login';
// import ProfileContainer from './components/Profile/ProfileContainer';


class App extends React.Component {

  componentDidMount() {
    this.props.setInitializedThunkCreator()
  }

  render() {
    if (!this.props.initialized) {
      return <Loader />
    }

    return (
      <div className='main-area'>
        <HeaderContainer />
        <Nav state={this.props.state.sitebar} />
        <div className='main-area-content'>
          <Suspense fallback={<div><Loader /> </div>}>
            <Routes>
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/profile/:userid" element={<ProfileContainer />} />
              <Route path="/profile/" element={<ProfileContainer />} />
              <Route path="/users/*" element={<UsersContainer />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})



export default connect(mapStateToProps, { setInitializedThunkCreator })(App);
