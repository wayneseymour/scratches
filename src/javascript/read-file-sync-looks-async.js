import { readFile } from "fs";

const readJSON = async(function *(filename){
  return JSON.parse(yield readFile(filename, 'utf8'))
})

readJSON('./package.json')

function async(makeGenerator){
  return function (){
    var generator = makeGenerator.apply(this, arguments)
    
    function handle(result){ // { done: [Boolean], value: [Object] }
      if (result.done) return result.value
      
      return result.value.then(function (res){
        return handle(generator.next(res))
      }, function (err){
        return handle(generator.throw(err))
      })
    }
    
    return handle(generator.next())
  }
}