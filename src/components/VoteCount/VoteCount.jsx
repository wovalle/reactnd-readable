import React from 'react';
import propTypes from 'prop-types';

const VoteCount = props => {
  return (
    <span className="vote-count">
      <i onClick={props.voteAction(true)} className="fa fa-chevron-up" aria-hidden="true"></i>
      <span className="px-1">{props.count}</span>
      <i onClick={props.voteAction(false)} className="fa fa-chevron-down" aria-hidden="true"></i>
    </span>
  );
};

VoteCount.propTypes = {
  count: propTypes.number.isRequired,
  voteAction: propTypes.func.isRequired,
};

export default VoteCount;
