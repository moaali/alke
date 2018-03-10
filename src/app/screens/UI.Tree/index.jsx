import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-component';
import { Col } from 'antd';
import Tree from 'components/UI/Tree';
import PageTitle from 'components/Templates/PageTitle';
import Well from 'components/Templates/Well';
import LayoutContainer from 'components/Templates/LayoutContainer';
import ContentWrapper from 'components/Templates/ContentWrapper';
import './index.less';

const TreeNode = Tree.TreeNode;

const masonryOptions = {
  columnWidth: '.MasonrySizer',
  itemSelector: '.MasonryItem',
  percentPosition: true,
};

const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};

generateData(z);

export default class TreeScreen extends Component {
  state = {
    gData,
    expandedKeys: ['0-0-0', '0-0-1'],
    expandedKeysAlt: ['0-0', '0-0-0', '0-0-0-0'],
    autoExpandParent: true,
    checkedKeys: ['0-0-0'],
    selectedKeys: [],
  }

  onExpand = (expandedKeys) => {
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }

  onCheck1 = (checkedKeys) => {
    this.setState({
      checkedKeys,
      selectedKeys: ['0-3', '0-4'],
    });
  }

  onSelect1 = (selectedKeys, info) => {
    console.log('onSelect', info);
    this.setState({ selectedKeys });
  }

  onSelect2 = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }

  onCheck2 = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  }

  onDragEnter = (info) => {
    console.log(info);
    // this.setState({
    //   expandedKeys: info.expandedKeys,
    // });
  }

  onDrop = (info) => {
    const dropKey = info.node.props.eventKey;
    const dragKey = info.dragNode.props.eventKey;
    const dropPos = info.node.props.pos.split('-');
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
    // const dragNodesKeys = info.dragNodesKeys;
    const loop = (data, key, callback) => {
      data.forEach((item, index, arr) => {
        if (item.key === key) {
          return callback(item, index, arr);
        }
        if (item.children) {
          return loop(item.children, key, callback);
        }
      });
    };
    const data = [...this.state.gData];
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });
    if (info.dropToGap) {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i - 1, 0, dragObj);
      }
    } else {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        item.children.push(dragObj);
      });
    }
    this.setState({
      gData: data,
    });
  }

  render() {
    const loop = data => data.map((item) => {
      if (item.children) {
        return (
          <TreeNode key={item.key} title={item.key} disableCheckbox={item.key === '0-0-0'}>
            {loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} title={item.key} />;
    });

    const loopAlt = data => data.map((item) => {
      if (item.children && item.children.length) {
        return <TreeNode key={item.key} title={item.key}>{loop(item.children)}</TreeNode>;
      }
      return <TreeNode key={item.key} title={item.key} />;
    });

    return (
      <LayoutContainer>
        <Helmet>
          <title>Tree</title>
        </Helmet>
        <PageTitle>Tree</PageTitle>
        <Masonry className='Masonry' options={ masonryOptions }>
          <Col className='MasonrySizer' xl={8} sm={12} xs={24} />
          <div className='MasonryItem'>
            <Well
              title='Basic'
              subtitle='The most basic usage, tell you how to use checkable, selectable, disabled, defaultExpandKeys, and etc.'
            >
              <ContentWrapper>
                <Tree
                  checkable
                  defaultExpandedKeys={['0-0-0', '0-0-1']}
                  defaultSelectedKeys={['0-0-0', '0-0-1']}
                  defaultCheckedKeys={['0-0-0', '0-0-1']}
                  onSelect={this.onSelect2}
                  onCheck={this.onCheck2}
                >
                  <TreeNode title='parent 1' key='0-0'>
                    <TreeNode title='parent 1-0' key='0-0-0' disabled>
                      <TreeNode title='leaf' key='0-0-0-0' disableCheckbox />
                      <TreeNode title='leaf' key='0-0-0-1' />
                    </TreeNode>
                    <TreeNode title='parent 1-1' key='0-0-1'>
                      <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key='0-0-1-0' />
                    </TreeNode>
                  </TreeNode>
                </Tree>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Basic controlled example'
              subtitle='Basic controlled example'
            >
              <ContentWrapper>
                <Tree
                  checkable
                  onExpand={this.onExpand}
                  expandedKeys={this.state.expandedKeys}
                  autoExpandParent={this.state.autoExpandParent}
                  onCheck={this.onCheck}
                  checkedKeys={this.state.checkedKeys}
                  onSelect={this.onSelect}
                  selectedKeys={this.state.selectedKeys}
                >
                  {loop(gData)}
                </Tree>
              </ContentWrapper>
            </Well>
          </div>
          <div className='MasonryItem'>
            <Well
              title='Draggable'
              subtitle='Drag treeNode to insert after the other treeNode or insert into the other parent TreeNode.'
            >
              <ContentWrapper>
                <Tree
                  className='draggable-tree'
                  defaultExpandedKeys={this.state.expandedKeysAlt}
                  draggable
                  onDragEnter={this.onDragEnter}
                  onDrop={this.onDrop}
                >
                  {loopAlt(this.state.gData)}
                </Tree>
              </ContentWrapper>
            </Well>
          </div>
        </Masonry>
      </LayoutContainer>
    );
  }
}
