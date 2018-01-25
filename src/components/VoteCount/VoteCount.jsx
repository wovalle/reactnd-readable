import React from 'react';
import propTypes from 'prop-types';

const VoteCount = props => {
  return (
    <div className="vote-count">
      <i onClick={props.votePost(true)} className="fa fa-chevron-up" aria-hidden="true"></i>
      <span className="px-1">{props.count}</span>
      <i onClick={props.votePost(false)} className="fa fa-chevron-down" aria-hidden="true"></i>
    </div>
  );
};

VoteCount.propTypes = {
  count: propTypes.number.isRequired,
  votePost: propTypes.func.isRequired,
};

export default VoteCount;
