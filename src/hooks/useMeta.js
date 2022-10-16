export function useMeta(metaData= {}) {
    if(metaData.title) {
        document.title = metaData.title;
    }

    document.querySelector('meta[name="description"]').setAttribute("content", metaData.description);
}