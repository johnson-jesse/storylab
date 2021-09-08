import { StoriesHash, useStorybookState } from '@storybook/api';
import React from 'react';
import { useProjectLabel } from '../Label';
import { useTransferStyle } from './style';
import { deleteLabel, postLabel } from "../Label/service";
import ComponentLabel from './ComponentLabel';
import LeafLabel from './LeafLabel';

type Props = {
  storiesHash: StoriesHash;
}

function Content({ storiesHash: hash }: Props) {
  const { label, refresh } = useProjectLabel();
  const style = useTransferStyle();

  const handleClick = (name: string) => {
    postLabel(name).finally(() => {
      refresh();
    });
  };

  const handleDelete = (name: string) => {
    deleteLabel(name).finally(() => {
      refresh();
    });
  };

  return (
    <div className={style.root}>
      {Object.values(hash).map(elm => {

        const arg = {
          key: elm.id,
          name: elm.id,
          classes: style,
          isLive: label.some(l => l.name === elm.id),
          onClick: handleClick,
          onDelete: handleDelete
        }

        if (elm.isComponent)
          return <ComponentLabel {...arg} />
        else if (elm.isLeaf)
          return <LeafLabel {...arg} />
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