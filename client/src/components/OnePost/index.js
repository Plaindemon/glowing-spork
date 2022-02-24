import React from 'react';
import { useParams } from 'react-router-dom';

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHT } from '../../utils/queries';

import FistBumps from '../FistBumps';
import FistBumpsForm from '../FistBumps/FistBumpsForm/FistBumpsForm';

const OnePost = props => {
  const { id: thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_THOUGHT, {
    variables: { id: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 600 }} className="text-dark">
            {thought.username}
          </span>{' '}
          thought on {thought.createdAt}
        </p>
        <div className="card-body">
          <p>{thought.thoughtText}</p>
        </div>
      </div>

      {thought.reactionCount > 0 && ( <FistBumps reactions={thought.reactions} />)}

      {Auth.loggedIn() && <FistBumpsForm thoughtId={thought._id} />} 
    </div>
  );
};

export default OnePost;