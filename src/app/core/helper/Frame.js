const _listener = (event, cb) => {
    if (event.origin !== Frame.editor) {
        return;
    }
    cb(event.data);
};

export const Frame = {
    api: 'http://api.mailmaker.loc',
    editor: 'http://editor.mailmaker.loc/',
    frame: false,
    create: (id) => {
        Frame.iframe = document.createElement('iframe');
        Frame.iframe.src = `${Frame.editor}?rest=${Frame.api}&id=${id}`;
        Frame.iframe.className = 'frame';
        if (window.addEventListener) {
            window.addEventListener('message', _listener);
        } else {
            window.attachEvent('onmessage', _listener);
        }
        return Frame.iframe;
    },
    close: () => {
        Frame.iframe.remove();
    },
    edit: (id) => {
        Frame.create(id);
        return Frame.iframe;
    },
};
