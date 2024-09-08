import { useEffect } from 'react';
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

function useDraggable({ id, ref, type, setState }) {
  useEffect(() => {
    if (id === 'rootElement') return;
    let { current: element } = ref;
    if (type === 'element') element = element?.firstChild;
    if (!element) return;
    return draggable({
      element: element,
      getInitialData: () => ({ id, type }),
      onDragStart: () => setState({ type: 'idle' }),
    });
  }, [id, ref, type, setState]);
}

export default useDraggable;
