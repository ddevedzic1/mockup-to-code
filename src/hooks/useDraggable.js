import { useEffect } from 'react';
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

function useDraggable({ id, ref, type, setState }) {
  useEffect(() => {
    if (id === 'rootElement') return;
    let element = ref.current;
    if (type === 'element') element = ref.current?.firstChild;
    if (!element) return;
    return draggable({
      element: element,
      getInitialData: () => ({ id, type }),
      onDragStart: () => setState({ type: 'idle' }),
    });
  }, [id, ref, type, setState]);
}

export default useDraggable;
