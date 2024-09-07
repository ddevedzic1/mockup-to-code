import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { extractClosestEdge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';

import {
  moveElement,
  addElement,
} from '../../../treeModel/slices/treeModelSlice';
import { generateId } from '../../../utils/helpers';

function useDroppableMonitor() {
  const dispatch = useDispatch();
  useEffect(() => {
    const SPACE_THRESHOLD = 5;
    return monitorForElements({
      onDrop: args => {
        const { source, location } = args;

        if (!location.current.dropTargets.length) {
          return;
        }

        const elementId = source.data?.id;
        const newElementDefaultData = source.data?.newElementDefaultData;
        if (!elementId) return;

        const [, initial] = location.initial.dropTargets;
        const oldParentId = initial?.data?.id;
        if (!oldParentId && !newElementDefaultData) return;

        const [dropFirst, dropSecond] = location.current.dropTargets;

        let newParentId = null;
        let sibling = {};

        const { clientX: cursorX } = location.current.input;
        const { left: leftEdge, right: rightEdge } =
          dropFirst.element.getBoundingClientRect();

        if (!dropSecond) {
          newParentId = dropFirst.data.id;
        } else if (dropFirst.element.tagName !== 'DIV') {
          const closestEdge = extractClosestEdge(dropFirst.data);
          newParentId = dropSecond.data.id;
          sibling = {
            edge: closestEdge,
            id: dropFirst.data.id,
          };
        } else if (cursorX - leftEdge < SPACE_THRESHOLD) {
          newParentId = dropSecond.data.id;
          sibling = {
            edge: 'left',
            id: dropFirst.data.id,
          };
        } else if (rightEdge - cursorX < SPACE_THRESHOLD) {
          newParentId = dropSecond.data.id;
          sibling = {
            edge: 'right',
            id: dropFirst.data.id,
          };
        } else {
          newParentId = dropFirst.data.id;
        }

        if (newElementDefaultData) {
          const id = generateId();
          const element = {
            id,
            ...newElementDefaultData,
          };
          dispatch(addElement({ parentId: newParentId, element, sibling }));
        } else {
          if (newParentId === elementId) return;
          dispatch(
            moveElement({ oldParentId, newParentId, elementId, sibling })
          );
        }
      },
    });
  }, [dispatch]);
}

export default useDroppableMonitor;
