import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import Input from 'components/UI/Input';
import Modal from 'components/UI/Modal';
import { MdSearch } from 'react-icons/lib/md';
import './index.less';

const SearchInput = Input.Search;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visiblity: false,
    };
  }

  @autobind
  handleOk() {
    this.setState({
      visible: false,
    });
  }

  @autobind
  handleCancel() {
    this.setState({
      visible: false,
    });
  }

  @autobind
  showModal() {
    this.setState({
      visible: true,
    });
  }

  @autobind
  handleSubmit(e) {
    e.preventDefault();
    this.handleCancel();
  }

  render() {
    return (
      <div onClick={this.showModal}>
        <div className="iconWrapper">
          <MdSearch className='topbarIcon' />
        </div>
        <Modal
          title='Basic Modal'
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          wrapClassName='searchModal'
          width='60%'
          footer={null}
        >
          <div className='searchContainer'>
            <form action='#' onSubmit={this.handleSubmit}>
              <SearchInput size='large' placeholder='Type and hit enter to search...' />
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Search;
