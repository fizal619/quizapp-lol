import React, { Component} from 'react';
import { Input, Menu, Image } from 'semantic-ui-react'

class Layout extends Component {

  render() {
    const activeItem = this.props.children.props.path;
    console.log('Layout Props', this.props);
    const { handleSearchChange, login, logout, user, children } = this.props;

    return (
      <div>

        <Menu pointing>
          <Menu.Item name='home' active={activeItem === '/'} onClick={this.handleItemClick} />
          <Menu.Item name='leaderboard' active={activeItem === '/leaderboard'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' onChange={handleSearchChange} />
            </Menu.Item>
              {user ? 
                <Menu.Item>
                  <Image src={user.photoURL} size="mini" />
                </Menu.Item>
              :
              null
            }
            <Menu.Item 
              name={ user ? 'logout': 'login' } 
              onClick={ user ? logout : login} />          
          </Menu.Menu>
        </Menu>
        
        {children}

      </div>
    );
  }


}

export default Layout;