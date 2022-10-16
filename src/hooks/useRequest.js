import {onMounted, ref} from "vue";
import {useMeta} from "@/hooks/useMeta";

export function useRequest(url, params = {}, callback) {
    const request = () => {
        const apiUrl = process.env.VUE_APP_API_URL + url;

        fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(params)
        }).then(function (response) {
            if (response) {
                const json = response.json();
                if (json) {
                    json.then(function (data) {
                        callback(
                            data
                        );

                        useMeta(data.metaData);
                    });
                } else {
                    console.log('Json error');
                }
            } else {
                console.log('Server no response');
            }
        }).catch(function () {
            console.log('Network error');
        });

    }

    onMounted(request);
}