import React, { Component} from 'react';
import { Input, Menu } from 'semantic-ui-react'

class Layout extends Component {
  render() {
    const activeItem = this.props.children.props.path;
    console.log('HEADER', this.props);
    return (
      <div>

        <Menu pointing>
          <Menu.Item name='home' active={activeItem === '/'} onClick={this.handleItemClick} />
          <Menu.Item name='admins' active={activeItem === '/admins'} onClick={this.handleItemClick} />
          <Menu.Item name='logout' onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        
        {this.props.children}

      </div>
    );
  }


}

export default Layout;