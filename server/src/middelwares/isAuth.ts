import { MyContext } from "src/types";
import { MiddlewareFn } from "type-graphql";

export const isAuth:MiddlewareFn<MyContext> = ({context}, next)=>{
    if(!context.req.session.userId){
      console.log(new Error('not authenticated'));
        throw new Error('not authenticated')
      }
      return next()
}