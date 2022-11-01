var readline= require('readline');
rl= readline.createInterface(process.stdin, process.stdout);

rl.setPrompt("-_- ");
rl.prompt();

var listTodo= [];

var commands= {
    ls:()=>{
        console.log(listTodo);
    },
    add:(item)=>{
        listTodo.push(item);    
    }
}

// hai tham số trong on() truyền vào phải giống nhau
rl.on('line', (line)=>{
    var word= line.split(' ');
    var comman= word.shift();
    var argsStr= word.join(' ## ');
    commands[comman] (argsStr);
    rl.prompt();
})