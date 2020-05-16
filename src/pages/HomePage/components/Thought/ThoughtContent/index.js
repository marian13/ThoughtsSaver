import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';

import some from 'lodash/some';

import ThoughtText from './ThoughtText';
import Time from './Time';

import TagList from '@components/TagList';
import View from '@components/View';

import { renderBlocksAsSingleRow, renderBlocksAsSeparateRows } from '@utils/rendering';

const styles = StyleSheet.create({
  outerView: {
    alignSelf: 'flex-end',
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 5
  },
  container: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
  },
  singleRow: {
    flexWrap: 'wrap'
  },
  firstRow: {
    flexWrap: 'wrap',
  },
  secondRow: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  time: {
    // borderWidth: 1,
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  }
});

const renderSingeRow = ({ thought }) => (
  renderBlocksAsSingleRow({
    containerStyle: [styles.container, styles.singleRow],
    blocks: [
      <ThoughtText key={0} text={thought.text} />,
      <Time key={1} createdAt={thought.createdAt} style={styles.time} />
    ]
  })
);

const renderSeparateRows = ({ thought }) => (
  renderBlocksAsSeparateRows({
    containerStyle: styles.container,
    blocks: [{
      rowContainerStyle: styles.firstRow,
      block: <ThoughtText key={0} text={thought.text} />
    }, {
      rowContainerStyle: styles.secondRow,
      block: (
        <Fragment key={1}>
          <TagList small tags={thought.tags} />
          <Time createdAt={thought.createdAt} style={styles.time}/>
        </Fragment>
      )
    }]
  })
);

const ThoughtContent = thought => {
  return (
    <View style={styles.outerView} >
      {some(thought.tags) ? renderSeparateRows({ thought }) : renderSingeRow({ thought })}
    </View>
  );
};

export default ThoughtContent;
