$(document).ready(() => {
    const renderHTML = (html) => {
        $('div#root').append(html)
    }
    const renderImage = (img) => {
        if (!img) return
        let html = `<img src="${img}">`
        return html
    }
    const getImageGiffy = () => {
        const URL = `https://api.giphy.com/v1/gifs/search`
        const APIKEY = `1GFc6mHvdUoiL4RDwBtED405PsbCKntX`
        const FETCHIMG = `${URL}?api_key=${APIKEY}&q=dog`
        $.ajax({
            url: FETCHIMG,
            dataType: 'json',
            success: (res) => {
                if (!res) return console.log(res)
                res.data.map((item) => {
                    renderHTML(renderImage(item.url))

                })
            }
        })
    }
    getImageGiffy()

})