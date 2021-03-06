import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {


    componentDidMount(){
        document.title = "Junyao Ren's ePortfolio"
    }


  render() {

    return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Junyao's Portfolio</Link>} scroll>
                    <Navigation>
                        <Link to="/blog">Blog</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Junyao's Portfolio</Link>}>
                    <Navigation>
                      <Link to="/blog">Blog</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>

    );
  }
}

export default App;
