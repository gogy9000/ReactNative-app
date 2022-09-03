export type ItemArr={
    id:number
    name:string
    age:number
}

export const arrName=["asd","asd","dsf","dsfg","dg","dfgdfg","dfgdg","dfgdfg","dfgdfg","dfgdfg","dfgdfg","dfgdg"]

export const arr=new Array(10).fill(null).map((item,ind)=>(
    {id:ind+2,name:arrName[ind],age:ind+2}))