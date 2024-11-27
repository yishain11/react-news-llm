const url = `http://api.mediastack.com/v1/news`;

export function getNews() {
    const params = {
        languages: 'en',
        countries: 'us,il,ae',
        access_key: "44ce3a4f7572323b8d6cbd5ee6440c96",
        keywords: "israel,palestine",
        limit: 10
    };
    const urlParams = new URLSearchParams(params).toString();
    return fetch(`${url}?${urlParams}`)
        .then(res => res.json())
        .then(res => {
            return res;
        });
}