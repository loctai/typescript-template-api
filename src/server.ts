import 'dotenv/config'
import { App } from './app'
import { HelloWorldRoute } from './routes/hello.route'
import { NFTRoute } from './routes/nft.route'
const app = new App([
    new HelloWorldRoute(),
    new NFTRoute(),
])

app.listen()
