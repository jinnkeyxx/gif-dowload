class getImageGiffy {
    constructor() {
        this.html = null
        this.defaultImages = 'Hacker'
        this.dataImage = []
        this.render()
    }
    async render() {
        const items = await this.fetchImg()
        document.getElementById('root').innerHTML = await this.renderHTML(items)
        window.onkeypress = (event) => { if (event.keyCode == 13) { this.update() } }
        document.getElementById('basic-addon2').onclick = () => { this.update() }
    }
    renderHTML(chill = "") {
        let html = `<div class="container">
        <div class="input-group mb-3 mt-3">
            <input type="text" id="input" class="form-control" placeholder="${this.defaultImages}" aria-label="gif" aria-describedby="basic-addon2">
            <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">Search</span>
            </div>
        </div>
        <div class="row text-center" id="gif">
            ${chill}
        </div>`
        return html
    }
    update() {
        if (!document.getElementById('input').value) return alert('vui long nhap o tim kiem')
        this.defaultImages = document.getElementById('input').value
        this.render()
    }
    async getImg(key_work) {
        const URL = `https://api.giphy.com/v1/gifs/search`
        const APIKEY = `1GFc6mHvdUoiL4RDwBtED405PsbCKntX`
        const LIMIT = 100
        const FETCHIMG = `${URL}?api_key=${APIKEY}&q=${key_work}&limit=${LIMIT}`
        const result = await fetch(FETCHIMG).then(res => res.json())
        return result.data
    }
    async fetchImg() {
        let html
        this.dataImage = await this.getImg(this.defaultImages)
        if (this.dataImage.length <= 0) return html = `<h1 class="text-center">no data</h1>`
        html = this.dataImage.map(item =>
            `<div class="col"><img src="${item.images.downsized.url}"/> </div>`
        ).join('')
        return html
    }
}
const gify = new getImageGiffy()