import gif from './gif/cyborg.gif'

export const ErrorPrueba = (error) => {
    if(error) {
        return (
            <div>
                <h1>404 NOT FOUND</h1> 
                <img width="727" height="409" src={gif} alt="404 NOT FOUND"></img>
                <div class="tenor-gif-embed" data-postid="22357462" data-share-method="host" data-aspect-ratio="1.37339" data-width="100%"><a href="https://tenor.com/view/cyborg-kuro-chan-falling-gif-22357462">Cyborg Kuro Chan Falling GIF</a>from <a href="https://tenor.com/search/cyborg+kuro+chan-gifs">Cyborg Kuro Chan GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>     
            </div>           
        )
    }
}
//export default ErrorPrueba
