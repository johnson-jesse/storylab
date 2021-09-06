import { StoriesHash, useStorybookState } from '@storybook/api';
import React from 'react';
import { useProjectLabel } from '../Label';
import ActionLabel from './ActionLabel';
import { useTransferStyle } from './style';

type Props = {
  storiesHash: StoriesHash;
}

function Content({ storiesHash: hash }: Props) {
  const { label, refresh }  = useProjectLabel();
  const style = useTransferStyle();

  return (
    <div className={style.root}>
      {Object.values(hash).map(elm => {
        const isLive = label.some(l => l.name === elm.id);
        if (elm.isComponent) return <ActionLabel key={elm.id} refresh={refresh} className={style.component} name={elm.id} avatar={style.avatarComponent} variant="component" isLive={isLive} />
        else if (elm.isLeaf) return <ActionLabel key={elm.id} refresh={refresh} className={style.leaf} name={elm.id} avatar={style.avatarLeaf} variant="bookmarkhollow" isLive={isLive} />
        else return <span key={elm.id}></span>
      })}
    </div>
  )
}

const MemoContent = React.memo(Content);

export default function Transfer() {
  const state = useStorybookState();
  return <MemoContent storiesHash={state.storiesHash} />
}