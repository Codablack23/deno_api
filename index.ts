import Deenoot ,{Response,Request} from "https://deno.land/x/denoot/mod.ts";
import {getAllSnacks, getSnack,addSnack,removeSnack} from './controller/controller.ts'

const app = Deenoot.app(7000, 'localhost', ({ localhostURL }) => {
    console.log("listening at port 7000")
})
app.static('/assets',{
    folder:'public'
})
app.get('/',(req:Request,res:Response)=>{
    // res.send({
    //     status:404,
    //     message:"my new api end Point so lets Do this"
    // })
    return res.sendFile('./views/index.html')
})

app.get('/api/snacks/',getAllSnacks)
app.get('/api/snacks/{id}',getSnack)
app.post('/api/add_snack/',addSnack)
app.delete('/api/snacks/{id}',removeSnack)
