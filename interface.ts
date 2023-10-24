/*
 * @Description: 
 * @Version: 
 * @Autor: houyan
 * @Date: 2023-10-24 23:06:06
 * @LastEditors: houyan
 * @LastEditTime: 2023-10-24 23:19:00
 */

// interface type大体上相似，区别是type可以直接定义基本数据类型， interface只能定义对象
interface Person {
    name: string;
    age?: number;
    [proName: string]: any;
    say(): string // 定义say方法 返回字符串

}
// 接口继承
interface Teacher extends Person {
    teach(): string
}

// 直接定义方法类型
interface SayHi {
    (word: string): string
}

type Person1 = {
    name: string;
    age?: number;
    [proName: string]: any
}

type Person2 = string

const getPersonName = (person: Person): void => {}
const person = {
    name: 'hy',
    age: 16,
    sex: 'male',
    say() {
        return 'hello'
    }
}

getPersonName(person)


const say: SayHi = (word: string) => {
   return word
}


// 类应用接口，类必须有接口的必须属性
class User implements Person {
    name = 'hy'
    say() {
        return 'hello'
    }

}