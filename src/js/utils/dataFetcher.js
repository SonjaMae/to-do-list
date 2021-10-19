/* 
    dataFetcher function takes a url parameter (and is async so returns a promise)

    description:

    parameters:
        url: string
*/

const dataFetcher = async function (url = null) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}
export default dataFetcher;