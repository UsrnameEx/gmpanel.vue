import {useRequest} from "@/hooks/useRequest";
import eventBus from "@/eventBus";

export function useGetApp() {
    useRequest('MainModule/loadApp', {}, (res) => {
        eventBus.emit('loadApp', res);
    });
}