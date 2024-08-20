import { useEffect } from 'react';
import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import {
  attachClosestEdge,
  extractClosestEdge,
} from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';

function useDroppable({ id, ref, type, setState }) {
  useEffect(() => {
    let element = ref.current;
    if (type === 'element') element = ref.current?.firstChild;
    if (!element) return;
    const idle = { type: 'idle' };
    return dropTargetForElements({
      element: element,
      canDrop: args => args.source.data.type === type,
      getIsSticky: () => false,
      getData: ({ input, element }) => {
        const data = {
          type,
          id,
        };
        return attachClosestEdge(data, {
          input,
          element,
          allowedEdges: ['left', 'right'],
        });
      },
      onDragEnter: args => {
        if (args.source.data.id === id) {
          return;
        }
        setState({
          type: `is-${type}-over`,
          closestEdge: extractClosestEdge(args.self.data),
        });
      },
      onDrag: args => {
        if (args.source.data.id === id) {
          return;
        }
        setState(current => {
          const closestEdge = extractClosestEdge(args.self.data);
          if (
            current.type === `is-${type}-over` &&
            current.closestEdge === closestEdge
          ) {
            return current;
          }
          return {
            type: `is-${type}-over`,
            closestEdge,
          };
        });
      },
      onDragLeave: () => {
        setState(idle);
      },
      onDrop: () => {
        setState(idle);
      },
    });
  }, [id, ref, type, setState]);
}

export default useDroppable;
